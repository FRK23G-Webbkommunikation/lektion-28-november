import { deleteNote } from "./api.js";

function addDeleteNoteEventListener(buttonElem, note) {
    buttonElem.addEventListener('click', async () => {
        await deleteNote(note.id);
    });
}

export { addDeleteNoteEventListener }