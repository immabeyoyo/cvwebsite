let chosenCV = "";

function kiesCV(cv) {
  chosenCV = cv;
  alert(cv + " is gekozen!");
}

document.getElementById("Kies1").addEventListener("click", function() {
  kiesCV("cv1");
});

document.getElementById("Kies2").addEventListener("click", function() {
  kiesCV("cv2");
});

document.getElementById("Kies3").addEventListener("click", function() {
  kiesCV("cv3");
});
