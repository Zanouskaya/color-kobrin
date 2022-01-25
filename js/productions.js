import { productsList } from "./modules/products_data.js";

// render cards with products
document.getElementById("products").innerHTML = productsList
  .map(
    (item) =>
      `<div class='card ${item.type}' id=${item.id}> <a href=${item.link}>
        <div class='card-top'>
        <div id='${item.id}_title' class='tag'><span>${item.category}</span></div>
        
        </div>
        <div class='card-description'>
          <h2>${item.name}</h2>
          <p>${item.description}</p>
          <p id='tags' class='hide-tags'>${item.tags}</p>
        </div>
        <img src='${item.image}'>
        </a>
      </div>`
  )
  .join("");

//make cards tags coloring
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

//make underline (by adding className active) buttons in the left
let menuBar = document.getElementById("menubar");
let btns = menuBar.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", makeActive);
  btns[i].addEventListener("click", function () {
    showByType(btns[i].id);
  });
}

function makeActive() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
}
//show cards depending on the active button
showByType("card");
function showByType(type) {
  let products = document.getElementsByClassName("card");
  for (let i = 0; i < products.length; i++) {
    if (
      products[i].className.includes(type) &&
      !products[i].className.includes("show")
    ) {
      products[i].className += " show";
    } else if (!products[i].className.includes(type)) {
      products[i].className = products[i].className.replace(" show", "");
    }
  }
}

//serch by title of cards
let search = document.getElementById("search");
search.addEventListener("keyup", filterName);
function filterName() {
  let input = document.getElementById("search");
  let filter = input.value.toUpperCase();
  let products = document.getElementsByClassName("card");

  for (let i = 0; i < products.length; i++) {
    let title = products[i].getElementsByTagName("h2")[0];
    if (
      title.innerHTML.toUpperCase().indexOf(filter) > -1 &&
      !products[i].className.includes("show")
    ) {
      products[i].className += " show";
    } else if (title.innerHTML.toUpperCase().indexOf(filter) == -1) {
      products[i].className = products[i].className.replace(" show", "");
    }
  }
}

//filtering cards by checkboxes. show is class that display card. default: class='card type show'
let checkboxes = document.querySelectorAll("input[type=checkbox]");

let filterOptions = [];
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    filterOptions = Array.from(checkboxes)
      .filter((i) => i.checked)
      .map((i) => i.value);
    console.log(filterOptions);
    let products = document.getElementsByClassName("card");

    for (let i = 0; i < products.length; i++) {
      let tags = products[i].getElementsByClassName("hide-tags")[0];
      let count = 0;
      for (let j = 0; j < filterOptions.length; j++) {
        if (tags.innerHTML.includes(filterOptions[j])) {
          count += 1;
        }
      }

      if (
        count == filterOptions.length &&
        !products[i].className.includes("show")
      ) {
        products[i].className += " show";
      } else if (count != filterOptions.length) {
        products[i].className = products[i].className.replace(" show", "");
      }
    }
  });
});

//hide checkboxes
let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("close");
    let content = this.nextElementSibling;
    if (content.style.display === "none") {
      content.style.display = "flex";
    } else {
      content.style.display = "none";
    }
  });
}
