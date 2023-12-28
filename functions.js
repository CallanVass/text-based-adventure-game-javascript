const globals = require('./globalVariables')
const classes = require('./classes')

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
    for (key in optionsList) {
        value = Object.values[key]
        console.log(`Option ${key + 1}: ${value}`)
    }
}

module.exports = {
    prompt: prompt,
    appendNotebook: appendNotebook,
    canWrite: canWrite,
    options: options,
}

