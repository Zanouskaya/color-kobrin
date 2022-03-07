import { colorsList } from "./modules/colors.js";

//make underline (by adding className active) buttons
let btnsWrapper = document.getElementById("btnsWrapper");
let btns = btnsWrapper.getElementsByTagName("button");
for (let i = 0; i < btns.length; i++) {
  // btns[i].addEventListener("click", activeBtn);
  btns[i].addEventListener("click", function () {
    showCards(btns[i].id);
    addFullScreenEvent(btns[i].id);
  });
  btns[i].addEventListener("click", underline, false);
  btns[i].addEventListener("click", normal, true);
}
// activeBtn("rgb_o");
// function activeBtn() {
//   let current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
// }
function underline(e) {
  e.currentTarget.className += " active";
}

//search cards by title card name
let search = document.getElementById("search");
search.addEventListener("keyup", filterName);

function filterName() {
  let input = document.getElementById("search");
  let cards = document.getElementsByClassName("color-card");
  let filter = input.value.toUpperCase();

  for (let i = 0; i < cards.length; i++) {
    let title = cards[i].getElementsByTagName("h4")[0];
    if (
      title.innerHTML.toUpperCase().indexOf(filter) > -1 &&
      !cards[i].className.includes("show")
    ) {
      cards[i].className += " show";
    } else if (title.innerHTML.toUpperCase().indexOf(filter) == -1) {
      cards[i].className = cards[i].className.replace(" show", "");
    }
  }
}

//rendering cards

showCards("rgb_o");
function showCards(rgb) {
  document.getElementById("colors").innerHTML = colorsList
    .map(
      (color) =>
        `<div class='color-card show' id='colorCard_${color.id}' >

          <div class='color-back' style= "background-color: ${color[rgb]}">
            <div class='icon-wrapper'>
              <button class='palitra-icon btn-full-screen' id='${rgb}-btn-screen_${color.id}'><img src = './images/icons/crop.png' style='width: 20px;'></button>
              <button class='palitra-icon btn-favorite' id='btn-favorite-${color.id}'><img src = './images/icons/bookmark.png' style='width: 20px; '></button>
            </div>
          </div>
          
          <h4>${color.name}</h4>
        </div>`
    )
    .join("");

  // showModal();
}

let favoriteBtns = document.getElementsByClassName("btn-favorite");
// console.log(fullScreenBtns);
let arrOfFavorite = [];
for (let i = 0; i < favoriteBtns.length; i++) {
  favoriteBtns[i].addEventListener("click", function () {
    if (!arrOfFavorite.includes(favoriteBtns[i].id)) {
      arrOfFavorite.push(favoriteBtns[i].id);
      saveToFavorite();
      addEvent();
      changeIcon(favoriteBtns[i].id);
    } else {
      delFavorite(favoriteBtns[i].id);
    }
  });
}

function changeIcon(btnId) {
  let btn = document.getElementById(btnId);
  let regex = new RegExp(/(?<=\/)\w*(?=.png)/g);
  let childImg = btn.children[0].src.match(regex);
  if (childImg[0] === "bookmark") {
    btn.innerHTML = `<img src = './images/icons/bookmark_fill.png' style='width: 20px;'>`;
  } else {
    btn.innerHTML = `<img src = './images/icons/bookmark.png' style='width: 20px;'>`;
  }
}

function addEvent() {
  let module = document.getElementById("modalWrapper");
  let delFavoriteBtn = module.getElementsByClassName("btn-del-favorite");

  for (let i = 0; i < delFavoriteBtn.length; i++) {
    delFavoriteBtn[i].addEventListener("click", function (e) {
      delFavorite(this.id);
    });
  }
}

function delFavorite(btnId) {
  for (let j = 0; j < arrOfFavorite.length; j++) {
    if (arrOfFavorite[j] === btnId) {
      arrOfFavorite.splice(j, 1);
      saveToFavorite();
      changeIcon(btnId);
    }
  }
}

