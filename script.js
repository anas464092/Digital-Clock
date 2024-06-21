

let hours;
let seconds;
let minutes;

function setHours() {
    document.querySelector(`.hours`).innerText = hours;
    if (hours >= 0 && hours <= 12) {
        document.querySelector(`#timezone`).innerText = `AM`;
    }
    else {
        document.querySelector(`#timezone`).innerText = `PM`;
    }
}

function setMinutes() {
    document.querySelector(`#minutes`).innerText = minutes;
}

function setSeconds() {
    document.querySelector(`#sec`).innerText = seconds;
}

setInterval(() => {
    hours = new Date().getHours();
    seconds = new Date().getSeconds();
    minutes = new Date().getMinutes();
    setHours();
    setMinutes();
    setSeconds();
}, 1000);