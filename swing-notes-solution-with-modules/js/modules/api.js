const BASE_URL = 'https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com';
const ENDPOINT = '/api/notes';

async function getNotes(username) {
    const URL = `${BASE_URL}${ENDPOINT}/${username}`;

    const response = await fetch(URL);
    const data = await response.json();

    return data.notes;
}

async function postNote(note) {
    const URL = `${BASE_URL}${ENDPOINT}`;

    const response = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(note),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();

    return data;
}

async function updateNote(id, note) {
    const URL = `${BASE_URL}${ENDPOINT}/${id}`;

    const response = await fetch(URL, {
        method: 'PUT',
        body: JSON.stringify(note),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();

    return data;
}

async function deleteNote(id) {
    const URL = `${BASE_URL}${ENDPOINT}/${id}`;

    const response = await fetch(URL, {
        method: 'DELETE'
    });
    const data = await response.json();

    return data;
}

export { getNotes, postNote, updateNote, deleteNote }