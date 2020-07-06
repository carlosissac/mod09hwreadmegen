const fs = require('fs');
const inquirer = require('inquirer');
const { ReadMe } = require('./readme');
const moment = require('moment');

class InputUser extends ReadMe {
    kickoff() {
        console.log(`INPUUUTTT USSSSERRRR CLASSSS`);
        this.showId();        
    }
}

const iuse = new InputUser(Number(moment().format('x')));

module.exports.start = iuse.kickoff();