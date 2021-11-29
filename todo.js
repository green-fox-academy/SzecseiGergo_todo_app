import minimist from "minimist";
const args = minimist(process.argv);
import ReadFromFile from "./ReadFromFile.js";
import WriteInFile from "./WriteInFile.js";
const readOut = new ReadFromFile();
const writeIn = new WriteInFile();
const allowedArgs = ['-l', '-a', '-r', '-c'];


if (Object.keys(args).length < 2) {
    readOut.WriteOutManual();
} else if (args.l) {
    readOut.WriteOutTasks();
} else if (typeof args.a === 'string') {
    writeIn.addToList(args.a);
} else if (args.a) {
    console.log("\x1b[4m", 'Nem lehetséges új feladat hozzáadása: nincs megadva a feladat!');
} else if (typeof args.r === 'number') {
    writeIn.removeTask(args.r);
} else if (typeof args.r === 'string') {
    console.log("\x1b[4m", 'Nem lehetséges a feladat végrehajtása: a megadott index nem szám!');
} else if (args.r) {
    console.log("\x1b[4m", 'Nem lehetséges az eltávolítás: nem adott meg indexet!');
} else if (typeof args.c === 'number') {
    writeIn.taskCompleted(args.c);
} else if (typeof args.c === 'string') {
    console.log("\x1b[4m", 'Nem lehetséges a feladat végrehajtása: a megadott index nem szám!');
} else if (args.c) {
    console.log("\x1b[4m", 'Nem lehetséges az eltávolítás: nem adott meg indexet!');
} else {
    console.log("\x1b[42m", "\x1b[30m"
        , "Nem támogatott argumentum!")
    readOut.WriteOutManual();
}

