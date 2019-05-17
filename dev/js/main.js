/*Variables*/
var trigger = document.querySelector("#trigger-menu");
var generic = document.querySelector("#header__generic");
var back = document.querySelector("#control__back");
var next = document.querySelector("#control__next");
var topG = document.querySelector("#top__generic");
var topW = topG.clientWidth;
var t = 0
var current = (t * 50);
var link = document.querySelectorAll("a");
console.log(link)

/*Funciones*/
function pDefault(event){ event.preventDefault(); }

function showHide(event){ generic.classList.toggle("is-show-menu"); }

function moveSlider(event){
    var id = this.id;

    if (id == "control__next") {
        current = current + 50;
        if (current <= 2000 - topW) {
            t++;
            topG.style.marginLeft = -current+"px";
        }
    }
    if (id == "control__back" ) {
        current = current - 50;
        if (current >= 0) {
            t--;
            topG.style.marginLeft = -current+"px";
        }
    }
}

function main(){
    trigger.addEventListener('click',showHide);
    back.addEventListener('click',moveSlider);
    next.addEventListener('click',moveSlider);

    for (var i = 0; i < link.length; i++) {
        link[i].addEventListener("click",pDefault);
    }
}
window.addEventListener("load", main);
