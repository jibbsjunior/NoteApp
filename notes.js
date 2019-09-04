const fs = require('fs')
const chalk = require('chalk');

const getNotes = function () {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    // method 1
    // const duplicateNotes = notes.filter((note) => note.title === title)
    // method 2
    const duplicateNote = notes.find((note) => note.title === title)
    // method 3
    // const duplicateNotes = notes.filter((note) => {
    //     return note.title === title
    // })
    // if (duplicateNotes.length === 0) { //method 1
    // if (duplicateNote === undefined) { //method 2
    if (!duplicateNote) { //method 3
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.bold('New note added!'));
    } else {
        console.log(chalk.red.bold('Note title has already been taken!'));
    }
}

// remove a note
const removeNote = (title) => {
    // console.log(title);
    const notes = loadNotes();
    const noteRemain = notes.filter((note) => note.title !== title)
    if (notes.length > noteRemain.length) {
        console.log(chalk.magenta.bold(title + "" + " has been removed successfully from the list"));
        saveNotes(noteRemain)

    } else {
        console.log(chalk.red.bold('no matching note found'));

    }
}

// Listing notes method 1
// const listNote = (title, body) => {
//     const notes = loadNotes();
//     console.log(notes);
// }

// listing notes method 2
const listNote = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your Notes...'));
    notes.forEach(note => {
        console.log(note.title);

    });

}

// reading a note
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)

    } else {
        console.log(chalk.red.inverse('No Notes Find'));

    }

}

// save notes
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// load notes
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}