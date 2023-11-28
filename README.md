# Lektion 28 november

## Övning

Skapa ett Firebaseprojekt och konfigurera upp er applikation så den ansluts mot ert Firebaseprojekt.

Tutorial: https://firebase.google.com/docs/web/setup?authuser=0&hl=en#create-firebase-project-and-app (**Du behöver enbart göra steg 1: Create a Firebase project and register your app**).

Använd detta script för att interagera med databasen (här finns också alla metoder du behöver importera):

`import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";`

Du ska fortsätta spelet sten, sax och påse (det finns det i detta repo o i mappen `rock-paper-scissors`) och lägga till en highscore-lista som ska sparas i en firestore databas. 
Spelet spelas i omgångar av 3 och efter tre matcher så ska användarens statistik sparas i din firestore databas tillsammans med ett användarnamn som användaren får mata in i ett inputfält.

Såhär ska det se ut i din databas när du har sparat (Number och String menas att det ska vara ett värde av typen nummer eller en sträng).
```javascript
{
    wins: Number,
    loses: Number,
    draws: Number,
    username: String
}
```

Det ska även på din sida gå och se highscorelistan.

## Artiklar

Firebase: https://firebase.google.com/