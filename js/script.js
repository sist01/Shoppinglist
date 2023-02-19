// Hente inputelement fra Html
const inputElement = document.getElementById('addItem');

// Hente 'add-button' element fra Html
const buttonAddElement = document.getElementById('addButton');

// Henter 'ul' fra html 
const ulShoppingListElement = document.getElementById('shoppinglist');

// Nytt tomt array som brukes til å holde informasjonen som genereres på siden
var list = []

//knappen, lytter på hendelse (click)
const buttonElement = document.getElementById('addButton');
buttonElement.onclick = function() {addButton()};


// Lese verdi av input text og legge til i list

window.addEventListener('keyup', (event) => {
    if(event.code === 'Enter') {
        addButton();
    }
}) ;

function addButton() {
    const liElement = document.createElement('li');
    if(inputElement.value !=='') {
        liElement.textContent = inputElement.value;
        ulShoppingListElement.appendChild(liElement);
    }
} 

console.log;



