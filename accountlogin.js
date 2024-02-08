import {supabase} from './supabase.js'
// // Instructions:  https://github.com/supabase/supabase-js/blob/master/README.md
// import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
// // Gebruik  public anon key van supabse:  Project Setgtings > API > Project API keys > anon public
// const puplic_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtdmdvd3Z5dm55dm9ocHp1aGZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwNDkwNDcsImV4cCI6MjAyMDYyNTA0N30.86c6nJfQ4xrtnNOFhS-VK3Yk11qvPrHPqj7s0zsupBE'
// // Je vind deze op: Project Setgtings > API > Project API keys > URL
// const supabase_url = 'https://bmvgowvyvnyvohpzuhfm.supabase.co';
// // Create a single supabase client for interacting with your database
// export const supabase = createClient(supabase_url, puplic_key)
// USER LOGIN  function ( ASYCNC function )
async function loginSupabase(username, password){
    console.log('test:', username,password);
    let { data, error } = await supabase.auth.signInWithPassword({
        email: username,
        password: password
    });

    if(error){
        console.error(error);
        alert('Verkeerde inlog gegevens! ', JSON.stringify(error));
    }else{
        console.log(data);
        alert('Login gelukt!', JSON.stringify(data));

        sessionStorage.setItem('user', JSON.stringify(data.user));

        window.location.href = 'account.html';
    }
  
}
// EVENT LISTENER VOOR FORM  https://www.freecodecamp.org/news/how-to-submit-a-form-with-javascript/
let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("username");
  let password = document.getElementById("password");

  if (e.submitter && e.submitter.id === "inloggenButton") {
    if (username.value == "" || password.value == "") {
        alert("Voer aub uw email en wachtwoord in!");
    } else {

        // LOGIN met loginSupabase() function
        loginSupabase(username.value,password.value);

     username.value = "";
     password.value = "";
        username.value = "";
        password.value = "";
    }
  }
});

/*
// functie die de gebruiker uitlogt
async function signout() {
    let response = await supabase.auth.signOut()
    console.log(response)
 }
// Voert de functie signout uit als de gebruiker op de logout knop drukt.
document.getElementById("logout").addEventListener("click", signout)
*/
// Functie die de gebruiker naar home.html stuurt
function terugnaarhome() {
    window.location.href = "home.html"
}
// Gaat terug naar de homepagina als de gebruiker op de knop drukt
document.getElementById("gaterug").addEventListener("click", terugnaarhome)