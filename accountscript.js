import {supabase} from './supabase.js'
// Kijk of de user is ingelogd met local storage
const storedUser = sessionStorage.getItem('user');
if (storedUser) {
  const user = JSON.parse(storedUser);
  console.log('User is logged in:', user);
} else {
  // Gebruiker is niet ingelogd, verwijs door naar inlogpagina.
  window.location.href = 'inloggen.html';
}
const user = supabase.auth.user;
if (user) {
  // Gebruiker is ingelogd
  console.log('User is logged in:', user);
  // Sla gebruikersinformatie op in session storage
  sessionStorage.setItem('user', JSON.stringify(user));
} else {
  // Gebruiker is niet ingelogd
  console.log('User is not logged in');
}
// Button die verwijst naar cvkiezen.html pagina als de gebruiker een cv wilt kiezen
function veranderCV() {
    window.location.href = 'cvkiezen.html';
}

document.querySelector('.veranderButton').addEventListener('click', veranderCV);

function printCV() {
  window.print();
}

document.querySelector('.printButton').addEventListener('click', printCV);