



import {supabase} from './supabase.js'


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