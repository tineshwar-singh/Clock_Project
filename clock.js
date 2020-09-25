// digitalClock
function digitalClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let am_pm = date.getHours()<12 ? "AM" : "PM" ;

    document.getElementById("digitalClock").innerHTML = `<h1>${hours}:${minutes}:${seconds} ${am_pm}</h1>`;
}
digitalClock();
setInterval(digitalClock, 1000);

// analogClock
let seconds = document.querySelector("#seconds");
let minutes = document.querySelector("#minutes");
let hours = document.querySelector("#hours");
let showClock = document.querySelector("#showClock");

function setClock() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hourDeg = hh*30 + mm*0.5;
    let minuteDeg = mm*6 + ss*0.1;
    let secondDeg = ss*6;

    hours.style.transform = `rotateZ(${hourDeg}deg)`;
    minutes.style.transform = `rotateZ(${minuteDeg}deg)`;
    seconds.style.transform = `rotateZ(${secondDeg}deg)`;
    showClock.innerHTML = `${hh%12} : ${mm} : ${hh>12 ? "PM" : "AM"}`;
}
setInterval(setClock, 1000)
setClock();