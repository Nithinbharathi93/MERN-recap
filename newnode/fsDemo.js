import fs from 'fs';

// readFile() - callback function

// fs.readFile('./test.txt', 'utf-8', (err, data) => {
//    if(err)  throw err;
//    console.log(data);
// });

// const data = fs.readFileSync('./test.txt', 'utf-8');
// console.log(data);

//readfile usnig the promise version 

// fs.readFile('./test.txt', 'utf-8')
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

// readfile using the async/await and try-catch version
// const readFile = async () => {
//     try {
//         const data = await fs.readFile('./test.txt', 'utf-8');
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// };

// writeFile()

const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello this is from the js file');
        console.log("File wrote");
    } catch (error) {
        console.log(error);
    }
}

const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\nThis is the appended text from the js file..');
        console.log('File appended');
    } catch (error) {
        console.log(error);
    }
}

readFile();
writeFile();
appendFile();