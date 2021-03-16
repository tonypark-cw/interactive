const MENU_ARRS = document.querySelectorAll("li");
const NAME_ARRS = ['Yesterday', 'Today', 'Tomorrow', 'Home'];
const bgvideo = document.querySelector(".bgvideo");


MENU_ARRS.forEach(function(menu){
    menu.addEventListener("click", menuHandler);
});

function menuHandler(event){
    document.body.classList.add("reveal");
    loader.style.display = "initial";
    if(event.target.innerText == NAME_ARRS[0]){
        movePage();
        toYesterday(event);
    }else if(event.target.innerText == NAME_ARRS[1] ){
        movePage();
        toToday(event);
    }else if(event.target.innerText == NAME_ARRS[2]){
        movePage();
        toTomorrow(event);
    }else if(event.target.innerText == NAME_ARRS[3]){
        movePage();
        toHome(event);
    }
}
const loader = document.querySelector("#loader");

function movePage(){
    setTimeout(() => {
        document.body.classList.add("reveal");
    }, 1000);
    document.body.classList.toggle("reveal");
}
function toHome(event){
    setTimeout(() => {
        event.target.innerText = event.target.parentNode.classList[1];
        event.target.parentNode.classList.toggle(event.target.parentNode.classList[1]);
        bgvideo.style.display = "initial";
    }, 1000);
}

function toYesterday(event){
    hideVid(event);
    event.target.parentNode.classList.add(event.target.innerText);
}

function toToday(event){
    hideVid(event);
    event.target.parentNode.classList.add(event.target.innerText);
}

function toTomorrow(event){
    hideVid(event);
    event.target.parentNode.classList.add(event.target.innerText);
}

function hideVid(event){
    setTimeout(() => {
        bgvideo.style.display = "none";
        event.target.innerText = NAME_ARRS[3];
    }, 1000);
}