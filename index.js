//Write code to read contents of a file and print it to the console. You can use the fs library to as a black box, the goal is to understand async tasks. Try to do an expensive operation below the file read and see how it affects the output. Make the expensive operation more and more expensive and see how it affects the output.
const fs = require('fs');

// Asynchronous file read
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:\n', data);
});

// Expensive synchronous operation
let sum = 0;
for (let i = 0; i < 1e9; i++) {
    sum += i;
}
console.log('Expensive operation result:', sum);
