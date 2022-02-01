let addSurfaceBtn = document.querySelector(".add-surface");
console.log(addSurfaceBtn);
let count = 0;
addSurface();
// addSurfaceBtn.addEventListener("click", addSurface);
addSurfaceBtn.addEventListener("click", function (event) {
  addSurface();
  event.preventDefault();
});

function addSurface() {
  count += 1;
  document.querySelector(".surface-areas").insertAdjacentHTML(
    "beforeend",
    `<div class="surface-area" id="sur-${count}">
          <p>Площадь ${count}</p><input
              type="text"
              class="height"
              id="height-${count}"
              placeholder= 'высота'
              min="0" />
              <input
              type="text"
              class="width"
              id="width-${count}"
              placeholder= 'ширина'
              min="0" />
          <div class='sqr-result'>0.00</div><p>м&#178;</p>
          <button class="btn del-surface" id="${count}"><i class="far fa-times-circle"></i></button>
        </div>`
  );
  let el = document.getElementById(`${count}`);

  el.addEventListener("click", function () {
    delSurface(this.id);
  });

  let width = document.getElementById(`width-${count}`);

  width.addEventListener("input", (event) => {
    width.setAttribute("value", event.target.value);
    calculator();
  });

  let height = document.getElementById(`height-${count}`);

  height.addEventListener("input", (event) => {
    height.setAttribute("value", event.target.value);
    calculator();
  });
}
function delSurface(id) {
  let el = document.getElementById(`sur-${id}`);
  el.remove();
}

function calculator() {
  let surfaces = document.getElementsByClassName("surface-area");
  let total_sqr = 0;
  for (let surface of surfaces) {
    let width = surface.getElementsByClassName("width");
    let widthValue = width[0].getAttribute("value");
    let height = surface.getElementsByClassName("height");
    let heightValue = height[0].getAttribute("value");
    let sqr = widthValue * heightValue;
    console.log(surface.getElementsByClassName("sqr-result"));
    surface.getElementsByClassName("sqr-result")[0].innerHTML = `${sqr.toFixed(
      2
    )}`;
    total_sqr += sqr;
  }
  let productsSelect = document.querySelector(".product-select");
  let rashodPaint = productsSelect.value;
  let rashodPrimer = 200;
  let resultPaint = (total_sqr * rashodPaint) / 1000;
  let resultPrimer = (total_sqr * rashodPrimer) / 1000;
  document.getElementById("surfaceSumm").innerHTML = ` ${total_sqr.toFixed(2)}`;

  document.getElementById(
    "result-calc-paint"
  ).innerHTML = ` ${resultPaint.toFixed(2)}`;

  document.getElementById(
    "result-calc-primer"
  ).innerHTML = ` ${resultPrimer.toFixed(2)}`;
}
