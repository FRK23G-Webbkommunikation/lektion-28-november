import { updateNote } from "./api.js";

function addUpdateNoteEventListener(inputElem, updateButtonElem, note) {
    updateButtonElem.addEventListener('click', async () => {
        const noteText = {
            note: inputElem.value
        }

        await updateNote(note.id, noteText);
    });
}

export { addUpdateNoteEventListener }