let computerPlay = () => {
    let numero = Math.floor(Math.random() * 100)

    if (numero >= 1 && numero < 33) {
        return 'rock'
    } else if (numero >= 33 && numero < 66) {
        return 'paper'
    } else if (numero >= 66 && numero <= 99) {
        return 'scissors'
    }


}

let game = (playerSelect) => {

    let player = playerSelect.toLowerCase()
    let computadora = computerPlay()

    console.log( `you choose ${player}, and computer, ${computadora}`)

    if(player == computadora){
        return 'draw! play again'
    }

    if (player == 'rock' && computadora == 'scissors') {
        return 'you won'
    } else if (player == 'rock' && computadora == 'paper') {
        return `you lose! ${computadora} beat ${player}`
    }

    if (player == 'paper' && computadora == 'rock') {
        return 'you won'
    } else if (player == 'paper' && computadora == 'scissors') {
        return `you lose! ${computadora} beat ${player}`
    }

    if (player == 'scissors' && computadora == 'paper') {
        return 'you won'
    } else if (player == 'scissors' && computadora == 'rock') {
        return `you lose! ${computadora} beat ${player}`
    }
}
