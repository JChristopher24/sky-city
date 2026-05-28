let score = 0

let clicker = document.getElementById('clicker');

let scoreDisplay = document.getElementById('scoreDisplay');

function updateScore(amount) {
    score += amount
    scoreDisplay.innerText = score.toFixed(0) + "$"
}

clicker.addEventListener('click', function () {
    let clickAmt = 1 + (counstructionSpeed ** 1.05) + (constructionCost ** 1.25)
    updateScore(clickAmt)
} )

let upgradeOne = document.getElementById('upgradeOne');
let upgradeOneCount = document.getElementById('upgradeOneCount');
let counstructionSpeed = 0

upgradeOne.addEventListener('click', function () {
    alert("Clicked on Upgrade One")
})

upgradeOne.addEventListener('click', function () {
    if (score >= 100) {
        updateScore(-100)
        counstructionSpeed ++
        upgradeOneCount.innerText = counstructionSpeed + " Construction Speed"
    } else { 
        alert("Get Your Money Up")
    }
})

let upgradeTwo = document.getElementById('upgradeTwo');
let upgradeTwoCount = document.getElementById('upgradeTwoCount');
let constructionCost = 0

upgradeTwo.addEventListener('click', function () {
    alert("Clicked on Upgrade Two")
})

upgradeTwo.addEventListener('click', function () {
    if (score >= 1000) {
        updateScore(-1000)
        constructionCost ++
        upgradeTwoCount.innerText = constructionCost + " Construction Cost"
    } else { 
        alert("Get Your Money Up")
    }
})