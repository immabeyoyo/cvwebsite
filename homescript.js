// Function to load the index.html page
function loadIndexPagina() {
  window.location.href = 'index.html';
}

// Create the header element
let header = document.createElement('div');

let homePaginaKop = document.createElement('p');
homePaginaKop.innerHTML = 'Welkom bij CV maker. <br> Hier kan je je gegevens invullen en deze invullen in een gekozen cv layout. <br> Klik op de knop om verder te gaan.';

let logo = document.createElement('img');
logo.src = 'Logo.png';

// Create the "Volgende pagina" button
let volgendePaginaButton = document.createElement('button');
volgendePaginaButton.textContent = 'Volgende pagina';
volgendePaginaButton.addEventListener('click', loadIndexPagina);

let advertentie = document.createElement('div');
advertentie.id = 'advertentie'
advertentie.innerHTML = 'Uw advertentie hier? <br> Dat kan! Neem nu Contact op.'

// Append the button to the header
document.body.appendChild(logo);
header.appendChild(volgendePaginaButton);

// Append the header to the body
document.body.appendChild(homePaginaKop);
document.body.appendChild(header);
document.body.appendChild(advertentie);