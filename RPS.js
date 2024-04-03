const shootBtn = document.getElementById("shootBtn")
const rock = "/Images/r.png"
const paper = "/Images/p.png"
const scissors = "/Images/s.png"

shootBtn.addEventListener("click", ()=>{

    var choice = document.getElementById("rpsSel").value
    var playerIcon = document.getElementById("playerIco")
    var oppIcon = document.getElementById("oppIco")

    // Check if a valid option is selected
    if (choice !== "Rock" && choice !== "Paper" && choice !== "Scissors") {
        alert("Error: Please choose rock, paper, or scissors.")
        return; // Stop further execution
    }

    

        switch(choice) {
            case "Rock": 
                playerIcon.src = rock
                break
            case "Paper":
                playerIcon.src = paper
                break
            case "Scissors":
                playerIcon.src = scissors
                break
        }
    
        //Randomly generated choice for opponent
        var cpuChoice = ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)]
    
        console.log(cpuChoice)
    
        switch(cpuChoice) {
            case "Rock":
                oppIcon.src = rock
                break
            case "Paper":
                oppIcon.src = paper
                break
            case "Scissors":
                oppIcon.src = scissors
                break
            default:
                alert("An error has occurred")
                break
        }

        setTimeout(() => {

        var winner

        if(choice === cpuChoice) {
            winner = "It's a tie!"
        } else if (
            (choice === "Rock" && cpuChoice === "Scissors") ||
            (choice === "Paper" && cpuChoice === "Rock") ||
            (choice === "Scissors" && cpuChoice === "Paper")
        ){
            winner = "You Win!"
        } else {
            winner = "Opponent Wins!"
        }

        alert(winner)

    }, 1000)
    
})