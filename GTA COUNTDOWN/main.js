let daysE1 = document.getElementById("days");
let hoursE1 = document.getElementById("hours");
let minutesE1 = document.getElementById("minutes");
let secondsE1 = document.getElementById("seconds");

function updateCountdown() {
    let now = new Date();
    console.log(now);
    let release = new Date("November 19, 2026");
    console.log(release);

    let diffMillisec = release - now;
    var days = Math.floor(diffMillisec / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diffMillisec % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diffMillisec % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diffMillisec % (1000 * 60)) / 1000);

    daysE1.innerHTML = days + " Days";
    hoursE1.innerHTML = hours + " Hours";
    minutesE1.innerHTML = minutes + " Minutes";
    secondsE1.innerHTML = seconds + " Seconds";
    console.log(days, hours, minutes, seconds);
}

setInterval(updateCountdown, 1000);

