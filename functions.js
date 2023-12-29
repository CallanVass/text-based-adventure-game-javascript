const globals = require('./globalVariables')
const classes = require('./classes')
const main = require('./main')

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

module.exports = {
    prompt: prompt,
    appendNotebook: appendNotebook,
    canWrite: canWrite,
    options: options,
    displayStats: displayStats
}

