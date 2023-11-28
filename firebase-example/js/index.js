// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    // Här ska din konfiguration ligga
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // Initierar och ansluter mot Firebase
const db = getFirestore(app); // Ansluter och hämtar vår databas

const todosElem = document.querySelector('#todos');
const todoInput = document.querySelector('#todoInput');
const todoButton = document.querySelector('#todoButton');

async function getTodos() {
    const todos = await getDocs(collection(db, 'todos')); // Hämtar alla våra todos från databasen

    todos.forEach((todo) => {
        const data = todo.data(); // Hämtar ut vårt objekt från vår collection "todos"
        console.log(data);
        const todoElem = document.createElement('li');

        todoElem.innerText = data.text;

        todosElem.append(todoElem);
    });
}

async function addTodo(todoText) {
    await addDoc(collection(db, 'todos'), { // Lägger till en ny todo i vår databas i vår collection todos
        text: todoText,
        completed: false
    });
}

todoButton.addEventListener('click', () => {
    const todoText = todoInput.value;

    addTodo(todoText);
});

getTodos();
