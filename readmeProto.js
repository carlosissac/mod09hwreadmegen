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
    this.tests = []
    this.credits = []
    this.contributing = ``
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

ReadMeProto.prototype.handleError = function(error) {
    console.log(`File Write Error >>>> ${error}`)
}

ReadMeProto.prototype.fileAppend = async function(filepath, text, id) {
    await appendFile(filepath, text, (error) => {//if(error) throw error //handleError(error)
    })
    return `Append ${id}`;
}

ReadMeProto.prototype.fileClear = async function(filepath) {
    await truncate(filepath)
    return `Cleared ${filepath}`
}

module.exports = { ReadMeProto }
