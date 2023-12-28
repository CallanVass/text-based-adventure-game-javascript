const classes = require('./classes')
const variables = require('./globalVariables')
const input = require('./functions')

const notebook = new classes.Notebook()
const character = new classes.Character("Dartha")



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
// callan = prompt("What's your name?")

notebook.readNotebook()
character.checkStats()
// console.log(typeof notebook)