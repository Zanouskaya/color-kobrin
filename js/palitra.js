import { colorsList } from "./modules/colors.js";

//make underline (by adding className active) buttons
let btnsWrapper = document.getElementById("btnsWrapper");
let btns = btnsWrapper.getElementsByTagName("button");
for (let i = 0; i < btns.length; i++) {
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
let cards = document.getElementsByClassName("color-card");
let allColors = document.getElementById("allColors");
let closeLine = document.getElementById("close-line");
let closeBtn = document.getElementById("btn-close");

showCards("rgb_o");
function showCards(rgb) {
  document.getElementById("colors").innerHTML = colorsList
    .map(
      (color) =>
        `<div class='color-card show' id='colorCard_${color.id}' >

          <div class='color-back' style= "background-color: ${color[rgb]}">
            <div class='icon-wrapper'>
              <button class='palitra-icon'><img src = './images/icons/bookmark.png' style='width: 20px; '></button>
              <button class='palitra-icon btn-full-screen' id='btn-screen_${color.id}'><img src = './images/icons/crop.png' style='width: 20px;'></button>
            </div>
          </div>
          
          <h4>${color.name}</h4>
        </div>`
    )
    .join("");
  // showModal();
}

//rendering all-colors-card
// document.getElementById(
//   "modal-title"
// ).innerHTML = `Выберите цвет, чтобы увидеть оттенки`;
// function showAll(elemId) {
//   for (let i = 0; i < cards.length; i++) {
//     let re = new RegExp(/\d+/);
//     let id = elemId.match(re)[0];
//     colorsList.forEach((item) => {
//       if (item.id == id) {
//         (document.getElementById("modal-title").innerHTML = `
//         ${item.name}`),
//           (document.getElementById("allColors").innerHTML = `
//         <div class='all-colors-columns'>
//           <div class='color-card show'>
//               <div class='color-back' style= "background-color: ${item.rgb_1}">
//               </div>
//               <h4>1:1</h4>
//           </div>
//           <div class='color-card show'>
//               <div class='color-back' style= "background-color: ${item.rgb_2}">
//               </div>
//               <h4>1:2</h4>
//           </div>
//           <div class='color-card show'>
//               <div class='color-back' style= "background-color: ${item.rgb_4}">
//               </div>
//               <h4>1:4</h4>
//           </div>
//           <div class='color-card show'>
//               <div class='color-back' style= "background-color: ${item.rgb_8}">
//               </div>
//               <h4>1:8</h4>
//           </div>
//           <div class='color-card show'>
//               <div class='color-back' style= "background-color: ${item.rgb_16}">
//               </div>
//               <h4>1:16</h4>
//           </div>
//           <div class='color-card show'>
//               <div class='color-back' style= "background-color: ${item.rgb_40}">
//               </div>
//               <h4>1:40</h4>
//           </div>
//           <div class='color-card show'>
//               <div class='color-back' style= "background-color: ${item.rgb_80}">
//               </div>
//               <h4>1:80</h4>
//           </div>
//           </div>
//           `);
//       }
//     });
//   }
// }
//add event listener for cards => open modal (allColors palitra)
// function showModal() {
//   for (let i = 0; i < cards.length; i++) {
//     cards[i].addEventListener("click", function () {
//       if (!cards[i].className.includes(" show-modal")) {
//         showAll(cards[i].id);
//         cards[i].className += " show-modal";
//         allColors.style.display = "block";
//         closeBtn.style.display = "block";
//         for (let j = 0; j < cards.length; j++) {
//           if (j != i && cards[j].className.includes(" show-modal")) {
//             cards[j].className = cards[j].className.replace(" show-modal", "");
//           }
//         }
//       } else if (cards[i].className.includes(" show-modal")) {
//         cards[i].className = cards[i].className.replace(" show-modal", "");
//         allColors.style.display = "none";
//         closeBtn.style.display = "none";
//       }
//     });
//   }
// }

//close modal by click on top line of modal
// closeLine.addEventListener("click", function () {
//   if (allColors.style.display === "none" && closeBtn.style.display === "none") {
//     allColors.style.display = "block";
//     closeBtn.style.display = "block";
//   } else {
//     allColors.style.display = "none";
//     closeBtn.style.display = "none";
//   }
// });
//close modal by click not on the modal
// document.addEventListener("mouseup", function (e) {
//   var modal = document.getElementById("modalWrapper");
//   if (!modal.contains(e.target)) {
//     allColors.style.display = "none";
//     closeBtn.style.display = "none";
//     for (let i = 0; i < cards.length; i++) {
//       if (cards[i].className.includes(" show-modal")) {
//         cards[i].className = cards[i].className.replace(" show-modal", "");
//       }
//     }
//   }
// });

let fullScreenBtns = document.getElementsByClassName("btn-full-screen");
// console.log(fullScreenBtns);
for (let i = 0; i < fullScreenBtns.length; i++) {
  fullScreenBtns[i].addEventListener("click", function () {
    fullScreen(fullScreenBtns[i].id);
  });
}

function fullScreen(elemId) {
  for (let i = 0; i < fullScreenBtns.length; i++) {
    let re = new RegExp(/\d+/);
    let id = elemId.match(re)[0];
    colorsList.forEach((item) => {
      if (item.id == id) {
        let fullscreenDiv = document.getElementById("full-screen");
        fullscreenDiv.style.display = "flex";
        fullscreenDiv.innerHTML = `
        <div style= 'background-color: ${item.rgb_o}; 
                      width: 100%; 
                      height: 100%; 
                      display: flex; 
                      flex-direction: column; 
                      justify-content: space-between;'>
            <div>
              <h1 style='padding-top: 10px; padding-left: 10px;'>${item.name} </h1>
              <button class='palitra-icon btn-close-screen' id='btn-close-screen' style='margin: 0px; '><img src = './images/icons/close.png' style='width: 20px; '></button>
            </div>
            <div class="all-colors-columns">
              <div class="color-card show">
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

// document.addEventListener("mouseup", function (e) {
//   var fullScreen = document.getElementById("full-screen");
//   if (!fullScreen.contains(e.target)) {
//     fullScreen.style.display = "none";
//   }
// });

// {
//   <div class="all-colors-columns">
//     <div class="color-card show">
//       <div class="color-back" style="background-color: ${item.rgb_1}"></div>
//       <h4>1:1</h4>
//     </div>
//     <div class="color-card show">
//       <div class="color-back" style="background-color: ${item.rgb_2}"></div>
//       <h4>1:2</h4>
//     </div>
//     <div class="color-card show">
//       <div class="color-back" style="background-color: ${item.rgb_4}"></div>
//       <h4>1:4</h4>
//     </div>
//     <div class="color-card show">
//       <div class="color-back" style="background-color: ${item.rgb_8}"></div>
//       <h4>1:8</h4>
//     </div>
//     <div class="color-card show">
//       <div class="color-back" style="background-color: ${item.rgb_16}"></div>
//       <h4>1:16</h4>
//     </div>
//     <div class="color-card show">
//       <div class="color-back" style="background-color: ${item.rgb_40}"></div>
//       <h4>1:40</h4>
//     </div>
//     <div class="color-card show">
//       <div class="color-back" style="background-color: ${item.rgb_80}"></div>
//       <h4>1:80</h4>
//     </div>
//   </div>;
// }
