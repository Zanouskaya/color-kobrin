import { colorsList } from "./modules/colors.js";

let arrOfFavoriteColors = [];

//make underline (by adding className active) buttons
let btnsWrapper = document.getElementById("btnsWrapper");
let btns = btnsWrapper.getElementsByTagName("button");
for (let i = 0; i < btns.length; i++) {
  if (btns[i].className.includes(" active")) {
    showCards(btns[i].id);
  }
  btns[i].addEventListener("click", activeBtn);
  btns[i].addEventListener("click", function () {
    showCards(btns[i].id);
  });
}


function activeBtn() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
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

function showCards(rgb) {
  if (rgb != 'fav_col') {
    document.getElementById("colors").innerHTML = colorsList
      .map(
        (color) =>
          `<div class='color-card show' id='colorCard_${color.id}' >

        <div class='color-back' style= "background-color: ${color[rgb]}">
          <div class='icon-wrapper'>
            <button class='palitra-icon btn-full-screen' id='${rgb}-btn-screen_${color.id}' color='${color[rgb]}' conc='${rgb}' number='${color.id}'>
              <img src = './images/icons/crop.png' style='width: 20px;'>
            </button>
            <button class='palitra-icon btn-favorite' conc='${rgb}' number='${color.id}'  id='${rgb}-btn-favorite-${color.id}'>
           
            </button>
          </div>
        </div>
        
        <h4>${color.name}</h4>
      </div>`
      )
      .join("");
    let favoriteBtns = document.getElementsByClassName("btn-favorite");
    for (let i = 0; i < favoriteBtns.length; i++) {
      let favoriteIndex = arrOfFavoriteColors.findIndex((el) => el.id == favoriteBtns[i].id);
      if (favoriteIndex === -1) {
        favoriteBtns[i].innerHTML = `<img src = './images/icons/bookmark.png' style='width: 20px;'>`
      }
      else {
        favoriteBtns[i].innerHTML = `<img src = './images/icons/bookmark_fill.png' style='width: 20px;'>`;
      }
    }
    console.log(arrOfFavoriteColors)
  } else {

    document.getElementById("colors").innerHTML = arrOfFavoriteColors
      .map(
        (colors) =>
          `
            <div class="color-card show" id="colorCard_${colors.id}">
      <div class="color-back" style="background-color: ${colors.rgb}">
        <div class="icon-wrapper">
        <button class='palitra-icon btn-full-screen'  id='${colors.conc}-btn-screen_${colors.number}' color='${colors.rgb}' conc='${colors.conc}' number= '${colors.number}'> 
          <img src = './images/icons/crop.png' style='width: 20px;'>
        </button>
        <button class='palitra-icon btn-del-favorite' conc='${colors.conc}' number='${colors.number}'  id='${colors.conc}-btn-del-favorite-${colors.number}' color ='${colors.rgb}'>
          <img src = './images/icons/close.png' style='width: 20px;'>
        </button>
        </div>
      </div>

      <h4>${colors.name}</h4>
    </div>
            `
      )
      .join("");
  }

  if (rgb == 'fav_col' && arrOfFavoriteColors.length == 0) {
    document.getElementById("comments").style.display = 'block';
  } else {
    document.getElementById("comments").style.display = 'none';
  }
  addFullScreenEvent();
  addFavoriteEvent();
  addDelEvent();
}


function addFavoriteEvent() {

  let favoriteBtns = document.getElementsByClassName("btn-favorite");

  for (let i = 0; i < favoriteBtns.length; i++) {

    favoriteBtns[i].addEventListener("click", function () {
      let favoriteIndex = arrOfFavoriteColors.findIndex((el) => el.id == favoriteBtns[i].id);
      if (favoriteIndex === -1) {
        arrOfFavoriteColors.push({ id: favoriteBtns[i].id, number: favoriteBtns[i].getAttribute("number"), conc: favoriteBtns[i].getAttribute("conc") })
        for (let elem of arrOfFavoriteColors) {
          let colorDetails = colorsList.find((el) => el.id == elem.number);
          elem.name = colorDetails.name;
          elem.rgb = colorDetails[elem.conc];
        }
        console.log(arrOfFavoriteColors)
        favoriteBtns[i].innerHTML = `<img src = './images/icons/bookmark_fill.png' style='width: 20px;'>`;
        changeNumberFavorite();
      } else {
        arrOfFavoriteColors.splice(favoriteIndex, 1);
        console.log(arrOfFavoriteColors)
        favoriteBtns[i].innerHTML = `<img src = './images/icons/bookmark.png' style='width: 20px;'>`;
        changeNumberFavorite();
      }
    })

  }
}

function addDelEvent() {
  let delFavoriteBtn = document.getElementsByClassName("btn-del-favorite");

  for (let i = 0; i < delFavoriteBtn.length; i++) {
    delFavoriteBtn[i].addEventListener("click", function () {
      let favoriteDelIndex = arrOfFavoriteColors.findIndex((el) =>
        (el.number == delFavoriteBtn[i].getAttribute("number") && el.conc == delFavoriteBtn[i].getAttribute("conc")));

      if (favoriteDelIndex > -1) {
        arrOfFavoriteColors.splice(favoriteDelIndex, 1);
        console.log(arrOfFavoriteColors)

      }
      showCards('fav_col')
      changeNumberFavorite();
    })
  }
}

function changeNumberFavorite() {
  let favoriteDiv = document.getElementById('fav_col')
  let numberOfFavorite = arrOfFavoriteColors.length
  favoriteDiv.children[1].innerHTML = `${numberOfFavorite}`
}


function addFullScreenEvent() {
  let fullScreenBtns = document.getElementsByClassName("btn-full-screen");
  for (let i = 0; i < fullScreenBtns.length; i++) {
    fullScreenBtns[i].addEventListener("click", function () {
      fullScreen(this.getAttribute('color'), this.getAttribute('number'));
      // console.log(this.id);
    });
  }
}

function fullScreen(color, elemId) {
  let fullScreenBtns = document.getElementsByClassName("btn-full-screen");

  for (let i = 0; i < fullScreenBtns.length; i++) {
    colorsList.forEach((item) => {
      if (item.id == elemId) {
        let fullScreenDiv = document.getElementById("full-screen");
        fullScreenDiv.style.display = "flex";
        fullScreenDiv.innerHTML = `
            <div class = 'full-screen-background' style= 'background-color: ${color}' id='full-screen-background'>
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
