import { colorsList } from "./modules/colors.js";

function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

var randomColors = getRandom(colorsList, 5);

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
