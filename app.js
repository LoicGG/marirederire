/***********************************************/
/***********************************************/
/**************  NAVIGATION BAR ****************/
/***********************************************/
/***********************************************/

// Get the menu nav to add active to
var volet = document.getElementById("volet");

// Get the button that opens the menu
var iconX = document.getElementById("iconX");

// Get the X button that closes the menu
var closeX = document.getElementById("close");

// When the user clicks on the button, open the menu
iconX.onclick = function () {
  volet.style.left = "0";
}

// When the user clicks on the button, open the menu
closeX.onclick = function () {
  volet.style.left = "-100%";
}


// When menu's open and user clicks outside => closes menu
window.addEventListener('click', function(e) {
  if (!document.getElementById('volet').contains(e.target) && (!document.getElementById('iconX').contains(e.target))){
  volet.style.left = "-100%"; //the same code you've used to hide the menu
} 
});


/***********************************************/
/***********************************************/
/************  DARK MODE TOGGLE ****************/
/***********************************************/
/***********************************************/

const page = document.querySelector(".page");
const toggle = page.querySelector(".theme-switch__checkbox");
// const toggleIcon = page.querySelector(".toggle-icon");

// set theme and localStorage on page load
setCheckedState();

function setCheckedState() {
  // checks if localStorage has a "checked" value set at all
  if (!(localStorage.checked === undefined)) {
    // if it does, it sets the state of the toggle accordingly
    toggle.checked = isTrue(localStorage.getItem("checked"));
    // after setting the toggle state, the theme is adjusted according to the checked state
    toggleTheme();
  }
}

function toggleTheme() {
  // Toggle theme based on state of checkbox
  if (toggle.checked) {
    page.classList.replace("light", "dark");
  } else {
    page.classList.replace("dark", "light");
  }
  // set the value of the "checked" key in localStorage
  localStorage.setItem("checked", toggle.checked);
}

function isTrue(value) {
  // convert string to boolean
  return value === "true";
}

// Toggle theme any time the state of the checkbox changes
toggle.addEventListener("change", toggleTheme);

/***********************************************/
/***********************************************/
/***********************************************/
/***********************************************/
/***********************************************/


/** Il faudrait une fonction qui permette que n'importe quel click ou touch ailleurs 
 * que le sur le menu ferme le menu **/
// et il faudrait aussi une petite croix en haut du menu ul pour fermer explicitement ce menu

/***********************************************/
/***********************************************/
/****************SLIDER PHOTO*******************/
/***********************************************/
/***********************************************/
const container = document.querySelector('.container1');
document.querySelector('.slider1').addEventListener('input', (e) => {
  container.style.setProperty('--position1', `${e.target.value}%`);
})
/***********************************************/
/***********************************************/
/***********************************************/
/***********************************************/
/***********************************************/

const container2 = document.querySelector('.container2');
document.querySelector('.slider2').addEventListener('input', (e) => {
  container2.style.setProperty('--position2', `${e.target.value}%`);
})


const container3 = document.querySelector('.container3');
document.querySelector('.slider3').addEventListener('input', (e) => {
  container3.style.setProperty('--position3', `${e.target.value}%`);
})
