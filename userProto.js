const { WriterProto } = require('./writerProto')
const { LicenseProto } = require('./licenseProto')
const moment = require('moment')
const inquirer = require('inquirer')
const colors = require('colors')

const UserProto = function(id, filepath, type) {
    WriterProto.call(this, id, filepath, type)
    this.type = type
    this.staticInput = ``
    this.recursiveBadges = []
    this.recursiveTableOfContents = []
    this.recursiveTests = []
    this.recursiveCredits = []
    this.recursiveQuestions = []

    this.usr_targProp = ``
    this.real_tarProp = ``
    this.real_tarPropUpp = ``
    this.real_tarPropLow = ``
    this.real_tarPropUppSing = ``
    this.real_tarPropLowSing = ``
    this.rec_propmts = []
    this.rec_lock = 0
    this.exec_lock = 0

    this.licenseBadge = ``
    this.licenseDesc = ``
}

UserProto.prototype = Object.create(WriterProto.prototype)

UserProto.prototype.getType = function() {
    return this.type
}

UserProto.prototype.parseTargetProperty = function(prop) {
    this.usr_targProp = prop
    this.real_tarProp = prop.slice(9)
    this.real_tarPropUpp = this.real_tarProp.toUpperCase()
    this.real_tarPropUppSing = this.real_tarPropUpp.slice(0, this.real_tarPropUpp.length - 1)
    this.real_tarPropLow = this.real_tarProp.toLowerCase()
    this.real_tarPropLowSing = this.real_tarPropLow.slice(0, this.real_tarPropLow.length - 1)
}

UserProto.prototype.formatInput = function() {
    const title = `# Project ${this.staticInput.title} - Open Source ("ProjectID:${this.getId()}")\n` 
    this.setProperty(`title`, title)

    const email = `${this.staticInput.email}`
    this.setProperty(`email`, email)

    const ghname = `${this.staticInput.ghname}`
    this.setProperty(`ghname`, ghname)

    const description = `## Description\n${this.staticInput.description}`
    this.setProperty(`description`, description)
    
    const usage = `## Usage\n${this.staticInput.usage}\n`
    this.setProperty(`usage`, usage)

    const snapshot = `![image](./assets/${this.staticInput.snapshot})\n`
    this.setProperty(`snapshot`, snapshot)
    
    lp = new LicenseProto(this.staticInput.license)
    console.log(`LICENSSSSSSEEEEEEE ${lp.getType}`)
    const license = `## License\n*Type:* ${lp.getType}\n*Description:* ${lp.getDescription}\n`
    this.setProperty(`license`, license)

    const installation = `## Installation\n${this.staticInput.installation}`
    this.setProperty(`installation`, installation)

    const contributing = `## Contributing\n${this.staticInput.contributing}`
    this.setProperty(`contributing`, contributing)

    let badges = []
    badges.push(`${lp.getBadge}`)
    this.recursiveBadges.forEach((element) => {
        badges.push(`${element.badges} `)
    })
    this.setProperty(`badges`, badges)

    let tableofcontents = []
    tableofcontents.push(`## Table Of Contents\n`)
    this.recursiveTableOfContents.forEach((element) => {
        tableofcontents.push(`* [${element.tableofcontents}](#${element.tableofcontents})\n`)
    })
    this.setProperty(`tableofcontents`, tableofcontents)

    let tests = []
    tests.push(`## Tests\n`)
    tests.push(`Listed below is the testing strategy followed for this effort:`)
    this.recursiveTests.forEach((element) => {
        tests.push(`* ${element.tests}\n\n`)
    })
    this.setProperty(`tests`, tests)

    let credits = []
    tests.push(`## Credits\n`)
    this.recursiveCredits.forEach((element) => {
        credits.push(`* ${element.credits}\n`)
    })
    this.setProperty(`credits`, credits)

    let questions = []
    questions.push(`## Questions\n`)
    questions.push(`* Please feel free to contact me at ${this.staticInput.email} with any additional questions or comments.\n`)
    questions.push(`* Follow me on [Github](https://github.com/${this.staticInput.ghname}).\n`)
    this.recursiveQuestions.forEach((element) => {
        credits.push(`* ${element.questions}\n`)
    })
    this.setProperty(`questions`, questions)

    this.exec_lock++
    this.captureExec()
}

UserProto.prototype.validateInput = function(text) {
    if (text !== ``) {
        return true
    }
    else {
        console.log(` INPUT :: NO INPUT DETECTED, TRY AGAIN`.brightRed)
    }
}

