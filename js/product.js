import { productDataList } from "./modules/product_info_list.js";
import { colorsDahavaya } from "./modules/colors_dahavaya.js";
import { colorsMaster } from "./modules/colors_master.js";
import { colorsAzure } from "./modules/colors_azure.js";

//define name of choosing product
let regex = new RegExp(/\w*(?=.html)/);
let pageName = document.URL.match(regex)[0];

//add information in each category on product page
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

//make a some differences for products information rendering
if (pageName == "dahavaya") {
  document.getElementById("section-title").innerHTML = "Палитра";
  document.getElementById("colors").innerHTML = colorsDahavaya
    .map(
      (color) =>
        `<div class='color-card show' id='colorCard_${color.id}' >
              <div class='color-back' style= "background-color: ${color.rgb_o}">
              </div>
              <h4>${color.name}</h4>
            </div>`
    )
    .join("");
  document.getElementById("link-wrapper").innerHTML = `
    <a class="link-btn" href="calculator.html"> Рассчитать необходимое количество
    </a>
    <a class="link-btn" href="#section-title" id="palitra"> Перейти к палитре
    </a>`;
} else if (pageName == "master" || pageName == "master_m") {
  document.getElementById("section-title").innerHTML = "Палитра";
  document.getElementById("colors").innerHTML = colorsMaster
    .map(
      (color) =>
        `<div class='color-card show' id='colorCard_${color.id}' >
                <div class='color-back' style= "background-color: ${color.rgb_o}">
                </div>
                <h4>${color.name}</h4>
              </div>`
    )
    .join("");
  document.getElementById("link-wrapper").innerHTML = `
      <a class="link-btn" href="calculator.html"> Рассчитать необходимое количество
      </a>
      <a class="link-btn" href="#section-title" id="palitra"> Перейти к палитре
      </a>`;
} else if (pageName == "azure") {
  document.getElementById("section-title").innerHTML = "Палитра";
  document.getElementById("colors").innerHTML = colorsAzure
    .map(
      (color) =>
        `<div class='color-card show' id='colorCard_${color.id}' >
              <div class='color-back' >
              <img src='${color.image}' style='display: flex; width: 100%; height: 100%; border-radius: 18px 18px 0 0'/>
              </div>
              <h4>${color.name}</h4>
            </div>`
    )
    .join("");
  document.getElementById("link-wrapper").innerHTML = `
    <a class="link-btn" href="calculator.html"> Рассчитать необходимое количество
    </a>
    <a class="link-btn" href="#section-title" id="palitra"> Перейти к палитре
    </a>`;
}
