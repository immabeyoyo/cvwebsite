import {supabase} from './supabase.js'


// Check if the user is logged in using session storage
const storedUser = sessionStorage.getItem('user');

if (storedUser) {
  const user = JSON.parse(storedUser);
  console.log('User is logged in:', user);
  // You may perform additional actions here if needed
} else {
  // User is not logged in, redirect to the login page
  window.location.href = 'inloggen.html';
}



const user = supabase.auth.user;

if (user) {
  // User is logged in
  console.log('User is logged in:', user);
  // Sla gebruikersinformatie op in session storage
  sessionStorage.setItem('user', JSON.stringify(user));
} else {
  // User is not logged in
  console.log('User is not logged in');
  // Stuur de user naar de login pagina
  // window.location.href = 'inloggen.html';
}

function toIndex() {
    window.location.href = 'cvkiezen.html';
}

