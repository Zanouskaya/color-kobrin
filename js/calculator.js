const submitCalculate = document.querySelector(".submitBtn");
submitCalculate.addEventListener("click", calculator);

function calculator(event) {
  const productsSelect = document.querySelector(".product-select");
  var rashod = productsSelect.value;
  var width = parseInt(document.getElementById("width").value);
  var height = parseInt(document.getElementById("height").value);
  var square = width * height;
  var result = square * rashod;
  event.preventDefault();
  document.getElementById(
    "result"
  ).innerHTML = `<p>площадь помещения: ${square} м2</p>
      <p>расход краски: ${rashod} г/м2</p>
       <p>необходимое количество краски: ${result} грамм </p>
       <p>количество грунтовки</p>`;
}

let addSurfaceBtn = document.querySelector(".add-surface");

addSurfaceBtn.addEventListener("click", addSurface);

var clicks = document.getElementById("surfaceAreas").childElementCount;
function addSurface() {
  clicks += 1;
  document.querySelector(".surface-areas").insertAdjacentHTML(
    "afterbegin",
    `<div class="surface-area ${clicks}">
          <label for="surface"
            >Площадь ${clicks}<input
              type="text"
              id="height"
              value="0"
              min="0" /><input
              type="text"
              id="width"
              value="0"
              min="0" /></label
          ><button class="btn del-surface ${clicks}"><i class="far fa-times-circle"></i></button>
        </div>`
  );
  let surfaceAreas = document.querySelector(".surface-areas");
  let delSurfaceBtn = surfaceAreas.querySelectorAll(".del-surface");
  //   console.log(delSurfaceBtn);
  for (let i = 0; i < delSurfaceBtn.length; i++) {
    delSurfaceBtn[i].addEventListener("click", function () {
      delSurface(delSurfaceBtn[i].classList[2]);
      //   console.log(delSurfaceBtn[i].classList[2]);
    });
  }
  function delSurface(id) {
    let current = document.getElementsByClassName("surface-area");
    for (let j = 0; j < current.length; j++) {
      if (current[j].className.includes(id)) {
        current[j].remove();
      }
    }
    // console.log(current);
  }
}
