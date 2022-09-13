/* Data for individual products */
const data = [
   [
      "product1",
      "product2",
      "product3",
   ],
   [
      "Stormtrooper Helmet",
      "Imperial Tie Fighter",
      "The Death Star"
   ],
   [
      "1.299",
      "9.999",
      "9.9999",
   ],
   [
      "Helmet Size",
      "Engine Unit",
      "Armament",
   ],
   [
      ["S", "M", "L", "XL"],
      ["P-S4 Twin", "P-W401"],
      ["Superlaser", "Turbolaser"],
   ],
   [80, 25, 100],
   [
      "background1",
      "background2",
      "background3",
   ],
];

/* Progress bar DOM elements */

const progText = document.querySelector(".progText");
const progress = document.querySelector(".progress");

/* Progress bar animation function */
function progressBar(percentage) {
   /* Inital Zero */
   progText.innertext = 0;
   let count = 0;
   /* Sets Transition duration set to the percentage */
   progress.style.transition = 50 * data[5][percentage] + "ms";
   /* Moves the progress bar according to the number in the cirlce */
   progress.style.bottom = data[5][percentage] - 110 + "%";
   
   /* Function for counting up */
   function updateCount() {
      /* Target progress value to set where it will stop */
      const target = data[5][percentage];
      /* If the number isn't reached, it will keep counting */
      if (count < target) {
         count++;
         /* Displays current value on the page */
         progText.innerText = count + "%";
         /* Count tick speed */
         setTimeout(updateCount, 30);
         /* Displays the final value when it is reached */
      } else {
         progText.innerText = target + "%";
      }
   }
   /* Calls the updateCount function initially */
   updateCount();
}
/* Runs the progress bar */
progressBar(0);

/* Option DOM Elements */
const optionsList = document.querySelector('.options-list');
const options = document.querySelectorAll('.options-list > li');

/* Binds click handler to element that is addded dynamically later on */
optionsList.addEventListener('click', function (e) {
   /* If the clicked element contains the option class remove the active class from all options */
   if (e.target && e.target.classList.contains('option')) {
      for (let i = 0; i < optionsList.children.length; i++) {
         optionsList.children[i].classList.remove('option-active');
      }
      /* Adds the active class to the clicked element */
      e.target.classList.add('option-active');
   }
});

/* Slider DOM elements */
const arrLeft = document.querySelector('.arrow-left');
const arrRight = document.querySelector('.arrow-right');
const img = document.querySelector('.product-image img');
const name = document.querySelector('.product-name');
const price = document.querySelector('.product-price');
const optionTitle = document.querySelector('.product-option-title');
const bg = document.querySelector('.panel-1');

let id = 0;

let li;

function slider(id) {
   /* Changes the prdouct image */
   img.src = "/assets/" + data[0][id] + ".png";
   /* Fade animation for the product image change */
   img.classList.add('fade-in');
   /* Removes the animation when its done so it can used again */
   setTimeout(() => {
      img.classList.remove('fade-in');
   }, 850);
   /* Changes the product name */
   name.innerText = data[1][id];
   /* Changes the price of the products */
   price.innerText = data[2][id];
   /* Changes the options title for the products */
   optionTitle.innerText = data[3][id];
   /* Creates the new li (option) elements */
   for (let i = 0; i < data[4][id].length; i++) {
      /* Creates the element */
      li = document.createElement('li');
      /* inserts the text element */
      li.innerHTML = data[4][id][i];
      /* Adds the options class */
      li.classList.add('option');
      
      /* Clears previous li elements before the first is inserted */
      if (i === 0) {
         optionsList.innerHTML = "";
         /* Adds the active class li elemnents to the first li element to be inserted */
         li.classList.add('option-active');
      }
      /* Inserts the element */
      optionsList.appendChild(li);
   }
   /* Changes the background image */
   bg.style.backgroundImage = "url(/assets/" + data[6][id] + ".jpg)";
   /* Runs the progress bar function and inserts a new percentage */
   progressBar(id);
}

/* Click event for the left arrow */
arrLeft.addEventListener('click', () => {
   /* Decrements the img id */
   id--;
   /* Checks if id is smaller than the number of available slides */
   if (id < 0) {
      id = data[0].length - 1;
   }
   slider(id);
});

/* Click event for the right arrow */
arrRight.addEventListener('click', () => {
   id++;
   if (id > data[0].length - 1) {
      id = 0;
   }
   slider(id);
});