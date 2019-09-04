const fs = require('fs');
const yargs = require('yargs');
const notes = require('./notes')
// const validator = require('validator');
// const chalk = require('chalk');

// const add = require('./utils')

// const command = process.argv[2];

// customize version with yargs
yargs.version('1.1.0');

// 1. Adding a new note
yargs.command({
    command: 'add',
    description: 'add a new note',
    builder: {
        title: {
            description: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            description: 'note body',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
});

// 2. Removing a note
yargs.command({
    command: 'remove',
    description: 'removing a note',
    builder: {
        title: {
            description: 'Note title',
            demandOption: 'true',
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
});

// 3.  Read a note
yargs.command({
    command: 'read',
    description: 'read a note',
    builder: {
        title: {
            description: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});

// 4.  listing all note
yargs.command({
    command: 'list',
    description: 'list all notes',
    handler(argv) {
        notes.listNote();
    }
});

yargs.parse();

// add, remove, read, list
// console.log(yargs.argv);

// console.log(process.argv);


// if (command === 'add') {
//     console.log('adding note');
// } else if (command === 'remove') {
//     console.log('removing note');
// }
// fs.writeFile('test.txt', "A fullstack software developer")

// valid = validator();

// console.log(chalk.green.bgGreen.bold('Hello Ajibola') + 'mr' + chalk.red('!!!!'));

// console.log(process.argv[2]);


// console.log(validator.isURL('https//mead.io'));


// fs.writeFileSync('notes.txt', 'welcome to node js developer course');

// fs.appendFileSync('notes.txt', ' am very glad to be part of this course');

// const sum = add(6, 5)
// console.log(sum);

// const talk = getNotes();
// console.log(talk);

// console.log(talk);


