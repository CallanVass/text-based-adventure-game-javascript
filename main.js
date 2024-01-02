// Importing modules/packages
const classes = require('./classes')
const variables = require('./globalVariables')
const prompts = require('./prompts')
const functions = require('./functions')
const { blue, green, red, bold, yellow, black } = require('colorette')

// Defining Objects (Characters, Notebook)
const mainCharacter = new classes.Character("Dartha")
const dracula = new classes.Character("Dracula")
const notebook = new classes.Notebook()

// Title and Introduction
functions.draculasCastle()
functions.intro()

// Main Game Loop
while (true) {
    // Cell Logic
    functions.displayStats(mainCharacter)
    functions.options(prompts.cellPromptList11, "Cell")
    userInput = functions.prompt(">>> ")
    functions.canWrite(notebook, mainCharacter)
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
                    functions.sleep(1000)
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
        functions.canWrite(userInput21, mainCharacter)
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
        variables.exitCellRoom = false
        // console.log(mainCharacter.inv.hasItem("Bone Key"))
        if (variables.cellDoorOpen === true) {
            console.log("You step through the opened door")
            functions.sleep(1000)
        } else if (mainCharacter.inv.hasItem("Bone Key") === true) {
            variables.cellDoorOpen = true
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
        // Cell Room/Jail Logic
        while (variables.cellDoorOpen === true && variables.exitCellRoom === false) {
            functions.displayStats(mainCharacter)
            if (variables.armouryEntered === false) {
                functions.options(prompts.cellRoomPromptList11, "Jail")
            } else {
                functions.options(prompts.cellRoomPromptList12, "Jail")
            }
            cellRoomUserInput = functions.prompt(">>> ")
            functions.canWrite(cellRoomUserInput, mainCharacter)
            while (cellRoomUserInput === "1") {
                if (variables.tresuryEntered === false) {
                    variables.tresuryEntered = true
                    console.log("Silently, you enter a well lit room with piles upon piles of golden coins strewn about the place.")
                    functions.sleep(300)
                    console.log("A blind servant sits at a rickety table, counting coins and placing them into bags.")
                    functions.displayStats(mainCharacter)
                    functions.options(prompts.treasuryPromptList11, "Treasury")
                    treasuryRoomUserInput = functions.prompt(">>> ")
                    functions.canWrite(treasuryRoomUserInput, mainCharacter)
                } else {
                    console.log("You're standing in the Treasury.")
                    functions.options(prompts.treasuryPromptList11, "Treasury")
                    treasuryRoomUserInput = functions.prompt(">>> ")
                    functions.canWrite(treasuryRoomUserInput, mainCharacter)
                } 
                // Tresury Logic 
            while (treasuryRoomUserInput === "1") {
                if (variables.servantKilled === false && variables.servantUnconscious === false) {
                    console.log("You sieze the servant, ripping into his neck and drinking deeply. With nobody to stop you,")
                    functions.sleep(300)
                    console.log("you're able to drink your fill.")
                    functions.sleep(300)
                    mainCharacter.addBloodGlut(30)
                    servantKilled = true
                    break
                } else if (variables.servantUnconscious === true) {
                    console.log("A change of heart, eh?")
                    functions.sleep(300)
                    console.log("You pick the man up off the floor and tear into his neck. With nobody to stop you,")
                    functions.sleep(300)
                    console.log("you're able to drink your fill.")
                    functions.sleep(300)
                    mainCharacter.addBloodGlut(30)
                    servantKilled = true
                    break
                } else {
                    console.log("He can't get any dead-er than he is.")
                    functions.sleep(2000)
                    break
                }
            }
            while (treasuryRoomUserInput === "2") {
                console.log("You examine the gold coins")
                functions.displayStats(mainCharacter)
                functions.options(prompts.treasuryPromptList12, "Treasury")
                treasuryRoomUserInput1 = functions.prompt(">>> ")
                functions.canWrite(treasuryRoomUserInput1, mainCharacter)
                while (treasuryfunctions.sleepRoomUserInput1 === "1") {
                    console.log("Your teeth sink straight through the metal. Yep, that's real gold alright.")
                    break
                }
                while (treasuryRoomUserInput1 === "2") {
                    if (mainCharacter.inv.hasItem("Gold Key") === true) {
                        console.log("You've already done that.")
                        functions.sleep(2000)
                        break
                    } else {
                        console.log("You grab a couple gold coins and get to work, compressing them like clay and fashioning yourself a key.")
                        functions.sleep(300)
                        mainCharacter.inv.addItem("Gold Key")
                        break
                    }
                }
                if (treasuryRoomUserInput1 === "3") {
                    break
                }
            }
            while (treasuryRoomUserInput === "3") {
                if (variables.servantUnconscious === false && variables.servantKilled === false) {
                    console.log("With a hard backhand, you clop the servant over the head. He falls to the ground,")
                    functions.sleep(300)
                    console.log("moaning for a moment before going still. His wheezing breaths fill the chamber. How annoying.")
                    variables.servantUnconscious = true
                    break
                } else if (variables.servantKilled === true) {
                    console.log("You've just killed the man. Doesn't get much more 'unconscious' than that, does it?")
                    functions.sleep(2500)
                    break
                } else {
                    console.log("He's already unconscious. Give the man a break.")
                    functions.sleep(2000)
                    break
                }
            }
            while (treasuryRoomUserInput === "4") {
                if (variables.servantUnconscious === false && variables.servantKilled === false) {
                    console.log("You can't do that yet, you'll be heard!")
                    functions.sleep(2000)
                    break
                } else {
                    console.log("You approach the door, which is mostly-obscured by piles of coins.")
                    functions.displayStats(mainCharacter)
                    if (variables.tunnelDoorOpened === true) {
                        functions.options(prompts.treasurypromptList131, "Treasury")
                    } else {
                        functions.options(prompts.treasurypromptList13, "Treasury")
                        treasuryRoomInput2 = functions.prompt(">>> ")
                        functions.canWrite(treasuryRoomInput2)
                    // The line below may need to go below the else statement
                    while (treasuryRoomUserInput2 === "1") {
                        if (variables.digCounter >= 3) {
                            variables.tunnelDoorOpened = true
                            console.log("You stand before a dark tunnel with a yellow glowing light at the end of it.")
                            functions.displayStats(mainCharacter)
                            functions.options(prompts.tunnelPromptList1, "Tunnels")
                            treasuryRoomUserInput3 = functions.prompt(">>> ")
                            functions.canWrite(treasuryRoomUserInput3)
                            while (treasuryRoomUserInput3 === "1") {
                                console.log(yellow("You venture down the tunnel, closing the distance between you and the light."))
                                functions.sleep(300)
                                console.log("As you near, you realise it's not a light, but two lights. You go to turn back, but ")
                                functions.sleep(300)
                                console.log("a voice calls to you, telling you to come closer. You take the chance, and soon find ")
                                functions.sleep(300)
                                console.log("yourself standing before a shadowy figure with two monstrous eyes. The figure hovers ")
                                functions.sleep(300)
                                console.log("before a tunnel.")
                                variables.tunnelTravelledDown = true
                            functions.displayStats(mainCharacter)
                            if (variables.askedRiddle === false) {
                                functions.options(prompts.tunnelPromptList2, "Tunnels")
                            } else {
                                functions.options(prompts.tunnelPromptList21, "Tunnels")
                            }
                            tunnelUserInput2 = functions.prompt(">>> ")
                            functions.canWrite(tunnerUserInput2)
                            // Tunnel Logic
                            while (tunnelUserInput2 === "1") {
                                if (variables.bowedBeforeOminousSpirit === false) {
                                    console.log("'What is this? Get up. Bow again and rip you to shreds,' he says.")
                                    functions.sleep(300)
                                    console.log("How pleasant.")
                                    variables.bowedBeforeOminousSpirit = true
                                    break
                                } else {
                                    console.log("'What, you thought I was joking?'")
                                    functions.sleep(300)
                                    console.log("The Ominous Spirit lashes out.")
                                    mainCharacter.loseHealth(40)
                                    functions.checkCharacterHealth(mainCharacter)
                                    break
                                }
                            }
                            }
                        }
                    }
                        
                    }
                    
                }
            }
            }
        }
}
}