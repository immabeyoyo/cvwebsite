// Dit is even om te testen of alles gekoppeld is
let a = prompt("Wat is a?");
let b = prompt("Wat is b?");
let c = a * b;
let uitkomstDiv = document.createElement("div");

uitkomstDiv.innerHTML = c;
uitkomstDiv.id = "uitkomst";

document.body.appendChild(uitkomstDiv);