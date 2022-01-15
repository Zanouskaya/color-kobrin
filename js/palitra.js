import { colorsList } from "./modules/colors.js";

// change class name for buttons
let btnsWrapper = document.getElementById("btnsWrapper");
let btns = btnsWrapper.getElementsByTagName("button");
// console.log(btns);
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", activeBtn);
  btns[i].addEventListener("click", function () {
    showCards(btns[i].id);
  });
}

function activeBtn() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
}

let search = document.getElementById("search");
search.addEventListener("keyup", filterName);

function filterName() {
  let input, filter, i, cards;
  input = document.getElementById("search");
  cards = document.getElementsByClassName("color-card");
  filter = input.value.toUpperCase();

  for (i = 0; i < cards.length; i++) {
    let title = cards[i].getElementsByTagName("h3")[0];
    if (
      title.innerHTML.toUpperCase().indexOf(filter) > -1 &&
      !cards[i].className.includes("show")
    ) {
      cards[i].className += " show";
    } else if (title.innerHTML.toUpperCase().indexOf(filter) == -1) {
      cards[i].className = cards[i].className.replace(" show", "");
    }
  }
}

let cards = document.getElementsByClassName("color-card");

showCards("rgb_o");
function showCards(rgb) {
  document.getElementById("colors").innerHTML = colorsList
    .map(
      (color) =>
        `<div class='color-card show' id='colorCard_${color.id}' >
          <div class='color-back' style= "background-color: ${color[rgb]}">
          </div>
          <h3>${color.name}</h3>
        </div>`
    )
    .join("");
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
      showAll(cards[i].id);
    });
  }
}

var coll = document.getElementsByClassName("modal-btn collapsible");
console.log(coll);
var i;

for (i = 0; i < coll.length; i++) {
  console.log(coll);
  coll[i].addEventListener("click", function () {
    this.classList.toggle("openModal");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
// coll.addEventListener("click", function () {
//     this.classList.toggle("openModal");
//     var content = this.nextElementSibling;
//   if (content.style.display === "block") {
//     content.style.display = "none";
//   } else {
//     content.style.display = "block";
//   }
// });

document.getElementById("modal-btn").innerHTML =
  "Выберите цвет, чтобы увидеть оттенки";
function showAll(elemId) {
  for (let i = 0; i < cards.length; i++) {
    let re = new RegExp(/\d+/);
    let id = elemId.match(re)[0];
    colorsList.forEach((item) => {
      if (item.id == id) {
        (document.getElementById("modal-btn").innerHTML = `
        ${item.name}`),
          (document.getElementById("allColors").innerHTML = `
        <div class='all-colors-columns'>
          <div class='color-card show'>
              <div class='color-back' style= "background-color: ${item.rgb_1}">
              </div>
              <h3>1:1</h3>
          </div>
          <div class='color-card show'>
              <div class='color-back' style= "background-color: ${item.rgb_2}">
              </div>
              <h3>1:2</h3>
          </div>
          <div class='color-card show'>
              <div class='color-back' style= "background-color: ${item.rgb_4}">
              </div>
              <h3>1:4</h3>
          </div>
          <div class='color-card show'>
              <div class='color-back' style= "background-color: ${item.rgb_8}">
              </div>
              <h3>1:8</h3>
          </div>
          <div class='color-card show'>
              <div class='color-back' style= "background-color: ${item.rgb_16}">
              </div>
              <h3>1:16</h3>
          </div>
          <div class='color-card show'>
              <div class='color-back' style= "background-color: ${item.rgb_40}">
              </div>
              <h3>1:40</h3>
          </div>
          <div class='color-card show'>
              <div class='color-back' style= "background-color: ${item.rgb_80}">
              </div>
              <h3>1:80</h3>
          </div>
          </div>
          `);
      }
    });
  }
}

// // console: print <body>

// let btns = btnsWrapper.getElementsByTagName("button");
// modalBtn.addEventListener("click", openModal);
// console.log(modalBtn);
// function openModal() {
//   console.log(modalBtn);
// }

// window.onclick = function (e) {
//   var modal = document.getElementById("color-card");
//   if (e.target == modal) {
//     modal.style.display = "none";
//   }
// };
