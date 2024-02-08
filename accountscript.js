function toggleDropdown() {
  var dropdownContent = document.getElementById("myMenu");
  if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
  } else {
      dropdownContent.style.display = "block";
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.menuButton')) {
      var dropdowns = document.getElementsByClassName("myMenu");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.style.display === "block") {
              openDropdown.style.display = "none";
          }
      }
  }
}

<<<<<<< Updated upstream
function toIndex() {
    window.location.href = 'cvkiezen.html';
}
=======

// Button die verwijst naar cvkiezen.html pagina als de gebruiker een cv wilt kiezen
function veranderCV() {
    window.location.href = 'cvkiezen.html';
}


>>>>>>> Stashed changes
