let select_mode =  true; // false = fixedInput, true = userInput

if(!select_mode) {
    const ifixed = require('./fixedProto');
    ifixed.startFixed;
}
else {
    //console.log(`selectmode ${select_mode}`);
    const iuser = require('./userProto');
    iuser.start;
}
