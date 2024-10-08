var header = document.querySelector('header');
var main   = document.querySelector('main');
var getHight = header.clientHeight;
main.style.marginTop = getHight+"px";
console.log(getHight);

