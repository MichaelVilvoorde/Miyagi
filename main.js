const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  
});
  
function chevronLeft(){
  var project1 = document.getElementById("project1");
  var project2 = document.getElementById("project2");
  var project3 = document.getElementById("project3");
  var project4 = document.getElementById("project4");
  var project5 = document.getElementById("project5");
  var project6 = document.getElementById("project6");

  if (project1.classList.contains("active-project")) {
    project5.classList.remove("hidden");
    project6.classList.add("active-project");
    project1.classList.remove("active-project");
    project2.classList.add("hidden");
  }
  else if (project2.classList.contains("active-project")) {
    project6.classList.remove("hidden");
    project1.classList.add("active-project");
    project2.classList.remove("active-project");
    project3.classList.add("hidden");
  }
  else if (project3.classList.contains("active-project")) {
    project1.classList.remove("hidden");
    project2.classList.add("active-project");
    project3.classList.remove("active-project");
    project4.classList.add("hidden");
  }
  else if (project4.classList.contains("active-project")) {
    project2.classList.remove("hidden");
    project3.classList.add("active-project");
    project4.classList.remove("active-project");
    project5.classList.add("hidden");
  }
  else if (project5.classList.contains("active-project")) {
    project3.classList.remove("hidden");
    project4.classList.add("active-project");
    project5.classList.remove("active-project");
    project6.classList.add("hidden");
  }
  else if (project6.classList.contains("active-project")) {
    project4.classList.remove("hidden");
    project5.classList.add("active-project");
    project6.classList.remove("active-project");
    project1.classList.add("hidden");
  }

  

}

function chevronRight(){
  var project1 = document.getElementById("project1");
  var project2 = document.getElementById("project2");
  var project3 = document.getElementById("project3");
  var project4 = document.getElementById("project4");
  var project5 = document.getElementById("project5");
  var project6 = document.getElementById("project6");

  if(project1.classList.contains("active-project")){
    project6.classList.add("hidden");
    project1.classList.remove("active-project");
    project2.classList.add("active-project");
    project3.classList.remove("hidden");
  }
  else if (project2.classList.contains("active-project")) {
    project1.classList.add("hidden");
    project2.classList.remove("active-project");
    project3.classList.add("active-project");
    project4.classList.remove("hidden");
  }
  else if (project3.classList.contains("active-project")) {
    project2.classList.add("hidden");
    project3.classList.remove("active-project");
    project4.classList.add("active-project");
    project5.classList.remove("hidden");
  }
  else if (project4.classList.contains("active-project")) {
    project3.classList.add("hidden");
    project4.classList.remove("active-project");
    project5.classList.add("active-project");
    project6.classList.remove("hidden");
  }
  else if (project5.classList.contains("active-project")) {
    project4.classList.add("hidden");
    project5.classList.remove("active-project");
    project6.classList.add("active-project");
    project1.classList.remove("hidden");
  }
  else if (project6.classList.contains("active-project")) {
    project5.classList.add("hidden");
    project6.classList.remove("active-project");
    project1.classList.add("active-project");
    project2.classList.remove("hidden");
  }

}

// Dropdown menu
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropDownMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


