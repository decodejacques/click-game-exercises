var lost = false;
var mainDiv = document.getElementById('app');
var body = document.getElementById('main');
body.addEventListener('click', () => {
    mainDiv.innerText = "YOU WON!";
    won = true
})
function checkWon() {
    if (lost) { mainDiv.innerText = "YOU LOST!"; }

}
setTimeout(checkWon, 1000);