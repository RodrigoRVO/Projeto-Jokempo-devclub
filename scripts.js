
const player = document.querySelector("#human-choice")
const result = document.querySelector(".result")
const humanChoice = document.querySelector("#human-choice")
const machineChoice = document.querySelector("#machine-choice")
let humanScore = document.querySelector("#human-score")
let machineScore = document.querySelector("#machine-score")



const choicePlayer = (value) => {

    game(value, choiceMachine())
}

const choiceMachine = () => {
    const choices = ["rock", "paper", "scissor"]
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

const game = (player, machine) => {
    
    humanChoice.innerHTML = player.toUpperCase()
    machineChoice.innerHTML = machine.toUpperCase()

    if (player === machine) {
        result.innerHTML = "It's a Draw!"
    } else if ((player === "rock" && machine === "scissor") ||
        (player === "scissor" && machine === "paper") ||
        (player === "paper" && machine === "rock")) {

        humanScore.innerHTML++
        result.innerHTML = "You Win!"
    } else {
       
        machineScore.innerHTML++
        result.innerHTML = "You Lose."
    }
}



