// Function to load the index.html page
function loadIndexPagina() {
  window.location.href = 'index.html';
}

// Create the header element
let header = document.createElement('div');

// Create the "Volgende pagina" button
let volgendePaginaButton = document.createElement('button');
volgendePaginaButton.textContent = 'Volgende pagina';
volgendePaginaButton.addEventListener('click', loadIndexPagina);

// Append the button to the header
header.appendChild(volgendePaginaButton);

// Append the header to the body
document.body.appendChild(header);
