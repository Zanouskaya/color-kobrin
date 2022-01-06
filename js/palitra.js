import { colorsList } from "./modules/colors.js";

document.getElementById("colors").innerHTML = colorsList
  .map(
    (color) =>
      `<div class='color-card'> 
        <div class='color-back' style= "background-color: ${color.rgb}">
        </div>
        <h3>${color.name}</h3>
      </div>`
  )
  .join("");
