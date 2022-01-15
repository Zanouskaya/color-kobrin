import { productsList } from "./modules/products_data.js";

// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "none") {
//       content.style.display = "block";
//     } else {
//       content.style.display = "none";
//     }
//   });
// }

// let menuBar = document.getElementById("menubar");
// let btns = menuBar.getElementsByClassName("btn");
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     openSub(btns[i].id);
//   });
// }

// function openSub(id) {
//   for (var i = 0; i < productsList.length; i++) {
//     if (productsList[i].type == "paint") {
//       document.getElementById("paintName").innerHTML = productsList
//         .map(
//           (item) =>
//             `<li><button class='sec-btn'>${item.name}</button></li>
//        `
//         )
//         .join("");
//     }
//   }
// }
