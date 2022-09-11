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

const progText = document.querySelector(".progText");
const progress = document.querySelector(".progress");

/* Progress bar animation function */
function progressBar(percentage) {
   /* Inital Zero */
   progText.innertext = 0;
   let count = 0;
   progress.style.transition = 50 * data[5][percentage] + "ms";
   progress.style.bottom = data[5][percentage] - 110 + "%";
   
   function updateCount() {
      const target = data[5][percentage];
      if (count < target) {
         count++;
         progText.innerText = count + "%";
         setTimeout(updateCount, 30);
      } else {
         progText.innerText = target + "%";
      }
   }
   updateCount();
}

progressBar(0);

const optionsList = document.querySelector('.options-list');
const options = document.querySelectorAll('.options-list > li');

optionsList.addEventListener('click', function (e) {
   if (e.target && e.target.classList.contains('option')) {
      for (let i = 0; i < optionsList.children.length; i++) {
         optionsList.children[i].classList.remove('option-active');
      }
      e.target.classList.add('option-active');
   }
});

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
   img.src = "/assets/" + data[0][id] + ".png";
   img.classList.add('fade-in');
   setTimeout(() => {
      img.classList.remove('fade-in');
   }, 850);
   name.innerText = data[1][id];
   price.innerText = data[2][id];
   optionTitle.innerText = data[3][id];
   for (let i = 0; i < data[4][id].length; i++) {
      li = document.createElement('li');
      li.innerHTML = data[4][id][i];
      li.classList.add('option');
      
      if (i === 0) {
         optionsList.innerHTML = "";
         li.classList.add('option-active');
      }
      optionsList.appendChild(li);
   }
   bg.style.backgroundImage = "url(/assets/" + data[6][id] + ".jpg)";
   progressBar(id);
}

arrLeft.addEventListener('click', () => {
   id--;
   if (id < 0) {
      id = data[0].length - 1;
   }
   slider(id);
});

arrRight.addEventListener('click', () => {
   id++;
   if (id > data[0].lenght - 1) {
      id = 0;
   }
   slider(id);
});