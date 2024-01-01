const classes = require('./classes')
const variables = require('./globalVariables')
const prompts = require('./prompts')
const functions = require('./functions')
const { blue, green, red, bold, yellow, black } = require('colorette')

const mainCharacter = new classes.Character("Dartha")
const dracula = new classes.Character("Dracula")
const notebook = new classes.Notebook()

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


functions.draculasCastle()
functions.intro()

while (true) {
    // Cell Logic
    functions.displayStats(mainCharacter)
    functions.options(prompts.cellPromptList11, "Cell")
    userInput = functions.prompt(">>> ")
    functions.canWrite(userInput, mainCharacter)
    // Cell Option 1
    while (userInput === "1") {
        if (mainCharacter.bloodglut < 20) {
            console.log("You walk over to the pile of bones.")
            functions.sleep(300)
            console.log("Poor chap, you think. Lazily, your eyes drift over to the cell door, then back to the bones.")
            functions.sleep(300)
            console.log("Hmmm... If only you were stronger...")
            break
        } else if (mainCharacter.bloodglut >= 20) {
            console.log("You examine the pile of bones")
            functions.options(prompts.cellPromptList12, "Cell")
            userInput12 = functions.prompt(">>> ")
            functions.canWrite(userInput12, mainCharacter)
            while (userInput12 === "1") {
                if (mainCharacter.inv.hasItem("Bone Key")) {
                    console.log("You've already done that.")
                    functions.sleep(1000)
                    break
                } else {
                    console.log("It takes some doing, but you manage to snap it in half.")
                    mainCharacter.inv.addItem("Bone Key")
                    functions.sleep(2000)
                    break
                }
            }
            while (userInput12 === "2") {
                if (mainCharacter.inv.hasItem("Bone Pen")) {
                    console.log("You've already done that.")
                    functions.sleep(1000)
                    break
                } else {
                    console.log("Time drags on, but eventually you make a pen for... writing.")
                    functions.sleep(300)
                    console.log("HINT: Type 'Write' into the terminal to carve text into your arm.")
                    functions.sleep(300)
                    mainCharacter.inv.addItem("Bone Pen")
                    break 
                }
            }
            if (userInput12 === "3") {
                console.log("You go back")
                functions.sleep(500)
                break
            }
        }
    }
    // Cell Option 2
    while (userInput === "2") {
        console.log("You check the basin. The blood is as much mud as it is blood. You revolt.")
        functions.options(prompts.cellPromptList21, "Cell")
        userInput21 = functions.prompt(">>> ")
        functions.canWrite(prompts.cellPromptList21, mainCharacter)
        while (userInput21 === "1") {
            if (mainCharacter.bloodglut >= 20) {
                console.log("You've already done that.")
                functions.sleep(2000)
                break
            } else {
                mainCharacter.addBloodGlut(20)
                break
            }
        }
        while (userInput21 === "2") {
            console.log("You kneel down and look under the sink to see someone has engraved some text.")
            functions.sleep(300)
            console.log(yellow("'Something always yearns. Don't ever accept this hell.'"))
            break
        }
    
        while (userInput21 === "3") {
        functions.selfBludgeonEnding()
            }
        if (userInput21 === "4") {
        break
            }
    }
    // Cell Option 3
    while (userInput === "3") {
        console.log("'Help me', calls one prisoner. 'Please', calls another. They're Dracula's play things.")
        functions.sleep(300)
        console.log("Treated like nothing but chaffe. Your will cements. You must escape.")
        break
    }
    // Cell Option 4
    while (userInput === "4") {
        console.log("You reach your arms up, looking closely at the bite marks made by Dracula. You think of")
        functions.sleep(300)
        console.log("the countless times you've been fed on and you seethe...")
        break
    }
    // Cell Option 5
    while (userInput === "5") {
        let exitCellRoom = false
        if (variables.cellDoorOpen === true) {
            console.log("You step through the opened cell door.")
            functions.sleep(1000)
        } else if (mainCharacter.inv.hasItem("Bone Key")) {
            cellDoorOpen = true
            console.log("You jam the bone key into the cell door keyhole, breaking it but snapping the lock open at ")
            functions.sleep(300)
            console.log("the same time. The door slides wide open and you step through into a hallway.")
            functions.sleep(300)
            mainCharacter.inv.removeItem("Bone Key")
            functions.sleep(300)
            console.log("The prisoners moan and wail at you to let them out. To the left of you is a door labelled ")
            functions.sleep(300)
            console.log("'Treasury'. You can hear coins clinking behind it, but no speaking.")
            functions.sleep(300)
            console.log("To your right is a door named 'Armoury'. Behind it, Dracula's guards laugh and joust.")
            functions.sleep(300)
            console.log("Before you is a wide, closed door that appears to lead outside. Something is carved into it.")
        } else {
            if (variables.cellDoorOpen === true) {
                console.log("You step through the cell door without needing a key.")
                functions.sleep(2000)
            } else {
                console.log("It's not particularly well built. If only we had some way to open it...")
                functions.sleep(2000)
            break
            }
        }
    }


}


module.exports = {
    // mainCharacter: mainCharacter
}