class Game {

    constructor() {
      this.playerScore = 0
      this.computerScore = 0
      this.options = ["rock", "paper", "scissors"]
  
      document.getElementById("player-score").innerHTML = `Player: ${this.playerScore}`
      document.getElementById("computer-score").innerHTML = `Computer: ${this.computerScore}`
    }
  
    playRound(playerInput) {
      let computerInput = this.options[Math.floor(Math.random()*3)]
  
      if (playerInput == computerInput) {
        this.displayScores(playerInput, computerInput);
      } else if (playerInput == "rock") {
        if (computerInput == "paper") {
          this.addToScore("loss")
        } else {
          this.addToScore("win")
        }
      } else if (playerInput == "paper") {
        if (computerInput == "rock") {
          this.addToScore("win")
        } else {
          this.addToScore("loss")
        }
      } else if (playerInput == "scissors") {
        if (computerInput == "rock") {
          this.addToScore("loss") 
        } else {
          this.addToScore("win")
        }
      }
  
      this.displayScores(playerInput, computerInput);
    }
  
    displayScores(playerInput, computerInput) {
      document.getElementById("player-input").innerHTML = `Player played ${playerInput}.`
      document.getElementById("computer-input").innerHTML = `Computer played ${computerInput}.`
      document.getElementById("player-score").innerHTML = `Player: ${this.playerScore}.`
      document.getElementById("computer-score").innerHTML = `Computer: ${this.computerScore}.`
    }
  
    addToScore(tally) {
      tally == "win" ? this.playerScore++ : this.computerScore++
    }
  }
  
  const game = new Game();