const classes = require('./classes')
const variables = require('./globalVariables')
const prompts = require('./prompts')
const functions = require('./functions')
const texts = require('./texts')



const mainCharacter = new classes.Character("Dartha")
const dracula = new classes.Character("Dracula")
// function useNumber() {
//     let prompt = input("Enter your number: ")
//     if (prompt === "1") {
//         console.log("You chose 1!")
//     } else {
//         console.log("You lose!")
//     }
//     console.log(typeof prompt)


// }

// useNumber()
// mainCharacter.inv.addItem("Golden Ticket")
// character.inv.addItem("Silver Ticket")
// notebook.readNotebook()
// notebook.writeNotebook()
// character.checkStats()
// character.inv.getItems()
// console.log(typeof notebook)
// input.displayStats(mainCharacter)
// input.options(prompt.cellRoomPromptList11, "Cell")
// Some operation you want to measure the duration of
// mainCharacter.loseHealth(100)
// functions.quickTimeEvent(mainCharacter, 1000, 20, "Treasury")
// characterHealth = mainCharacter.health
// console.log(characterHealth)
// console.log(mainCharacter)
// functions.checkCharacterHealth(mainCharacter)
// console.log(mainCharacter.classes.displayStats())


texts.draculasCastle()
texts.intro()


module.exports = {
    // mainCharacter: mainCharacter
}