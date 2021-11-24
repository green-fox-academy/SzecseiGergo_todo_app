import minimist from "minimist";
import fs from "fs";
const args = minimist(process.argv);

if (Object.keys(args).length < 2) {
    const commandmanual = fs.readFileSync('./data/manual.txt', 'utf-8');
    console.log(commandmanual);
};
