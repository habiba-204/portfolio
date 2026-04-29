let icon = document.querySelector("#hamburger-icon");
let mobilelist = document.querySelector("#nav-list-mobile");

function menuToggle(){
if(icon.classList.contains("open"))
  { icon.classList.remove("open");
    mobilelist.classList.remove("open");
} else {
    icon.classList.add("open");
    mobilelist.classList.add("open");
}
}
icon.addEventListener("click" ,menuToggle);

function showTime() {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let time = hours + ":" + minutes + ":" + seconds;

let clock = document.querySelector("#time").innerText =time;

}

showTime();

setInterval(showTime, 1000);
