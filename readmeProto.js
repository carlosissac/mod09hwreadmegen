const fs = require('fs')
const { promisify } = require('util')
const truncate = promisify(fs.truncate)
const appendFile = promisify(fs.appendFile)

const ReadMeProto = function (id) { 
    this.id = id
    this.title = ``
    this.badges = []
    this.description = ``
    this.usage = ``
    this.snapshot = ``
    this.tableofcontents = []
    this.license = ``
    this.installation = ``
    //this.questions = []
    this.tests = []
    this.credits = []
}

ReadMeProto.prototype.getId = function() {
    return this.id
}

ReadMeProto.prototype.setProperty = function(targetProperty, value) {
    this[targetProperty] = value
}

ReadMeProto.prototype.getProperty = function(targetProperty) {
    return this[targetProperty]
}

ReadMeProto.prototype.handleError = function() {
    console.log(`File Write Error >>>> ${error}`)
}

ReadMeProto.prototype.fileAppend = async function(filepath, text, id) {
    await appendFile(filepath, text, error => {
        if(error) handleError(error)
    })
    return `Append ${id}`;
}

ReadMeProto.prototype.fileClear = async function(filepath) {
    await truncate(filepath)
    return `Cleared ${filepath}`
}

//const test = new ReadMeProto(666)
//console.log(test.getId())

module.exports = { ReadMeProto }
