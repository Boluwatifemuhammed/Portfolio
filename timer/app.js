const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".min");
const secEl = document.querySelector(".sec");
const amEl = document.querySelector(".am_pm");
const amCont = document.querySelector(".am")
console.log(amEl);

function activateTime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();


    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;

    }
    if (sec < 10) {
        sec = "0" + sec;
    }

    if (hour > 11) {
        amEl.innerHTML = "PM";

    }
    hourEl.innerHTML = hour;
    minEl.innerHTML = min;
    secEl.innerHTML = sec;
    amEl.innerHTML = am_pm;






}

setInterval(() => {
    activateTime()

}, 1000);

