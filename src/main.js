import { Howl } from "howler";
import backgroundOneSrc from "./assets/mythica.mp3";
import coinEffectSrc from "./assets/coinsplash.ogg";
import purchaseEffectSrc from "./assets/purchase.wav";

const backgroundOne = new Howl({
    src: {backgroundOneSrc}
})

const coinEffect = new Howl({
    src: {coinEffectSrc}
})

const purchaseEffect = new Howl({
    src: {purchaseEffectSrc}
})

let score = 0

let clicker = document.getElementById('clicker');

let scoreDisplay = document.getElementById('scoreDisplay');

const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
    notation: 'compact',
    compactDisplay: 'short'
})

function updateScore(amount) {
    score += amount
    scoreDisplay.innerText = "$" + formatter.format(score)
}

clicker.addEventListener('click', function () {
    let clickAmt = 1 + (counstructionSpeed ** 1.05) + (constructionCost ** 20.05)
    updateScore(clickAmt)
    
} )

let upgradeOne = document.getElementById('upgradeOne');
let upgradeOneCount = document.getElementById('upgradeOneCount');
let counstructionSpeed = 0

upgradeOne.addEventListener('click', function () {
    if (score >= 10) {
        updateScore(-10)
        counstructionSpeed ++
        upgradeOneCount.innerText = counstructionSpeed + " Construction Speed"
        purchaseEffect.play()
    } else { 
        alert("Get Your Money Up")
    }
})

let upgradeTwo = document.getElementById('upgradeTwo');
let upgradeTwoCount = document.getElementById('upgradeTwoCount');
let constructionCost = 0

upgradeTwo.addEventListener('click', function () {
    
})

upgradeTwo.addEventListener('click', function () {
    if (score >= 100) {
        updateScore(-100)
        constructionCost ++
        upgradeTwoCount.innerText = constructionCost + " Construction Cost"
        purchaseEffect.play()
    } else { 
        alert("Get Your Money Up")
    }
})

function gameLoop() {
    let clickAmt = 1 + (counstructionSpeed ** 1.05) + (constructionCost ** 20.05)
    updateScore(clickAmt)
}

setInterval(gameLoop, 100)