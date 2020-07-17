const { WriterProto } = require('./writerProto')
const moment = require('moment')
const colors = require('colors')

const FixedProto = function(id, filepath, type) {
    WriterProto.call(this, id, filepath, type)
    this.type = type
}

FixedProto.prototype = Object.create(WriterProto.prototype)

FixedProto.prototype.getType = function() {
    return this.type
}

iproto = new FixedProto(Number(moment().format('x')),`README_GENFIX.md`,`Fixed`)
console.log(`ProjectID ${iproto.getId()} :: InputType ${iproto.getType()}`.yellow)

const title = `# Project Readme Generator - Fixed Input - Open Source ("ProjectID:${iproto.getId()}")\n`
iproto.setProperty(`title`, title)

const badges = [`![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) `, 
`![GitHub last commit](https://img.shields.io/github/last-commit/carlosissac/mod09hwreadmegen) `,
`![Twitter Follow](https://img.shields.io/twitter/follow/zzzakk_cccrlss?style=social) `,
`![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/carlosissac/mod09hwreadmegen) `,
`![GitHub followers](https://img.shields.io/github/followers/carlosissac?style=social) `,
`[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md) `
];
iproto.setProperty(`badges`, badges)

const description = `## Description\nWhen creating an open source project on GitHub, it is important to have a quality README with information about the app--what is the app for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project. A command-line application will allow for quick and easy generation of a project README to get started quickly. This will allow a project creator to spend more time working on finishing the project and less time creating a good README.\n`
iproto.setProperty(`description`, description)

const usage = `## Usage\nAfter installation is done open index.js and set "select_mode = false;" in order to use Fixed Mode. This has predefined inputs and it should be used for integration testing purposes.\nSet "select_mode = true;" in order use User Mode and let the user submit custom input. Both modes can be executed by running "Node index.js" in terminal.\n`
iproto.setProperty(`usage`, usage)

const snapshot = `\n![image](./assets/vw.jpg)\n`
iproto.setProperty(`snapshot`, snapshot)

const tableofcontents = [
    `## Table Of Contents\n`, 
    `* [Description](#Description)\n`,
    `* [Usage](#Usage)\n`,
    `* [License](#License)\n`,
    `* [Installation](#Installation)\n`,
    `* [Tests](#Tests)\n`,
    `* [Credits](#Credits)\n`,
    `* [Contributing](#Contributing)\n`,
]
iproto.setProperty(`tableofcontents`, tableofcontents)

const license = `## License\n*Type:* MIT\n*Link:* https://opensource.org/licenses/MIT\n*Description:* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n`
iproto.setProperty(`license`, license)

const installation = `## Installation\n*Step 1.* Clone repo into your localhost.\n\n*Step 2.* Open Terminal and run "npm i --save" in order to install dependencies.\n\n*Step 3.* Write "node index.js"\n\n*Step 4.* Set "select_mode" to either true or false depending on the mode you want to run.\n`
iproto.setProperty(`installation`, installation)

const tests = [
    `## Tests\nListed below is the testing strategy followed for this effort:\n`,
    `* *Test 1.* _readmeProto.test.js and writerProto.test.js Unit Tests._\nTesting for these 2 modules were implemented using Jest unit testing tool library.\nTesting coverage is 100% for all functionality implemented in this module.\nDetails of testing coverage can be audited by looking into in the following file "./coverage/lcov-report/index.html"\n![image](./assets/jest.jpg)\n\n`,
    `* *Test 2.* _fixedProto.js Integration Test._\nModule was designed in order to smoke test the implementation of "writerProto.js and readmeProto.js" and to validate the markdown outcome of the readme document.\nValidation for this was not done using Jest.\nModule can be kicked off setting "select_mode = false" in index.js and subsequently doing a "node.js index.js" or using "node.js fixedProto.js" directly in terminal.\nReadMe file output from this file is located in "./README_GENFIX.md"\n\n`,
    `* *Test 3.* _userProto.js User Acceptance Test._\nThis module contains the inquirer functionality implemented in order to capture user input. Module was validated by user manually. ReadMe file output from this file is located in "./README_GENUSER.md"\n\n`,
    `* *Test 4.* _index.js. No testing was required for this module._\n`
];
iproto.setProperty(`tests`, tests)

const credits = [
    `## Credits\n`,
    `* Maryus Martsyalis\n`,
    `* Colin McPike\n`,
    `* Beki Gonzalez\n`,
    `* Heather Stolz\n`
];
iproto.setProperty(`credits`, credits)

const contributing = `## Contributing\nThis project uses guidelines specified at [Contributor Covenant](https://www.contributor-covenant.org/) and follows open sopurce guidelines for enhancements, additions and improvements.\nAlso please reach out to the project admins for further instructions on pending tasks and how to integrate into our development team.\n`
iproto.setProperty(`contributing`, contributing)

const questions = [
    `## Questions\n`,
    `* Please feel free to contact me at issac@issac.me with any additional questions or comments.\n`,
    `* Follow me on [Github](https://github.com/carlosissac).\n`,
    `* What elements should be included to make a thorough but readable README.me?\n`,
    `* Does anyone goes through all the info stipulated in the README docs?\n`,
    `* Does anyone care about this?\n`,
];
iproto.setProperty(`questions`, questions)

iproto.documentBuilder()

module.exports.startFixed = iproto

