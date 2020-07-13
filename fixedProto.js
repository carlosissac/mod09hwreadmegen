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

const title = `# Project Readme Generator - Open Source ("ProjectID:${iproto.getId()}")\n`
iproto.setProperty(`title`, title)

const badges = [`![GitHub last commit](https://img.shields.io/github/last-commit/carlosissac/mod09hwreadmegen) `,
`![Twitter Follow](https://img.shields.io/twitter/follow/zzzakk_cccrlss?style=social) `,
`![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/carlosissac/mod09hwreadmegen) `,
`![GitHub followers](https://img.shields.io/github/followers/carlosissac?style=social) `,
`[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md) `
];
iproto.setProperty(`badges`, badges)

const description = `## Description\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n`
iproto.setProperty(`description`, description)

const usage = `## Usage\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n`
iproto.setProperty(`usage`, usage)

const snapshot = `![image](./assets/vw.jpg)\n`
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

const license = `## License\nMIT\n`
iproto.setProperty(`license`, license)

const installation = `## Installation\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n`
iproto.setProperty(`installation`, installation)

const tests = [
    `## Tests\n`,
    `* Prueba 1\n`,
    `* Teste 2\n`,
    `* Prüfung 3\n`,
    `* Próf 4\n`,
    `* тест 5\n`
];
iproto.setProperty(`tests`, tests)

const credits = [
    `## Credits\n`,
    `* Persona 1\n`,
    `* Pessoa 2\n`,
    `* Person 3\n`,
    `* Personne 4\n`,
    `* человек 5\n`
];
iproto.setProperty(`credits`, credits)

const contributing = `## Contributing\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n`
iproto.setProperty(`contributing`, contributing)

iproto.documentBuilder()

module.exports.startFixed = iproto

//let test =  new FixedProto(888,`ABC.md`)
//console.log(test.getId())
//module.exports = { UserProto }
