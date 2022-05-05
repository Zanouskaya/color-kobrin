//add action on button '+добавить площадь' and don't refresh page
let addSurfaceBtn = document.querySelector(".add-surface");
let count = 0;
addSurface();
addSurfaceBtn.addEventListener("click", function (event) {
  addSurface();
  event.preventDefault();
});

let paintIndex = 0;
let surfaceIndex = 0;

//add div with new fields, call the function that count number of child elements
function addSurface() {
  count += 1;
  document.querySelector(".surface-areas").insertAdjacentHTML(
    "beforeend",
    `<div class="surface-area" id="sur-${count}">
          <p class = 'name'>Площадь ${count}</p>
              <input
              type="text"
              class="height"
              id="height-${count}"
              placeholder= 'высота'
              min="0" 
              pattern ='^$|^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$'
              onkeyup="this.value=this.value.replace(/,/g, '.')"
              title ='Введите число'/>
              <input
              type="text"
              class="width"
              id="width-${count}"
              placeholder= 'ширина'
              min="0" 
              pattern ='^$|^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$' 
              onkeyup="this.value=this.value.replace(/,/g, '.')"
              title ='Введите число'/>
          <div class='sqr-result'>0.00</div><p>м&#178;</p>
          <button class="btn del-surface" id="${count}"><img src = './images/icons/close.png'  style='width: 20px;'</button>
        </div>`
  );
  let delBtn = document.getElementById(`${count}`);

  delBtn.addEventListener("click", function () {
    delSurface(this.id);
  });

  let width = document.getElementById(`width-${count}`);

  width.addEventListener("input", (event) => {
    width.setAttribute("value", event.target.value);
    defineRashod(paintIndex, surfaceIndex);
  });

  let height = document.getElementById(`height-${count}`);

  height.addEventListener("input", (event) => {
    height.setAttribute("value", event.target.value);
    defineRashod(paintIndex, surfaceIndex);
  });
  divCount();
}

//count number of child elements and hide del button if count=0
function divCount() {
  let divCounter = document.getElementById("surface-areas").childElementCount;
  let el = document.getElementsByClassName("del-surface")[0];
  if (divCounter == 1) {
    el.style.display = "none";
  } else {
    el.style.display = "block";
  }
}

//action on delete button
function delSurface(id) {
  let delDiv = document.getElementById(`sur-${id}`);
  delDiv.remove();
  defineRashod(paintIndex, surfaceIndex);
  divCount();
}

//define index of choosing paint (after user action on select element)
let paintSet = document.getElementById("product-select");
paintSet.addEventListener("change", function () {
  paintIndex = paintSet.selectedIndex;
  defineRashod(paintIndex, surfaceIndex);
});

//define index of choosing surface (after user action on select element)
let surfaceSet = document.getElementById("surface-select");
surfaceSet.addEventListener("change", function () {
  surfaceIndex = surfaceSet.selectedIndex;
  defineRashod(paintIndex, surfaceIndex);
});

//define paint consumption, depending on the selected options => call to action calculations
function defineRashod(paintIndex, surfaceIndex) {
  let paintSet = document.getElementById("product-select");
  let paintName = paintSet.getElementsByTagName("option")[paintIndex];
  let paintRashod, primerRashod;
  if (surfaceIndex == 0) {
    paintRashod = paintName.getAttribute("value.min");
    primerRashod = 120;
  } else {
    paintRashod = paintName.getAttribute("value.max");
    primerRashod = 150;
  }

  document.getElementById(
    "product-paint-rashod"
  ).children[1].innerHTML = `${paintRashod}`;
  document.getElementById(
    "product-primer-rashod"
  ).children[1].innerHTML = `${primerRashod}`;

  calculator(paintRashod, primerRashod);
}

//define finish results
function calculator(rashodPaint, rashodPrimer) {
  let surfaces = document.getElementsByClassName("surface-area");
  let total_sqr = 0;

  for (let surface of surfaces) {
    let width = surface.getElementsByClassName("width");
    let widthValue = width[0].getAttribute("value");
    let height = surface.getElementsByClassName("height");
    let heightValue = height[0].getAttribute("value");
    let sqr = widthValue * heightValue;
    surface.getElementsByClassName("sqr-result")[0].innerHTML = `${sqr.toFixed(
      2
    )}`;
    total_sqr += sqr;
  }

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
