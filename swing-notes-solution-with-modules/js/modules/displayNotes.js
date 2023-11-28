import { getNotes } from "./api.js";
import { addDeleteNoteEventListener } from "./deleteNote.js";
import { addUpdateNoteEventListener } from "./updateNote.js";

const notesElem = document.querySelector('#notes');
const getNotesButton = document.querySelector('#getNotesButton');
const usernameInput = document.querySelector('#username');

function createNoteElem(note) {
    const containerElem = document.createElement('article');
    const titleElem = document.createElement('h3');
    const textElem = document.createElement('p');
    const buttonElem = document.createElement('button');

    const inputElem = document.createElement('input');
    const updateButtonElem = document.createElement('button');

    inputElem.placeholder = 'Ny anteckning';
    updateButtonElem.innerText = 'Uppdatera anteckning';

    titleElem.innerText = note.title;
    textElem.innerText = note.note;
    buttonElem.innerText = 'Ta bort';

    containerElem.append(titleElem)
    containerElem.append(textElem);
    containerElem.append(buttonElem);
    containerElem.append(inputElem);
    containerElem.append(updateButtonElem);
    notesElem.append(containerElem);

    addUpdateNoteEventListener(inputElem, updateButtonElem, note);
    addDeleteNoteEventListener(buttonElem, note);
}

function displayNotes(notes) {
    notesElem.innerHTML = '';

    for(const note of notes) {
        createNoteElem(note);
    }
}

function addGetNotesEventListener() {
    getNotesButton.addEventListener('click', async () => {
        const username = usernameInput.value;
    
        const notes = await getNotes(username);
    
        displayNotes(notes);
    });
}

export { addGetNotesEventListener }