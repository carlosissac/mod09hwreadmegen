const fs = require('fs');
const { promisify } = require('util');
const truncate = promisify(fs.truncate);
const appendFile = promisify(fs.appendFile);

class ReadMe {
        title = ``;
        badges = [];
        description = ``;
        snapshot = ``;
        tableofcontents = [];
        license = ``;
        contributing = ``;
        questions = [];
        tests = [];

    constructor (id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setProperty(targetProperty,value) {
        this[targetProperty] = value;
    }

    getProperty(targetProperty) {
        return this[targetProperty];
    }

    handleError(error) {
        console.log(`File Write Error >>>> ${error}`);
    }

    async fileAppend(filepath, text, id) {
        await appendFile(filepath, text, error => {
                    if(error) handleError(error);
                })
        return `Append ${id}`;
    }

    async fileClear(filepath) {
        await truncate(filepath);
        return `Cleared ${filepath}`;
    }
}

module.exports = { ReadMe };