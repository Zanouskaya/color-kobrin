import { productsList } from './modules/products_data.js';
import { filterSelection } from './modules/filterSelection.js';

document.getElementById("test").innerHTML = productsList.map((item) =>
      `<div class='card ${item.type}' id=${item.id}>
        <div class='card-top'>
        <div id='${item.id}_title' class='tag'><span>${item.category}</span></div>
        <button><i class="far fa-heart"></i></button>
        </div>
        <div class='card-description'>
          <img src='./images/belosnezhka.png'>
          <h3>${item.name}</h3>
          <p>${item.description}</p>
        </div>
      </div>`
  ).join("");

productsList.forEach((item) => {
  if (item.type == "paint") {
    document.getElementById(`${item.id}_title`).style.background = "#fa7f0e";
    document.getElementById(`${item.id}`).style.borderColor = "#fa7f0e";
    // document.getElementById(`${item.id}`).className += ' show'
  } else if (item.type == "putty") {
    document.getElementById(`${item.id}_title`).style.background = "#0055A9";
    document.getElementById(`${item.id}`).style.borderColor = "#0055A9";
  }
}, {});

filterSelection('card');

var menuBar = document.getElementById("menubar");
var btns = menuBar.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", makeActive);
}

function makeActive() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
}

// calulations
// function calculate() {
//   var width = document.getElementById("width").value;
//   var height = document.getElementById("height").value;
//   var result = width*height;
//   event.preventDefault();
//   return (document.getElementById("result").innerHTML = `<p>площадь помещения: ${result} </p>`);
// }

//active page



//searchbar
