
function filterSelection(type) {
  var products = document.getElementsByClassName('card')
  for (var i = 0; i < products.length; i++) {
    if (products[i].className.includes(type)) {
      products[i].className += ' show';
    } else {
      while (products[i].className.includes('show')) {
        products[i].className = products[i].className.replace(' show', '');
      }
    }
  }
};

export { filterSelection };
