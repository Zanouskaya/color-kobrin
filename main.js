
// var Itemdata = document.querySelector('.card');

var items = [
  {
    category: 'Краска',
    name: 'Белоснежка',
    description: 'Матовая краска используется для внутренних работ',
  },
  {
    category: 'Краска',
    name: 'Фасадная',
    description: 'Матовая краска используется для наружних работ',
  },
  {
    category: 'Краска',
    name: 'Фасадная',
    description: 'Матовая краска используется для наружних работ',
  },
  {
    category: 'Шпатлевка',
    name: '1jhv',
    description: 'Матовая краска используется для наружних работ',
  },
];



document.getElementById('test').innerHTML = items.map(item =>
  `<div class='card' id='card'>
    <div id='tag'><h5>${item.category}</h5></div>
    <h3>${item.name}</h3>
    <p>${item.description}</p>
    <button>Узнать больше</button>
  </div>`
).join('');


items.forEach((item) => {
    if (item.category === 'Краска') {
        document.getElementById("tag").style.background = "#fa7f0e"
    }
  }, {});
