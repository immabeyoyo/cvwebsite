// Maak form die vraagt naar je naam en email
let form = document.createElement('form');

// Maakt form inputs
// Input van voornaam
let inputNaam = document.createElement('input');
inputNaam.type = 'text';
inputNaam.name = 'Naam';
inputNaam.placeholder = 'Naam';

// Input van achternaam
let inputAchternaam = document.createElement('input');
inputAchternaam.type = 'text';
inputAchternaam.name = 'Achternaam'
inputAchternaam.placeholder = 'Achternaam'

// Input van Email
let inputEmail = document.createElement('input');
inputEmail.type = 'email';
inputEmail.name = 'Email';
inputEmail.placeholder = 'Email';

// Input van geboortedatum
let inputGeboorteDatum = document.createElement('input');
inputGeboorteDatum.type = 'text';
inputGeboorteDatum.name = 'GeboorteDatum';
inputGeboorteDatum.placeholder = 'Geboortedatum'

// Input van vorige werkgever
let inputWerkgever = document.createElement('input');
inputWerkgever.type = 'text';
inputWerkgever.name = 'Werkgever';
inputWerkgever.placeholder = 'Vorige werkgever';

// Button functie
let buttonSubmit = document.createElement('input');
buttonSubmit.type = 'submit';
buttonSubmit.value = 'Submit';

// Voeg elementen toe aan de forms
form.appendChild(inputNaam);
form.appendChild(inputAchternaam);
form.appendChild(inputEmail);
form.appendChild(inputGeboorteDatum);
form.appendChild(inputWerkgever);
form.appendChild(buttonSubmit);

// Append form
document.body.appendChild(form);