function startGame() {
    let buttonSelectPlayerPet = document.getElementById('button-select-pet')
    buttonSelectPlayerPet.addEventListener('click', selectPlayerPet)
}

function selectPlayerPet() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let message = "You must select a pet"

    if (inputHipodoge.checked) {
        message = 'You selected Hipodoge'
    }
    else if (inputCapipepo.checked) {
        message = 'You selected Capipepo'
    }
    else if (inputRatigueya.checked) {
        message = 'You selected Ratigueya'
    }
    alert(message)
}

window.addEventListener('load', startGame)