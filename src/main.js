let score = 0

let clicker = document.getElementById('clicker');

let scoreDisplay = document.getElementById('scoreDisplay');

clicker.addEventListener('click', function () {
    score++
    scoreDisplay.innerText = score
} )
