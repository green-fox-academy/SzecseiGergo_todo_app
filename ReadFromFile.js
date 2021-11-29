import fs from 'fs';
export default class ReadFromFile {
    WriteOutManual() {
        const manual = fs.readFileSync('./data/manual.txt', 'utf-8');
        return console.log(manual);
    }

    WriteOutTasks() {
        const content = fs.readFileSync('./data/todoList.json', 'utf-8');
        if (content.length === 0 || content === undefined) {
            console.log("\x1b[42m", 'Nincs mára tennivalód! :)');
        }
        else {
            let parsedContent = JSON.parse(content);
            parsedContent.forEach((todo, i) => {
                if (todo.completed === true) {
                    console.log("\x1b[32m", `${i + 1} - [ X ] ${todo.task}`);
                } else {
                    console.log("\x1b[33m", `${i + 1} - [   ] ${todo.task}`);

                }
            });
        }
    }
}