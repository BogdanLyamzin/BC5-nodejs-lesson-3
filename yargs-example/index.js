const yargs = require("yargs/yargs");
const {hideBin} = require("yargs/helpers");

const {argv} = yargs(hideBin(process.argv));

if(argv.firstNumber && argv.secondNumber) {
    const sum = argv.firstNumber + argv.secondNumber
    console.log(sum);
}
else {
    console.log("Sum need two numbers!")
}
