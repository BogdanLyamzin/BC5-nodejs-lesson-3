const {program} = require("commander");

program
    .option("-fl, --first-letter <type>")
    .option("-sl, --second-letter <type>")
    .option("-s, --sum")
    .option("-m, --minus")

program.parse(process.argv);

const options = program.opts();

if(options.s){
    console.log(options.fl + options.sl);
}
else {
    console.log(options.fl - options.sl);
}