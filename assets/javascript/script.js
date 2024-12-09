var header = document.querySelector('header');
var main   = document.querySelector('main');
var getHight = header.clientHeight;
main.style.marginTop = getHight+"px";
var mouse  = document.querySelector('.mouse');
var time;
function mouseStop(){
    mouse.style.display="none";
}
window.addEventListener('mousemove',function(e){
    var x = e.pageX;
    var y = e.pageY;
    // console.log(x+y);
    mouse.style.display="block";
    mouse.style.left = x+"px";
    mouse.style.top = y+"px";

    clearTimeout(time);
    time = setTimeout(mouseStop,3000);//3s

});

