const { WriterProto } = require('./writerProto')
const { promisify } = require('util')
const moment = require('moment')
const inquirer = require('inquirer')
const colors = require('colors')
//const { table } = require('console')

const UserProto = function(id, filepath, type) {
    WriterProto.call(this, id, filepath, type)
    this.type = type
    this.staticInput = ``
    this.recursiveBadges = []
    this.recursiveTableOfContents = []
    this.recursiveTests = []
    this.recursiveCredits = []

    this.usr_targProp = ``
    this.real_tarProp = ``
    this.real_tarPropUpp = ``
    this.real_tarPropLow = ``
    this.real_tarPropUppSing = ``
    this.real_tarPropLowSing = ``
    this.rec_propmts = []
    this.rec_lock = 0
    this.exec_lock = 0
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

    const description = `## Description\n${this.staticInput.description}`
    this.setProperty(`description`, description)
    
    const usage = `## Usage\n${this.staticInput.usage})`
    this.setProperty(`usage`, usage)

    const snapshot = `![image](./assets/${this.staticInput.snapshot})\n`
    this.setProperty(`snapshot`, snapshot)
    
    const license = `## License\n${this.staticInput.license}\n`
    this.setProperty(`license`, license)

    const installation = `## Installation\n${this.staticInput.installation}`
    this.setProperty(`installation`, installation)

    let badges = []
    this.recursiveBadges.forEach((element) => {
        badges.push(`${element.badges} `)
    })
    this.setProperty(`badges`, badges)

    let tableofcontents = []
    tableofcontents.push(`## Table Of Contents\n`)
    this.recursiveTableOfContents.forEach((element) => {
        tableofcontents.push(`${element.tableofcontents}\n`)
    })
    this.setProperty(`tableofcontents`, tableofcontents)

    let tests = []
    tests.push(`## Tests\n`)
    this.recursiveTests.forEach((element) => {
        tests.push(element.tests)
    })
    this.setProperty(`tests`, tests)

    let credits = []
    tests.push(`## Credits\n`)
    this.recursiveCredits.forEach((element) => {
        credits.push(element.credits)
    })
    this.setProperty(`credits`, credits)

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
        if (spl < 2) {
            console.log(` EDITOR :: MUST BE AT LEAST 2 LINES, TRY AGAIN`.brightRed)
        }
        else {
            return true
        }
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
            choices: [`Apache License 2.0`, `GNU GPLv3`, `MIT`, `ISC`, `GNU GPLv2`],
        },        
        {
            type: `editor`,
            name: `installation`,
            message: `INSTALLATION`.yellow,
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

//let test =  new UserProto(999,`ABC.md`)
//console.log(test.getId())

module.exports = { UserProto }
