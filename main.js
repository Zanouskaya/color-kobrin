// var Itemdata = document.querySelector('.card');

var items = [
  {
    id: "p_belosnezhka",
    type: "paint",
    category: "Краска",
    name: "Белоснежка",
    description: "Матовая краска используется для внутренных работ",
  },
  {
    id: "p_fasadnaya",
    type: "paint",
    category: "Краска",
    name: "Фасадная",
    description: "Матовая краска используется для наружных работ",
  },
  {
    id: "p_evrostar",
    type: "paint",
    category: "Краска",
    name: "Евростар",
    description: "Матовая краска используется для наружных работ",
  },
  {
    id: "p_np1ps",
    type: "putty",
    category: "Шпатлевка",
    name: "НП 1 ПС",
    description: "Матовая краска используется для наружных работ",
  },
];

document.getElementById("test").innerHTML = items
  .map(
    (item) =>
      `<div class='card' id=${item.id}>
    <div id='${item.id}_title'><h5>${item.category}</h5></div>
    <h3>${item.name}</h3>
    <p>${item.description}</p>
    <button>Узнать больше</button>
  </div>`
  )
  .join("");

items.forEach((item) => {
  if (item.type == "paint") {
    document.getElementById(`${item.id}_title`).style.background = "#fa7f0e";
  } else if (item.type == "putty") {
    document.getElementById(`${item.id}_title`).style.background = "#0055A9";
  }
}, {});

// calulations
function calculate() {
  var width = document.getElementById("width").value;
  var height = document.getElementById("height").value;
  var result = width*height;
  event.preventDefault();
  return (document.getElementById("result").innerHTML = `<p>площадь помещения: ${result} </p>`);
}
