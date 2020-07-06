const fs = require('fs');
const { ReadMe } = require('./readme');
const moment = require('moment');

class InputFixed extends ReadMe {

    kickoff() {
        console.log(`INPUUUTTT FIXXXXXEDDD CLASSSS`);
        console.log(this.getId());
        console.log(this.getProperty('title'));
        console.log(this.getProperty('badges'));
        console.log(this.getProperty('description'));
        console.log(this.getProperty('tableofcontents'));
        console.log(this.getProperty('license'));
        console.log(this.getProperty('contributing'));
        console.log(this.getProperty('questions'));
    }
}

const ifix = new InputFixed(Number(moment().format('x')));

const rmTitle = `# Project Readme Generator - Open Source ("ProjectID:${ifix.getId()}")`;
ifix.setProperty('title',rmTitle);

const rmBadges = [`![GitHub last commit](https://img.shields.io/github/last-commit/carlosissac/mod09hwreadmegen)`,
`![Twitter URL](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Fzzzakk_cccrlss)`,
`https://img.shields.io/github/license/carlosissac/mod09hwreadmegen`,
`https://img.shields.io/github/watchers/carlosissac/mod09hwreadmegen?style=social`
];
ifix.setProperty('badges',rmBadges);

const rmDesc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content`;
ifix.setProperty('description',rmDesc);

const rmTableOfContents = [
    `* [App Snapshot](#app-snapshot)`,
    `* [Installation](#installation)`,
    `* [Tests](#tests)`,
    `* [License](#license)`,
    `* [Contributing](#contributing)`,
    `* [Questions](#questions)`
];
ifix.setProperty('tableofcontents',rmTableOfContents);

const rmLicense = "MIT";
ifix.setProperty('license',rmLicense);

const rmContributing = `There are many ways in which you can participate in the project, for example:
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
* Contributing to translations`;
ifix.setProperty('contributing',rmContributing);

const rmQuestions = [
    `* Question1?`,
    `* Question2?`,
    `* Question3?`
];
ifix.setProperty('questions',rmQuestions);

module.exports.start = ifix.kickoff();