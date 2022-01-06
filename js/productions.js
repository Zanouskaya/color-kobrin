import { productsList } from "./modules/products_data.js";
// import { filterSelection } from './modules/filterSelection.js';

document.getElementById("test").innerHTML = productsList
  .map(
    (item) =>
      `<div class='card ${item.type}' id=${item.id}> <a href=${item.link}>
        <div class='card-top'>
        <div id='${item.id}_title' class='tag'><span>${item.category}</span></div>
        
        </div>
        <div class='card-description'>
          <h3>${item.name}</h3>
          <p>${item.description}</p>
        </div>
        <img src='${item.image}'>
        </a>
      </div>`
  )
  .join("");

productsList.forEach((item) => {
  if (item.type == "paint") {
    document.getElementById(`${item.id}_title`).style.color = "#fa7f0e";
  } else if (item.type == "putty") {
    document.getElementById(`${item.id}_title`).style.color = "#0055A9";
  } else if (item.type == "primers") {
    document.getElementById(`${item.id}_title`).style.color = "green";
  } else if (item.type == "plasters") {
    document.getElementById(`${item.id}_title`).style.color = "red";
  } else if (item.type == "azure") {
    document.getElementById(`${item.id}_title`).style.color = "purple";
  } else if (item.type == "glue") {
    document.getElementById(`${item.id}_title`).style.color = "purple";
  }
}, {});

filterSelection("card");
// function filterSelection(type) {
//   var products = document.getElementsByClassName('card')
//   for (var i = 0; i < products.length; i++) {
//     if (products[i].className.includes(type)) {
//       products[i].className += ' show';
//     } else {
//       while (products[i].className.includes('show')) {
//         products[i].className = products[i].className.replace(' show', '');
//       }
//     }
//   }
// };

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

function filterName() {
  var input, filter, products, i;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  products = document.getElementsByClassName("card");

  for (i = 0; i < products.length; i++) {
    title = products[i].getElementsByTagName("h3")[0];

    if (title.innerHTML.toUpperCase().indexOf(filter) > -1) {
      products[i].className += " show";
    } else {
      while (products[i].className.includes("show")) {
        products[i].className = products[i].className.replace(" show", "");
      }
    }
  }
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

// <button><i class="far fa-heart"></i></button>

// function filterName() {
//   var input, filter, ul, li, a, i;
//   input = document.getElementById("search");
//   filter = input.value.toUpperCase();
//   ul = document.getElementById("test").innerHTML;
//   li = ul.getElementsByClassName("card-description");

//   // Loop through all list items, and hide those who don't match the search query
//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("h3")[0];

//     if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }
// }