UserProto.prototype.validateEditor = function(text) {
    if (text !== ``) {
        let sp = text.split(`\n`)
        let spl = sp.length-1
        return true
    }
    else {
        console.log(` EDITOR :: NO INPUT SUBMITTED, TRY AGAIN`.brightRed)
    }
}


UserProto.prototype.getStaticInput = async function() {
    this.staticInput = await inquirer.prompt([
        {
            type : `input`,
            name : `title`,
            message : `TITLE`.yellow,
            validate : this.validateInput
        },
        {
            type : `input`,
            name : `email`,
            message : `EMAIL`.yellow,
            validate : this.validateInput
        },
        {
            type : `input`,
            name : `ghname`,
            message : `GITHUB NAME`.yellow,
            validate : this.validateInput
        },
        {
            type : `editor`,
            name : `description`,
            message : `DESCRIPTION`.yellow,
            validate : this.validateEditor
        },
        {
            type : `editor`,
            name : `usage`,
            message : `USAGE`.yellow,
            validate : this.validateEditor
        },
        {
            type : `input`,
            name : `snapshot`,
            message : `SNAPSHOT (file should already exists in ./assests folder)`.yellow,
            validate : this.validateInput
        },
        {
            type: `list`,
            name: `license`,
            message: `LICENSE`.yellow,
            choices: [`Apache License 2.0`,`Boost Software License 1.0`,`BSD 3-Clause License`,`GNU GPLv3`, `MIT`, `ISC`, `IBM Public License v1.0`]
        },        
        {
            type: `editor`,
            name: `installation`,
            message: `INSTALLATION`.yellow,
            validate : this.validateEditor
        },
        {
            type: `editor`,
            name: `contributing`,
            message: `CONTRIBUTING`.yellow,
            validate : this.validateEditor
        }
    ])
    this.exec_lock++
    console.log(` STATIC PROMPTS :: CAPTURE CONCLUDED`.brightGreen)
    this.captureExec()
}

UserProto.prototype.recursiveCapture = async function() {
    const utp = this.usr_targProp
    const promise = await inquirer.prompt(this.rec_propmts)
    this[utp].push(promise)
    if (promise.askAgain) {
        this.recursiveCapture()
    } 
    else {
        console.log(` ${this.real_tarPropUpp} STORED`.brightGreen)
        this.rec_lock++
        this.recursiveExec()
    }
}

UserProto.prototype.recursiveSetup = function(targetProperty) {
    this.parseTargetProperty(targetProperty)
    this.rec_propmts = [
        {
            type : `input`,
            name : `${this.real_tarPropLow}`,
            message : `Write ${this.real_tarPropUppSing}?`.yellow,
            validate: this.validateInput
        },
        {
            type : `confirm`,
            name : `askAgain`,
            message : `Write another ${this.real_tarPropUppSing}?`.yellow, 
            default : true
        }
    ]
}

UserProto.prototype.recursiveExec = function() {
    if (this.rec_lock === 0) { 
        this.recursiveSetup(`recursiveBadges`)
        this.recursiveCapture()
    }
    else if (this.rec_lock === 1) {
        this.recursiveSetup(`recursiveTableOfContents`)
        this.recursiveCapture()
    }
    else if (this.rec_lock === 2) {
        this.recursiveSetup(`recursiveTests`)
        this.recursiveCapture()
    }
    else if (this.rec_lock === 3) {
        this.recursiveSetup(`recursiveCredits`)
        this.recursiveCapture()
    }
    else if (this.rec_lock === 4) {
        this.recursiveSetup(`recursiveQuestions`)
        this.recursiveCapture()
    }
    else {
        console.log(` RECURSIVE PROMPTS :: CAPTURE CONCLUDED`.brightGreen)
        this.exec_lock++
        this.captureExec()
    }
}

UserProto.prototype.captureExec = function() {
    if(this.exec_lock === 0) {
        this.getStaticInput()
    }
    else if (this.exec_lock === 1) {
        this.recursiveExec()
    }
    else if (this.exec_lock === 2) {
        this.formatInput()
    }
    else if (this.exec_lock === 3) {
        this.documentBuilder()
    }
}

iproto = new UserProto(Number(moment().format('x')),`README_GENUSER.md`,`User`)
console.log(`ProjectID ${iproto.getId()} :: InputType ${iproto.getType()}`.green)

iproto.captureExec()

module.exports.startUser = iproto
