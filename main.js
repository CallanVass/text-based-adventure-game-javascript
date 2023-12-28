const classes = require('./classes')
const variables = require('./globalVariables')
const prompt = require('./prompts')
const input = require('./functions')


const mainCharacter = new classes.Character("Dartha")



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

// character.inv.addItem("Golden Ticket")
// character.inv.addItem("Silver Ticket")

// notebook.readNotebook()
// notebook.writeNotebook()

// character.checkStats()
// character.inv.getItems()
// console.log(typeof notebook)


input.options(prompt.cellRoomPromptList11, "Cell")