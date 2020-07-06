let select_mode = false; //  = fixedInput, true = userInput

if(!select_mode) {
    //console.log(`selectmode ${select_mode}`);
    const ifixed = require('./inputfixed');
    ifixed.start;
}
else {
    //console.log(`selectmode ${select_mode}`);
    const iuser = require('./inputuser');
    iuser.start;
}
