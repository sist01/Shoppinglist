// Hente inputelement fra Html
const inputElement = document.getElementById('addItem');

// Hente 'add-button' element fra Html
const buttonAddElement = document.getElementById('addButton');

// Henter 'ul' fra html 
const ulShoppingListElement = document.getElementById('shoppinglist');

//knappen, lytter på hendelse (click)
const buttonElement = document.getElementById('addButton');
buttonElement.onclick = function() {addButton()};


// Lese verdi av input text og legge til i list med button og enter
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

// deletButton, fjerne varer
    //fikk ikke til

// Legge til nye ting i list
function addItemToList() {
    // Legger det som står i inputfeltet inn i listen
    let item = {
        itemname: inputElement.value,
        checked: false
    }}

// Kode for å sjekke hva du har handlet eller ikke, og oppdaterer koden i localstorage.
function checkCheckbox(id){
    if(list[id].checked){
        list[id].checked = false
    }else{
        list[id].checked = true
    }
    updateLocalStorage();
}




console.log; 

//Kilde: https://www.youtube.com/watch?v=VdDMHr56bcw&ab_channel=Bal-Dez-One