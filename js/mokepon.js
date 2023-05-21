let playerAttack
let enemyAttack

function startGame() {
    let buttonSelectPlayerPet = document.getElementById('button-select-pet')
    buttonSelectPlayerPet.addEventListener('click', selectPlayerPet)
    
    let fireButton = document.getElementById('button-fire')
    fireButton.addEventListener('click', fireAttack)
    let waterButton = document.getElementById('button-water')
    waterButton.addEventListener('click', waterAttack)
    let earthButton = document.getElementById('button-earth')
    earthButton.addEventListener('click', earthAttack)
}

function selectPlayerPet() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spamPlayerPet = document.getElementById('player-pet')
    
    if (inputHipodoge.checked) {
        spamPlayerPet.innerHTML = "Hipodoge"
    }
    else if (inputCapipepo.checked) {
        spamPlayerPet.innerHTML = "Capipepo"
    }
    else if (inputRatigueya.checked) {
        spamPlayerPet.innerHTML = "Ratigueya"
    } else {
        alert("You must select a pet")
    }

    selectEnemyPet()
}

function selectEnemyPet() {
    let randomPet = randomness(1, 3)
    let spamEnemyPet = document.getElementById('enemy-pet')

    if (randomPet == 1) {
        spamEnemyPet.innerHTML = "Hipodogue"
    }
    else if (randomPet == 2) {
        spamEnemyPet.innerHTML = "Capipepo"
    } else {
        spamEnemyPet.innerHTML = "Ratigueya"
    }
}

function fireAttack() {
    playerAttack = "FIRE 🔥"
    selectEnemyAttack()
}

function waterAttack() {
    playerAttack = "WATER 💧"
    selectEnemyAttack()
}

function earthAttack() {
    playerAttack = "EARTH 🌱"
    selectEnemyAttack()
}

function selectEnemyAttack() {
    let randomAttack = randomness(1, 3)
    
    if (randomAttack == 1) {
        enemyAttack = "FIRE 🔥"
    }
    else if (randomAttack == 2) {
        enemyAttack = "WATER 💧"
    } else {
        enemyAttack = "EARTH 🌱"
    }
    combat()
}

function combat(){
    if (playerAttack == enemyAttack){
        combatResult = "TIE 😐"
    }
    else if ((playerAttack == "FIRE 🔥" && enemyAttack == "EARTH 🌱") || (playerAttack == "WATER 💧" && enemyAttack == "FIRE 🔥") || (playerAttack == "EARTH 🌱" && enemyAttack == "WATER 💧")) {
        combatResult = "YOU WIN 🥳"
    } else {
        combatResult = "YOU LOSE 😫"
    }
    createMessage(combatResult)
}

function createMessage(combatResult) {
    let messagesSection = document.getElementById("messages")
    let paragraph = document.createElement('p')
    paragraph.innerHTML = "Your pet attacked with " + playerAttack + " the enemy's pet attacked with " + enemyAttack + " - " + combatResult
    
    messagesSection.appendChild(paragraph)
}

function randomness(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', startGame)