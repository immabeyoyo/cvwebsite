function gaTerug() {
    window.location.href = "home.html"
}



let username = document.getElementById("username");
let password = document.getElementById("password");

async function signupSupabase(username, password){

let { data, error } = await supabase.auth.signUp({
  email: username,
  password: password
})

  if(error){
    console.error(error);
    alert('ERROR: ', JSON.stringify(error));
}

else{
    console.log(data);
    alert('Login gelukt!: ', JSON.stringify(data));
}
}



let signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let username = document.getElementById("username");
    let password = document.getElementById("password");
  
    if (username.value == "" || password.value == "") {
      alert("Ensure you input a value in both fields!");
    } else {
  
      // LOGIN met loginSupabase() function
      signupSupabase(username.value,password.value);
  
      // username.value = "";
      // password.value = "";
    }
  });

