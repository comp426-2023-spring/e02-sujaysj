const rpsSet = ["rock","paper","scissors"]
const rpsRules = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
}

export const rps = (data) => {
    var index = Math.floor(Math.random() * 3)
    var opponent_choice = rpsSet[index]

    if (data !== undefined) {
        var input = data
        var player_choice = input.toLowerCase()
        if (!rpsSet.includes(player_choice)) {
            throw new Error("Invalid move supplied")
        }
        
        let output = {}
        output.player = player_choice
        output.opponent = opponent_choice
        if (rpsRules.player_choice == opponent_choice) {
            output.result = "win"
        } else if (rpsRules.opponent_choice == player_choice) {
            output.result = "lose"
        } else {
            output.result = "tie"
        }
        return output
    } else {
        let output = {}
        output.player = opponent_choice
        return output
    }
}

export const rpsls = (data) => {
    var index = Math.floor(Math.random() * 5)
    const rpslsRules = {
        "rock": ["scissors","lizard"],
        "paper": ["rock","spock"],
        "scissors": ["paper","lizard"],
        "lizard": ["paper","spock"],
        "spock": ["scissors","rock"]
    }
    const rpslsSet = ["rock","paper","scissors","lizard","spock"]
    var opponent_choice = rpslsSet[index]

    if (data !== undefined) {
        var input = data
        var player_choice = input.toLowerCase()
        if (!rpslsSet.includes(player_choice)) {
            console.log(player_choice)
            throw new Error("Invalid move supplied")
        }
        
        let output = {}
        output.player = player_choice
        output.opponent = opponent_choice
        const winArray = rpslsRules[player_choice]
        const loseArray = rpslsRules[opponent_choice]
        if (winArray[0] == opponent_choice || winArray[1] == opponent_choice) {
            output.result = "win"
        } else if (loseArray[0] == player_choice || loseArray[1] == opponent_choice) {
            output.result = "lose"
        } else {
            output.result = "tie"
        }
        return output
    } else {
        let output = {}
        output.player = opponent_choice
        return output
    }
}