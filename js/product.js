import { colorsList } from "./modules/colors.js";
import { productDataList } from "./modules/product_data_list.js";
function getRandom(arr, n) {
  let result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    let x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

let randomColors = getRandom(colorsList, 5);

document.getElementById("colors").innerHTML = randomColors
  .map(
    (color) =>
      `<div class='color-card show' id='colorCard_${color.id}' >
            <div class='color-back' style= "background-color: ${color.rgb_1}">
            </div>
            <h4>${color.name}</h4>
          </div>`
  )
  .join("");

let regex = new RegExp(/(?<=\/)\w*(?=.html)/g);
// [\s\S]*?
let pageName = document.URL.match(regex)[0];

console.log(pageName);
productDataList.forEach((product) => {
  if (pageName == product.id) {
    document.getElementById(
      "product-image"
    ).innerHTML = `<img src=${product.image} alt=${product.imageAlt}/>`;

    document.getElementById(
      "product-category"
    ).innerHTML = `${product.category}`;

    document.getElementById("product-title").innerHTML = `${product.title}`;

    document.getElementById("product-usage").innerHTML = `${product.usage}`;

    document.getElementById("product-consist").innerHTML = `${product.consist}`;

    document.getElementById(
      "product-properties"
    ).innerHTML = `${product.properties}`;

    document.getElementById(
      "product-requirements"
    ).innerHTML = `${product.requirements}`;

    document.getElementById(
      "product-procedure"
    ).innerHTML = `${product.procedure}`;

    document.getElementById("product-safety").innerHTML = `${product.safety}`;

    document.getElementById("product-storage").innerHTML = `${product.storage}`;

    document.getElementById(
      "product-disposal"
    ).innerHTML = `${product.disposal}`;

    document.getElementById(
      "product-consumption"
    ).innerHTML = `${product.consumption}`;

    document.getElementById(
      "product-sertificate"
    ).innerHTML = `${product.sertificate}`;
  }
});

// function makePage() {
//     let pages = "html/belosnezhka.html";
//     $.each(includes, function () {
//       let file = "html/" + $(this).data("include") + ".html";
//       $(this).load(file);
//     });
//   });
