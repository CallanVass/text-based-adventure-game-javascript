const Notebook = require('./classes.js')
const input = require('./functions')

const notebook = new Notebook()



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
// console.log(typeof notebook)