const { ReadMeProto } = require('./readmeProto')

const WriterProto = function(id, filepath) {
    ReadMeProto.call(this, id)
    this.filepath = filepath
}

WriterProto.prototype = Object.create(ReadMeProto.prototype)

WriterProto.prototype.documentBuilder = async function() {
    for(let i=0; i<11; i++) {
        if (i === 0) {
            let promise = await Promise.all([this.fileClear(this.filepath)])
            console.log(promise)
        }
        else if (i === 1) {
            let promise = await Promise.all([this.fileAppend(this.filepath, this.getProperty(`title`), `title`)])
            console.log(promise)
        }
        else if (i === 2) {
            const badges = this.getProperty(`badges`);
            for(let j=0; j<badges.length; j++) {
                if(j === (badges.length-1)) {
                    badges[j] += `\n`
                }
                let promise = await Promise.all([this.fileAppend(this.filepath, badges[j], `badge`)])
                console.log(promise)
            }
        }
        else if (i === 3) {
            let promise = await Promise.all([this.fileAppend(this.filepath, this.getProperty(`description`), `description`)])
            console.log(promise)
        }
        else if (i === 4) {
            let promise = await Promise.all([this.fileAppend(this.filepath, this.getProperty(`usage`), `usage`)])
            console.log(promise)
        }
        else if (i === 5) {
            let promise = await Promise.all([this.fileAppend(this.filepath, this.getProperty(`snapshot`), `snapshot`)])
            console.log(promise)
        }
        else if (i === 6) {
            const toc = this.getProperty(`tableofcontents`)
            for(let k=0; k<toc.length; k++) {
                let promise = await Promise.all([this.fileAppend(this.filepath, toc[k], `tableofcontent`)])
                console.log(promise)
            }
        }
        else if (i === 7) {
            let promise = await Promise.all([this.fileAppend(this.filepath, this.getProperty(`license`), `license`)])
            console.log(promise)
        }
        else if (i === 8) {
            let promise = await Promise.all([this.fileAppend(this.filepath, this.getProperty(`installation`), `installation`)])
            console.log(promise)
        }
        else if (i === 9) {
            const tests = this.getProperty(`tests`)
            for(let m=0; m<tests.length; m++) {
                let promise = await Promise.all([this.fileAppend(this.filepath, tests[m], `test`)])
                console.log(promise)
            }
        }
        else if (i === 10) {
            const credits = this.getProperty(`credits`)
            for(let n=0; n<credits.length; n++) {
                let promise = await Promise.all([this.fileAppend(this.filepath, credits[n], `credits`)])
                console.log(promise)
            }
        }
    }
}

//let test =  new WriterProto(777,`ABC.md`)
//console.log(test.getId())

module.exports = { WriterProto }
