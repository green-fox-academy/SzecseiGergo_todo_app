import fs from 'fs';
export default class WriteInFile {

    addToList(todo) {
        const content = fs.readFileSync('./data/todoList.json', 'utf-8');
        let parsedContent = JSON.parse(content);
        parsedContent.push({ task: todo, completed: false });
        let data = JSON.stringify(parsedContent);
        fs.writeFile('./data/todoList.json', data, (err) => {
            if (err) {
                throw err;
            }
            console.log("\x1b[32m", `"${todo}" is saved to the list.`);
        });
    }


    removeTask(index) {
        const content = fs.readFileSync('./data/todoList.json', 'utf-8');
        const splitContent = content.split('\n');
        const removeContent = splitContent.splice(index, 1);
        const newContent = splitContent.join('\n');
        if (index + 2 > splitContent.length || index === 0) {
            console.log("\x1b[31m", 'Nem lehetséges az eltávolítás: túlindexelési probléma adódott!');
        } else {
            fs.writeFile('./data/todoList.json', newContent, (err) => {
                if (err) {
                    throw err;
                }
            });
            console.log("\x1b[32m", removeContent + "\n" + "Data removed!");
        }
    };

    taskCompleted(index) {
        const content = fs.readFileSync('./data/todoList.json', 'utf-8');
        let parsedContent = JSON.parse(content);
        if (index <= parsedContent.length) {
            parsedContent[index - 1].completed = true;
            let data = JSON.stringify(parsedContent);
            fs.writeFile('./data/todoList.json', data, (err) => {
                if (err) {
                    throw err;
                }
                console.log("\x1b[32m", `${index}. task is completed! Congratulations! keep it up! `);
            });
        }
        else {
            console.log("\x1b[4m", "Nem lehetséges a feladat végrehajtása: túlindexelési probléma adódott");
        }
    }
};

