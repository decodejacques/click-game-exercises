var won = false;
var lost = false;
var mainDiv = document.getElementById('app');
var body = document.getElementById('main');
var btn = document.getElementById('btn');
var start = document.getElementById('start');
var restart = document.getElementById('restart')

btn.style.display = "none"
btn.style.left = (100 + Math.random() * 400) + 'px';
btn.style.top = (100 + Math.random() * 400) + 'px';

restart.style.display="none";

function restartAppear() {
    restart.style.display = "";
}

function potentialLoss() {
    if (won) return;
    lost = true;
    mainDiv.innerText = "YOU LOST!";
    restartAppear();
}

function potentialWin() {
    if (lost) return;
    won = true;
    mainDiv.innerText = "YOU WON!";
    restartAppear();
}

function startRound() {
    mainDiv.innerText = "ROUND STARTED!";
    btn.style.display = "";
    btn.addEventListener('click', () => {
        potentialWin();
    })
    body.addEventListener('click', () => {
        potentialLoss();
    })
    setTimeout(potentialLoss, 1500)
}

start.addEventListener('click', () => {
    start.style.display = "none";
    setTimeout(startRound, Math.random() * 2000 + 1000)
});

restart.addEventListener('click', () => {
    location.reload();
})