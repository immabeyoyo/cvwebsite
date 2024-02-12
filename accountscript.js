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

// Fetched de voornaam van de database en zet deze in de div met id naam.
async function fetchVoornaam() {
  let { data: CVTable1, error } = await supabase
    .from('CVTable1')
    .select('voornaam')


  // Check if CVTable1 has data and update the "naam" div
  if (CVTable1 && CVTable1.length > 0) {
    const naamDiv = document.getElementById('naam');

    // Update the content of the "naam" div with the voornaam from the first record
    naamDiv.textContent = `Naam: ${CVTable1[0].voornaam}`;
  } else {
    // Handle the case where data is not available or an error occurred
    console.error('Error fetching naam van Supabase:', error);
  }
}

fetchVoornaam();

async function fetchGeboortedatum() {
  let { data: CVTable1, error } = await supabase
  .from('CVTable1')
  .select('geboortedatum')

  if (CVTable1 && CVTable1.length > 0) {
    const geboortedatumDiv = document.getElementById('geboortedatum');

    geboortedatumDiv.textContent = `Geboortedatum: ${CVTable1[0].geboortedatum}`;
  } else {
    console.error('Error fetching geboortedatum van Supabase:', error);
  }
}

fetchGeboortedatum();

async function fetchEmail() {
  let { data: CVTable1, error } = await supabase
  .from('CVTable1')
  .select('email')

  if (CVTable1 && CVTable1.length > 0) {
    const emailDiv = document.getElementById('email');

    emailDiv.textContent = `Email: ${CVTable1[0].email}`;
  } else {
    console.error('Error fetching email van Supabase:', error);
  }
}

fetchEmail();

async function fetchTelefoon() {
  let { data: CVTable1, error } = await supabase
  .from('CVTable1')
  .select('telefoon')

  if (CVTable1 && CVTable1.length > 0) {
    const telefoonDiv = document.getElementById('telefoon');

    telefoonDiv.textContent = `Telefoon: ${CVTable1[0].telefoon}`;
  } else {
    console.error('Error fetchiing telefoon van Supabase:', error);
  }
}

fetchTelefoon();

async function fetchEducatie() {
  let { data: CVTable1, error } = await supabase
  .from('CVTable1')
  .select('educatie')

  if (CVTable1 && CVTable1.length > 0) {
    const educatieDiv = document.getElementById('educatie');

    educatieDiv.textContent = `Educatie: ${CVTable1[0].educatie}`;
  } else {
    console.error('Error fetching educatie van Supabase:', error);
  }
}

fetchEducatie();

async function fetchErvaring() {
  let { data: CVTable1, error } = await supabase
  .from('CVTable1')
  .select('ervaring')

  if (CVTable1 && CVTable1.length > 0) {
    const ervaringDiv = document.getElementById('ervaring');

    ervaringDiv.textContent = `Ervaring: ${CVTable1[0].ervaring}`;
  } else {
    console.error('Potverdorrie er is een error met het fetchen van de ervaring van Supabase :(');
  }
}

fetchErvaring();

async function fetchHobbies() {
  let { data: CVTable1, error } = await supabase
  .from('CVTable1')
  .select('hobbies')

  if (CVTable1 && CVTable1.length > 0) {
    const hobbiesDiv = document.getElementById('hobbies');

    hobbiesDiv.textContent = `Hobbies: ${CVTable1[0].hobbies}`;
  } else {
    console.error('Chips, error met fetchen van hobbies van Supabase');
  }
}

fetchHobbies();