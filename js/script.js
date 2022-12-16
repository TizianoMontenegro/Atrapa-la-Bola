let player = document.getElementById("player");
let scorePoints = document.getElementById("points");
let points = 0;
let necessary = 40;
let time = prompt("escoje un número para el timer (recomendado: de 20 a 60)",40);

player.addEventListener("mouseover", addPoints);
player.addEventListener("click", addPoints);

function addPoints() {
    points++;
    scorePoints.innerHTML = `<span>Puntos | <b>${points}/${necessary}</b></span> <span>Tiempo | <b>${time}</b></span>`;
    let numX = Math.round(Math.random()*460);
    let numY = Math.round(Math.random()*460);
    player.style.transform = `translateX(${numX}px) translateY(${numY}px)`
    if(points > necessary) {
        alert("Ganaste!!!");
        points = 0;
        time = prompt("escoje un número para el timer (recomendado: de 20 a 60)",40);
    }
}

function subtractTime() {
    time--;
    scorePoints.innerHTML = `<span>Puntos | <b>${points}/${necessary}</b></span> <span>Tiempo | <b>${time}</b></span>`;
    if(time < 0) {
        alert("perdiste");
        points = 0;
        time = prompt("escoje un número para el timer (recomendado: de 20 a 60)",40);
    }
}
setInterval(subtractTime, 1000)