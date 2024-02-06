
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'


// Gebruik  public anon key van supabse:  Project Setgtings > API > Project API keys > anon public
const puplic_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtdmdvd3Z5dm55dm9ocHp1aGZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwNDkwNDcsImV4cCI6MjAyMDYyNTA0N30.86c6nJfQ4xrtnNOFhS-VK3Yk11qvPrHPqj7s0zsupBE'

// Je vind deze op: Project Setgtings > API > Project API keys > URL
const supabase_url = 'https://bmvgowvyvnyvohpzuhfm.supabase.co';
// Create a single supabase client for interacting with your database
export const supabase = createClient(supabase_url, puplic_key)



async function signupSupabase(username, password) {

    let { data, error } = await supabase.auth.signUp({
      email: username,
      password: password
    })
    
    if(error) {
      console.error(error)
      alert('error: ', JSON.stringify(error))
    }
    
    else {
      console.log(data)
      alert('Account aanmaken gelukt!', JSON.stringify(data))
    }
    
    }
    
    
    
    let signupForm = document.getElementById("signupForm");
    
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
    
      console.log("het werkt")
    
      let username = document.getElementById("username2");
      let password = document.getElementById("password2");
    
      if (username.value == "" || password.value == "") {
        alert("Ensure you input a value in both fields!");
      } else {
    
        // LOGIN met loginSupabase() function
        signupSupabase(username.value,password.value);
    
        // username.value = "";
        // password.value = "";
      }
    });



document.getElementById("gaterug").addEventListener("click", terugnaarhome)

function terugnaarhome() {
    window.location.href = "home.html"
}

document.querySelector('#inloggen').addEventListener('click', naarInlogPagina);

function naarInlogPagina() {
  window.location.href = "inloggen.html"
}
