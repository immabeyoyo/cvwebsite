

import {supabase} from './supabase.js'


 document.getElementById("accountmaken").addEventListener("click", accountmaken)

 function accountmaken() {
    window.location.href = "AccountMaken.html"
 }
    
document.getElementById("inloggen").addEventListener("click", inloggen)

    function inloggen() {
    window.location.href = "Inloggen.html"
    }

   
 

 async function signout() {
     
 
    let response = await supabase.auth.signOut()

console.log(response)


 }


document.getElementById("logout").addEventListener("click", signout)


const { data: { user } } = await supabase.auth.getUser()

let div = document.createElement("div").innerHTML = user



