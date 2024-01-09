let gegevensKop = document.createElement('p');
gegevensKop.innerHTML = 'Vul hier je gegevens in en klik daarna op de knop \'Voeg toe\'.'

function createWerkgeverForm(event) {
  // Voorkom browsers default form gedrag.
  event.preventDefault();
  // Maak nieuwe form
  let werkgeverForm = document.createElement('form');

  // Input voor werkgever
  let inputWerkgever = document.createElement('input');
  inputWerkgever.type = 'text';
  inputWerkgever.name = 'werkgever';
  inputWerkgever.placeholder = 'Vorige werkgever';

  // Button voor nieuwe form
  let buttonSubmit = document.createElement('input');
  buttonSubmit.type = 'button';
  buttonSubmit.value = 'Submit';

  // Append elements voor nieuwe form
  werkgeverForm.appendChild(inputWerkgever);
  werkgeverForm.appendChild(buttonSubmit);

  // Append nieuwe form to body
  document.body.appendChild(werkgeverForm);
}

// Maak form die vraagt naar je gegevens.
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
let labelGeboorteDatum = document.createElement('label');
labelGeboorteDatum.textContent = 'Geboortedatum: ';
let inputGeboorteDatum = document.createElement('input');
inputGeboorteDatum.type = 'date';
inputGeboorteDatum.name = 'GeboorteDatum';
inputGeboorteDatum.placeholder = 'Geboortedatum'

// Button functie
let buttonSubmit = document.createElement('input');
buttonSubmit.type = 'submit';
buttonSubmit.value = 'Voeg toe';

// Button om nieuwe form te maken voor Werkgever
let addWerkgeverButton = document.createElement('button');
addWerkgeverButton.textContent = 'Voeg werkgever toe';
addWerkgeverButton.addEventListener('click', createWerkgeverForm);

// Voeg elementen toe aan de forms
form.appendChild(inputNaam);
form.appendChild(inputAchternaam);
form.appendChild(inputEmail);
form.appendChild(labelGeboorteDatum);
form.appendChild(inputGeboorteDatum);
form.appendChild(addWerkgeverButton);
form.appendChild(buttonSubmit);

document.body.appendChild(gegevensKop);
document.body.appendChild(form);
