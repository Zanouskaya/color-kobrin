import { colorsList } from "./modules/colors.js";

document.getElementById("colors").innerHTML = colorsList
  .map(
    (color) =>
      `<div class='color-card' id='colorCard_${color.id}' > 
        <div class='color-back' style= "background-color: ${color.rgb_o}">
        </div>
        <h3>${color.name}</h3>
      </div>`
  )
  .join("");

// var cards = document.getElementById("colors");
// console.log(cards);
var cards = document.getElementsByClassName("color-card");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    makeActive(cards[i].id);
  });
}

function makeActive(elemId) {
  let cards = document.getElementsByClassName("color-card");
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].id != elemId || cards[i].className.includes("active")) {
      cards[i].className = cards[i].className.replace(" active", "");
    } else if (cards[i].id == elemId) {
      cards[i].className += " active";
      let re = new RegExp(/\d+/);
      let id = elemId.match(re)[0];
      allColors(id);
    }
  }
}

function allColors(id) {
  colorsList.forEach((item) => {
    if (item.id == id) {
      document.getElementById(
        "all-colors"
      ).innerHTML = `<div class='all-colors-columns'>
      <div class='color-card'>
          <div class='color-back' style= "background-color: ${item.rgb_1}">
          </div>
          <h3>1:1</h3>
      </div>
      <div class='color-card'>
          <div class='color-back' style= "background-color: ${item.rgb_2}">
          </div>
          <h3>1:2</h3>
      </div>
      <div class='color-card'>
          <div class='color-back' style= "background-color: ${item.rgb_4}">
          </div>
          <h3>1:4</h3>
      </div>
      <div class='color-card'>
          <div class='color-back' style= "background-color: ${item.rgb_8}">
          </div>
          <h3>1:8</h3>
      </div>
      <div class='color-card'>
          <div class='color-back' style= "background-color: ${item.rgb_16}">
          </div>
          <h3>1:16</h3>
      </div>
      <div class='color-card'>
          <div class='color-back' style= "background-color: ${item.rgb_40}">
          </div>
          <h3>1:40</h3>
      </div>
      <div class='color-card'>
          <div class='color-back' style= "background-color: ${item.rgb_80}">
          </div>
          <h3>1:80</h3>
      </div>
      </div>
      `;
    }
  });
}