function saveToFavorite() {
  let favoriteId = arrOfFavorite.map((elem) => {
    let re = new RegExp(/\d+/);
    let elemId = elem.match(re)[0];
    return (elem = elemId);
  });
  const filterColors = (arr1, arr2) => {
    let favoriteColors = [];
    favoriteColors = arr1.filter((colors) => {
      return arr2.find((el) => {
        return el == colors.id;
      });
    });
    return favoriteColors;
  };
  let newColorsList = filterColors(colorsList, favoriteId);

  let favoriteColorsDiv = document.getElementById("favorite-colors");
  favoriteColorsDiv.innerHTML = newColorsList
    .map(
      (colors) =>
        `
          <div class="color-card show" id="colorCard_${colors.id}">
    <div class="color-back" style="background-color: ${colors.rgb_o}">
      <div class="icon-wrapper">
      <button class='palitra-icon btn-full-screen' id='btn-screen-${colors.id}'><img src = './images/icons/crop.png' style='width: 20px;'></button>
      <button class='palitra-icon btn-del-favorite' id='btn-favorite-${colors.id}'><img src = './images/icons/close.png' style='width: 20px;'></button>
      </div>
    </div>

    <h4>${colors.name}</h4>
  </div>
          `
    )
    .join("");
  addEvent();
  addFullScreenEvent();
  let favoriteCount = favoriteColorsDiv.childElementCount;
  let favoriteCountDiv = document.getElementById("modal-title");
  favoriteCountDiv.innerHTML = `Избранные цвета: ${favoriteCount} `;
}

function addFullScreenEvent(rgbBtn) {
  let fullScreenBtns = document.getElementsByClassName("btn-full-screen");
  for (let i = 0; i < fullScreenBtns.length; i++) {
    fullScreenBtns[i].addEventListener("click", function () {
      fullScreen(this.id, rgbBtn);
    });
  }
}

function fullScreen(elemId, rgbBtn) {
  let fullScreenBtns = document.getElementsByClassName("btn-full-screen");
  // console.log(rgb);
  let re = new RegExp(/\d{3}/);
  let id = elemId.match(re)[0];
  let reRgb = new RegExp(/^\w{5}/);
  // let rgb = elemId.match(reRgb)[0];
  let rgb = rgbBtn;
  for (let i = 0; i < fullScreenBtns.length; i++) {
    colorsList.forEach((item) => {
      if (item.id == id) {
        let fullScreenDiv = document.getElementById("full-screen");
        fullScreenDiv.style.display = "flex";
        fullScreenDiv.innerHTML = `
            <div class = 'full-screen-background' style= 'background-color: ${item[rgb]}' id='full-screen-background'>
              <div class= 'full-screen-title'>
                <h1 >${item.name} </h1>
                <button class='palitra-icon btn-close-screen' id='btn-close-screen' ><img src = './images/icons/close.png' style='width: 20px; '></button>
              </div>
              <div class="all-colors-columns small">
                <div class="color-card show" id='${item.id}-rgb_1'>
                  <div class="color-back" style="background-color: ${item.rgb_1}"></div>
                  <h4>1:1</h4>
                </div>
                <div class="color-card show">
                  <div class="color-back" style="background-color: ${item.rgb_2}"></div>
                  <h4>1:2</h4>
                </div>
                <div class="color-card show">
                  <div class="color-back" style="background-color: ${item.rgb_4}"></div>
                  <h4>1:4</h4>
                </div>
                <div class="color-card show">
                  <div class="color-back" style="background-color: ${item.rgb_8}"></div>
                  <h4>1:8</h4>
                </div>
                <div class="color-card show">
                  <div class="color-back" style="background-color: ${item.rgb_16}"></div>
                  <h4>1:16</h4>
                </div>
                <div class="color-card show">
                  <div class="color-back" style="background-color: ${item.rgb_40}"></div>
                  <h4>1:40</h4>
                </div>
                <div class="color-card show">
                  <div class="color-back" style="background-color: ${item.rgb_80}"></div>
                  <h4>1:80</h4>
                </div>
              </div>
            </div>
        
        `;
      }
    });
  }
  closeScreen();
  changeBackground();
}

function closeScreen() {
  let closeScreenBtns = document.getElementsByClassName(
    "palitra-icon btn-close-screen"
  );
  console.log(closeScreenBtns);
  for (let i = 0; i < closeScreenBtns.length; i++) {
    closeScreenBtns[i].addEventListener("click", function () {
      let fullScreenDiv = document.getElementById("full-screen");
      fullScreenDiv.style.display = "none";
    });
  }
}

function changeBackground() {
  let fullScreenDiv = document.getElementById("full-screen");
  let card = fullScreenDiv.getElementsByClassName("color-back");
  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function () {
      let bgColor = this.style.backgroundColor;
      let bg = document.getElementById("full-screen-background");
      bg.style.backgroundColor = bgColor;
    });
  }
}

let favorBtn = document.getElementById("modal-title");

favorBtn.addEventListener("click", function () {
  let favorColorDiv = document.getElementById("favorite-colors");
  if (favorColorDiv.style.display == "grid") {
    favorColorDiv.style.display = "none";
  } else {
    favorColorDiv.style.display = "grid";
  }
});
// document.addEventListener("mouseup", function (e) {
//   var fullScreen = document.getElementById("full-screen");
//   if (!fullScreen.contains(e.target)) {
//     fullScreen.style.display = "none";
//   }
// });
