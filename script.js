function werkgeverInputSpawner() {

  var werkgeverInputsDiv = document.getElementById('werkgever-inputs');
  var nieuwInputVeld = document.createElement('input');
  nieuwInputVeld.placeholder = 'Werkgever';
  werkgeverInputsDiv.appendChild(nieuwInputVeld)

  nieuwInputVeld.style.display = "block"
  nieuwInputVeld.style.marginTop = "5px"
}

function terugNaarHome() {
  window.location.href = "home.html"
}
