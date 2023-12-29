const globals = require('./globalVariables')
const classes = require('./classes')
const main = require('./main')
const asciiEndings = require('./asciiAndEndings')
const { endPromptList } = require('./prompts')
const { spawn } = require('child_process')

// Allows us to call prompt in place of input()
const prompt = require('prompt-sync')()

// Append Notebook
function appendNotebook() {
    const notebook = new Notebook()
    notebook.readNotebook()
    notebook.appendNotebook()
    return
}

// Append Notebook 
function canWrite(prompt) {
    if (mainCharacterIsVampire.inv.hasItem("Bone Pen")) {
        if (prompt === "Write" || prompt === "Write") {
            appendNotebook()
        } else {

        }
    }
}

// List of options for selection
function options(optionsList, room) {
    console.log(`You are currently in: ${room}`)
    
    optionsList.forEach((value, index) => {
        console.log(`Option ${index + 1}: ${value}`)
    })
    return
}

function displayStats(character) {
    let prompt = "What do you want to do?"
    character.checkStats()
    console.log(prompt)
    return
}

function checkCharacterHealth(character) {
    if (character.health <= 0) {
        asciiEndings.youDied()
        askIfPlayAgain()
    }
}

function askIfPlayAgain() {
    while (true) {
        console.log("Would you like to play again?")
        options(endPromptList, "Death Screen")
        endUserInput = prompt(">>> ")
        if (endUserInput === "1") {
            restartProgram()
        } else if (endUserInput === "2") {
            console.log("Thanks for playing!")
            process.exit()
        } else {
            console.log("Please enter a valid value.")
        }
    }
}

function restartProgram() {
    const child = spawn(process.argv[0], process.argv.slice(1), {
      detached: true,
      stdio: 'inherit',
    })
    child.unref() // Unreferences the child process, allowing the original process to exit
  }

function chanceOfSuccess(percentage) {
    const randomNums = Array.from({ length: 1 }, () => Math.floor(Math.random() * 10) + 1)
    if (percentage === 1) {
        if (1 in randomNums) {
            return "Your attempt fails!"
        } else {
            return "Your attempt succeeds!"
        }
    }
    if (percentage === 2) {
        if ((1 || 2) in randomNums) {
            return "Your attempt fails!"
        } else {
            return "Your attempt succeeds!"
        }
    }
    if (percentage === 3) {
        if ((1 || 2 || 3) in randomNums) {
            return "Your attempt fails!"
        } else {
            return "Your attempt succeeds!"
        }
    }
    if (percentage === 4) {
        console.log("Callan, you turd, that's a stupidly high percentage. Change it. Now.")
    }
}

function quickTimeEvent(timeLimit, healthLost, room) {
    let enemyKilled = false
    quickTimePromptList = ["Drain them dry!",
                        "Knock them unconscious!"]
    while (enemyKilled === false) {
        const start = performance.now()
        let quickUserInput = prompt("Quickly, press Enter! ")
        const end = performance.now()
        const timePassed = end - start
        if (quickUserInput === "" && timePassed < timeLimit) {
            console.log("What would you like to do?")
            options(quickTimePromptList, room)
            quickUserInput1 = prompt(">>> ")
            while (quickUserInput1 === "1") {
                console.log("You feed, throwing the body aside like a wet blanket!")
                main.mainCharacter.addBloodGlut(10)
                enemyKilled = true
                guardKilledCounter += 1
                break
            }
            while (quickUserInput1 === "2") {
                console.log("You throw the body aside, refusing to indulge in your dark desires!")
                enemyKilled = true
                break
            }
        }
        if (quickUserInput === "" && timePassed > timeLimit) {
            main.mainCharacter.loseHealth(healthLost)
            checkCharacterHealth()
        }
    }
}


module.exports = {
    prompt: prompt,
    appendNotebook: appendNotebook,
    canWrite: canWrite,
    options: options,
    displayStats: displayStats,
    askIfPlayAgain: askIfPlayAgain,
    restartProgram: restartProgram,
    checkCharacterHealth: checkCharacterHealth,
    chanceOfSuccess: chanceOfSuccess,
    quickTimeEvent: quickTimeEvent
}

