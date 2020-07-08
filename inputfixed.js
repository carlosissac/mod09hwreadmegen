const { ReadMe } = require('./readme');
const moment = require('moment');

class InputFixed extends ReadMe {
    filepath = `README_GENFIX.md`;
    
    async kickoff() {
        let bundle = [];
        for(let i=0; i<9; i++) {
            if(i === 0) {
                let promise = await Promise.all([this.fileClear(this.filepath)]);
                console.log(promise);
            }
            else if (i === 1) {
                let promise = await Promise.all([this.fileAppend(this.filepath, this.getProperty(`title`), `title`)]);
                console.log(promise);
            }
            else if (i === 2) {
                const badges = this.getProperty(`badges`);
                for(let j=0; j<badges.length; j++) {
                    if(j === (badges.length-1)) {
                        badges[j] += `\n`;
                    }
                    let promise = await Promise.all([this.fileAppend(this.filepath, badges[j], `badge`)]);
                    console.log(promise);    
                }
            }
            else if (i === 3) {
                let promise = await Promise.all([this.fileAppend(this.filepath, this.getProperty(`description`), `description`)]);
                console.log(promise);
            }
            else if (i === 4) {
                let promise = await Promise.all([this.fileAppend(this.filepath, this.getProperty(`snapshot`), `snapshot`)]);
                console.log(promise);
            }
            else if (i === 5) {
                const toc = this.getProperty(`tableofcontents`);
                for(let k=0; k<toc.length; k++) {
                    let promise = await Promise.all([this.fileAppend(this.filepath, toc[k], `tableofcontent`)]);
                    console.log(promise);    
                }
            }
            else if (i === 6) {
                let promise = await Promise.all([this.fileAppend(this.filepath, this.getProperty(`license`), `license`)]);
                console.log(promise);
            }
            else if (i === 7) {
                let promise = await Promise.all([this.fileAppend(this.filepath, this.getProperty(`contributing`), `contributing`)]);
                console.log(promise);
            }
            else if (i === 8) {
                const questions = this.getProperty(`questions`);
                for(let l=0; l<questions.length; l++) {
                    let promise = await Promise.all([this.fileAppend(this.filepath, questions[l], `question`)]);
                    console.log(promise);    
                }
            }
        }
    }
}

const ifix = new InputFixed(Number(moment().format('x')));

const rmTitle = `# Project Readme Generator - Open Source ("ProjectID:${ifix.getId()}")\n`;
ifix.setProperty('title',rmTitle);

const rmBadges = [`![GitHub last commit](https://img.shields.io/github/last-commit/carlosissac/mod09hwreadmegen) `,
`![Twitter URL](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Fzzzakk_cccrlss) `,
`https://img.shields.io/github/license/carlosissac/mod09hwreadmegen `,
`https://img.shields.io/github/watchers/carlosissac/mod09hwreadmegen?style=social `
];
ifix.setProperty('badges',rmBadges);

const rmDesc = `## Description\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n`;
ifix.setProperty('description',rmDesc);

const rmSnapshot = `## Snapshot\n![image](./assets/vw.jpg)\n`;
ifix.setProperty('snapshot',rmSnapshot);

const rmTableOfContents = [
    `## Table Of Contents\n`, 
    `* [App Snapshot](#app-snapshot)\n`,
    `* [Installation](#installation)\n`,
    `* [Tests](#tests)\n`,
    `* [License](#license)\n`,
    `* [Contributing](#contributing)\n`,
    `* [Questions](#questions)\n`
];
ifix.setProperty('tableofcontents',rmTableOfContents);

const rmLicense = "## License\nMIT\n";
ifix.setProperty('license',rmLicense);

const rmContributing = `## Contributing\nThere are many ways in which you can participate in the project, for example:
* Submit bugs and feature requests, and help us verify as they are checked in.
* Review source code changes.
* Review the documentation and make pull requests for anything from typos to new content.
If you are interested in fixing issues and contributing directly to the code base,
please see the document, "How to Contribute", which covers the following:
* How to build and run from source.
* The development workflow, including debugging and running tests.
* Coding guidelines.
* Submitting pull requests.
* Finding an issue to work on.
* Contributing to translations\n`;
ifix.setProperty('contributing',rmContributing);

const rmQuestions = [
    `## Questions\n`,
    `* Pregunta 1?\n`,
    `* Questão 2?\n`,
    `* Frage 3?\n`
];
ifix.setProperty('questions',rmQuestions);

module.exports.start = ifix.kickoff();