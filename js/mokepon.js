function startGame() {
    let buttonSelectPlayerPet = document.getElementById('button-select-pet')
    buttonSelectPlayerPet.addEventListener('click', selectPlayerPet)
}

function selectPlayerPet() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spamPlayerPet = document.getElementById('player-pet')

    if (inputHipodoge.checked) {
        spamPlayerPet.innerHTML = 'Hipodoge'
    }
    else if (inputCapipepo.checked) {
        spamPlayerPet.innerHTML = 'Capipepo'
    }
    else if (inputRatigueya.checked) {
        spamPlayerPet.innerHTML = 'Ratigueya'
    }else{
        alert("You must select a pet")
    }
}

window.addEventListener('load', startGame)