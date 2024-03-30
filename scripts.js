
const player = document.querySelector("#human-choice")
const result = document.querySelector(".result")
const humanChoice = document.querySelector("#human-choice")
const machineChoice = document.querySelector("#machine-choice")
let humanScore = document.querySelector("#human-score")
let machineScore = document.querySelector("#machine-score")


//  ENUM
const GAME_OPTIONS = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSOR: "scissor"
}


const choicePlayer = (value) => {

    game(value, choiceMachine())
}

const choiceMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSOR]
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

const game = (player, machine) => {
    
    humanChoice.innerHTML = player.toUpperCase()
    machineChoice.innerHTML = machine.toUpperCase()

    if (player === machine) {
        result.innerHTML = "It's a Draw!"
    } else if ((player === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSOR) ||
        (player === GAME_OPTIONS.SCISSOR && machine === GAME_OPTIONS.PAPER) ||
        (player === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK)) {

        humanScore.innerHTML++
        result.innerHTML = "You Win!"
    } else {
       
        machineScore.innerHTML++
        result.innerHTML = "You Lose."
    }
}



