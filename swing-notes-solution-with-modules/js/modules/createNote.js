import { postNote } from "./api.js";

const usernameInput = document.querySelector('#usernamePost');
const titleInput = document.querySelector('#title');
const noteInput = document.querySelector('#note');
const postNotesButton = document.querySelector('#postNotesButton');
const confirmationElem = document.querySelector('#confirmation');

function addCreateNoteEventListener() {
    postNotesButton.addEventListener('click', async () => {
        const note = {
            username: usernameInput.value,
            title: titleInput.value,
            note: noteInput.value
        }


        const result = await postNote(note);

        if (result.success) {
            confirmationElem.innerText = 'Ny anteckning skapad!';

            setTimeout(() => {
                confirmationElem.innerText = '';
            }, 10000); // Ta bort texten efter 10 sekunder
        }
    });
}

export { addCreateNoteEventListener }