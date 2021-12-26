// var Itemdata = document.querySelector('.card');

var items = [
  {
    id: "p_belosnezhka",
    type: "paint",
    category: "Краска",
    name: "Белоснежка",
    description: "Применяется для покрытия внутренних стен и потолков жилых, \
    подвальных помещений по кирпичным, бетонным, оштукатуренным поверхностям а также ДСП, ДВП, гипсокартону.",
  },
  {
    id: "p_fasadnaya",
    type: "paint",
    category: "Краска",
    name: "Фасадная",
    description: "Применяется для наружных покрытий по минеральной основе (штукатурка, бетон, кирпич) \
    и для внутренних работ в помещениях с более активной химической средой.",
  },
  {
    id: "p_fasadnaya_silikonovaya",
    type: "paint",
    category: "Краска",
    name: "Фасадная силиконовая",
    description: "Рекомендуется для ремонта старых, не утративших несущей способности штукатурок, \
    в том числе на основе искусственных смол,а также покрытий, выполненных минеральными силикатными материалами.",
  },
  {
    id: "p_fasadnaya_silikatnaya",
    type: "paint",
    category: "Краска",
    name: "Фасадная силикатная",
    description: "Особо рекомендуется для ремонта старых, не утративших несущей способности штукатурок, \
    в том числе на основе искусственных смол, а также покрытий, выполненных разнородными минеральными и силикатными материалами.",
  },
  {
    id: "p_evrostar",
    type: "paint",
    category: "Краска",
    name: "Евростар",
    description: "Применяется для покрытия внутренних стен и потолков жилых, подвальных помещений по кирпичным, \
    бетонным, оштукатуренным поверхностям а также ДСП, ДВП, гипсокартону.",
  },
  {
    id: "p_dahavaya",
    type: "paint",
    category: "Краска",
    name: "Дахавая",
    description: "Для окраски шифера и цементно-песчаной черепицы с углом наклона не менее 45 . \
    Устойчива к воздействию климатических факторов умеренного климата. \
    Рекомендуется использовать для окраски минеральных оснований подвергаемых повышенным нагрузкам.",
  },
  {
    id: "p_master",
    type: "paint",
    category: "Краска",
    name: "Мастер",
    description: "Применяется для наружных и внутренних покрытий по натуральной древесине,\
    минеральной основе (штукатурка, бетон, кирпич), ДСП, ДВП, гипсокартону, обоям.",
  },
  {
    id: "p_master_m",
    type: "paint",
    category: "Краска",
    name: "Мастер-М",
    description: "Применяется для наружных и внутренних покрытий по натуральной древесине, \
    минеральной основе (штукатурка, бетон, кирпич), ДСП, ДВП, гипсокартону, обоям.",
  },
  {
    id: "p_np1ps",
    type: "putty",
    category: "Шпатлевка",
    name: "НП 1 ПС",
    description: "Матовая краска используется для наружных работ",
  },
];

document.getElementById("test").innerHTML = items.map((item) =>
      `<div class='card ${item.type}' id=${item.id}>
        <div class='card-top'>
        <div id='${item.id}_title' class='tag'><span>${item.category}</span></div>
        <i class="far fa-bookmark"></i>
        </div>
        <div class='card-description'>
          <h3>${item.name}</h3>
          <p>${item.description}</p>
        </div>
      </div>`
  ).join("");

items.forEach((item) => {
  if (item.type == "paint") {
    document.getElementById(`${item.id}_title`).style.background = "#fa7f0e";
    document.getElementById(`${item.id}`).style.borderColor = "#fa7f0e";
    // document.getElementById(`${item.id}`).className += ' show'
  } else if (item.type == "putty") {
    document.getElementById(`${item.id}_title`).style.background = "#0055A9";
    document.getElementById(`${item.id}`).style.borderColor = "#0055A9";
  }
}, {});

filterSelection('card');
function filterSelection(type) {
  let products = document.getElementsByClassName('card')
  for (i = 0; i < products.length; i++) {
    if (products[i].className.includes(type)) {
      products[i].className += ' show';
    } else {
      while (products[i].className.includes('show')) {
        products[i].className = products[i].className.replace(' show', '');
      }
      }
  }
}

var menuBar = document.getElementById("menubar");
var btns = menuBar.getElementsByClassName("btn");
for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", makeActive);
  console.log(btns[i]);
}

function makeActive() {
  console.log('event triggered')
  var current = document.getElementsByClassName("active");
  console.log(current);
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
}




// calulations
function calculate() {
  var width = document.getElementById("width").value;
  var height = document.getElementById("height").value;
  var result = width*height;
  event.preventDefault();
  return (document.getElementById("result").innerHTML = `<p>площадь помещения: ${result} </p>`);
}


//active page



//searchbar
