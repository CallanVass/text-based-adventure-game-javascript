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
                    variables.servantKilled = true
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
                    console.log("He can't get any dead-er than he already is.")
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
                while (treasuryRoomUserInput1 === "1") {
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
                        functions.options(prompts.treasuryPromptList131, "Treasury")
                    } else {
                        functions.options(prompts.treasuryPromptList13, "Treasury")
                    }
                    // The line below may need to go below the else statement
                    treasuryRoomUserInput2 = functions.prompt(">>> ")
                    functions.canWrite(treasuryRoomUserInput2, mainCharacter)
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
                            while (tunnelUserInput2 === "2") {
                                if (mainCharacter.bloodGlut >= 50) {
                                    console.log("'Look at you - all gorged on blood. And now you want my help? I don't think so.'")
                                    break
                                }
                                if (variables.askedRiddle === false) {
                                    console.log("'Hmm, interesting proposition,' says the Ominous Spirit. 'I'll tell you what - ")
                                    functions.sleep(300)
                                    console.log("if you can answer my riddle, I'll let you go. Here it is: ")
                                    functions.sleep(300)
                                    console.log(ct.convert("<>yellow 'I'm the timeless enigma, lurking somwhere between future and past.<>"))
                                    functions.sleep(300)
                                    console.log(ct.convert("<>yellow To me, a sharpened pencil is closer than an unsharpened one.<>"))
                                    functions.sleep(300)
                                    console.log(ct.convert("<>yellow I was before, and I will be again.'<>"))
                                    functions.sleep(300)
                                    console.log("What am I?'")
                                    variables.askedRiddle = true
                                } else {
                                    console.log("'Back to make another guess? Come on then, let's hear it.'")
                                    functions.sleep(300)
                                    console.log("'Here's the riddle again, in case you've forgotten. You probably have:'")
                                    functions.sleep(300)
                                    console.log(ct.convert("<>yellow 'I'm the timeless enigma, lurking somwhere between future and past.<>"))
                                    functions.sleep(300)
                                    console.log(ct.convert("<>yellow To me, a sharpened pencil is closer than an unsharpened one.<>"))
                                    functions.sleep(300)
                                    console.log(ct.convert("<>yellow I was before, and I will be again.'<>"))
                                    functions.sleep(300)
                                    console.log("What am I?'")
                                    functions.sleep(7000)
                                }
                                tunnelUserInput3 = functions.prompt(">>> ")
                                functions.canWrite(tunnelUserInput3)
                                if (tunnelUserInput3 === "Death" || tunnelUserInput3 === "death") {
                                    functions.ominousSpiritRiddleEnding()
                                } else {
                                    console.log("Ha. Nice try, but you'll have to try harder.")
                                    functions.sleep(2000)
                                    break
                                }
                            }
                            while (tunnelUserInput2 === "3") {
                                if (variables.ominousSpiritStareCounter > 19) {
                                    functions.ominousSpiritStareEnding()
                                } else if (variables.ominousSpiritStareCounter < 5) {
                                    console.log("The Ominous Spirit stares straight back at you, piercing your very soul. Something ")
                                    functions.sleep(300)
                                    console.log("inside you goes cold. You shiver.")
                                    functions.sleep(2500)
                                    variables.ominousSpiritStareCounter += 1
                                    break
                                } else if (variables.ominousSpiritStareCounter >= 5 && variables.ominousSpiritStareCounter < 10) {
                                    console.log("'What?' the Ominous Spirit asks. 'Why are you staring?'")
                                    functions.sleep(300)
                                    console.log("You smile.")
                                    functions.sleep(2500)
                                    variables.ominousSpiritStareCounter += 1
                                } else if (variables.ominousSpiritStareCounter >= 10 && variables.ominousSpiritStareCounter < 15) {
                                    console.log("The Spirit appears to be losing his composition. You keep smiling.")
                                    functions.sleep(2500)
                                    ominous_spirit_stare_counter += 1
                                    break
                                } else if (variables.ominousSpiritStareCounter >= 15 && variables.ominousSpiritStareCounter < 19) {
                                    console.log("He begins to sweat. Your smile widens.")
                                    functions.sleep(2.5)
                                    variables.ominousSpiritStareCounter += 1
                                    break
                                }
                            }
                                if (tunnelUserInput2 === "4") {
                                    break
                            }
                            if (treasuryRoomUserInput3 === "2") {
                                break
                            }
                            }
                        }
                    functions.chanceOfSuccess(2)
                    if (variables.tunnelDoorOpened === false) {
                        if (chanceOfSuccess === "Your attempt fails!") {
                            variables.digCounter += 1
                            console.log("A guard stumbles into the room, sword half unsheathed, drawn in by the tinkling of coins.")
                            functions.quickTimeEvent(mainCharacter, 4000, 20, "Treasury")
                            variables.treasuryGuardDead = true
                        } else {
                        console.log("You dig some of the coins away without being heard!")
                        functions.sleep(2000)
                        variables.digCounter += 1
                        break
                    }
                    } else {
                        break
                    }  
                    }
                    if (treasuryRoomUserInput2 === "2") {
                        console.log("It reads: 'No bloodbag is to enter here until I've dealt with its occupant.'")
                        console.log("Signed: Dracula")
                        functions.sleep(1000)
                    }
                    if (treasuryRoomUserInput2 === "3") {
                        break
                    }
                }
            }
            if (treasuryRoomUserInput === "5") {
                break
            } 
            }
            while (cellRoomUserInput === "2") {
                if (variables.prisonersFree === true) {
                    console.log("You've already done that.")
                    functions.sleep(1000)
                    break
                } else if (mainCharacter.inv.hasItem("Master Key")) {
                    console.log("With Dracula's key, you free the prisoners!")
                    functions.sleep(1000)
                    variables.prisonersFree = true
                } else if (mainCharacter.inv.hasItem("Master Key")) {
                    console.log("You're resourceful, aren't you?")
                    functions.sleep(300)
                    console.log("You go back and forth, forging bone-shaped keys and smashing them into the locks one by one.")
                    functions.sleep(300)
                    console.log("The prisoners have been freed! They huddle around the main door, too scared to do anything else.")
                    variables.prisonersFree = true
                    break
                } else if (mainCharacter.bloodglut < 50) {
                    console.log("You try and bend the bars, but they won't give. If only you were stronger...")
                    functions.sleep(2500)
                    break
                } else if (variables.prisonersFree === true) {
                    console.log("They're already free.")
                    functions.sleep(1500)
                } else {
                    console.log("Strength swells within you. With your newfound might, you snap the bars off their hinges. ")
                    functions.sleep(300)
                    console.log("The prisoners have been freed!")
                    functions.sleep(300)
                    variables.prisonersFree = true
                    break  
                }
            }
            // Armoury Logic
            while (cellRoomUserInput === "3") {
                if (mainCharacter.inv.hasItem("Gold Key")) {
                    if (variables.armouryEntered === false) {
                        console.log("You open the Armoury door to find 3 guards, all with plate armour and weapons. They drop their drinks and draw their swords.")
                        functions.displayStats(mainCharacter)
                        functions.options(prompts.armouryPromptList1, "Armoury")
                        armouryUserInput1 = functions.prompt(">>> ")
                        functions.canWrite(armouryUserInput1, mainCharacter)
                        while (armouryUserInput1 === "1") {
                            console.log("You lunge at the closest one, who raises his sword in defense. You dodge.")
                            functions.sleep(3000)
                            quickTimeEvent(mainCharacter, 2000, 20, "Armoury")
                            console.log("Done with the first one, the other two charge you.")
                            functions.displayStats(mainCharacter)
                            functions.options(prompts.armouryPromptList2, "Armoury")
                            armouryUserInput2 = functions.prompt(">>> ")
                            functions.canWrite(armouryUserInput2, mainCharacter)
                            if (armouryUserInput2 === "1") {
                                console.log("You edge backwards, forcing them to face you one at a time.")
                                quickTimeEvent(mainCharacter, 1500, 20, "Armoury")
                                functions.display_stats(mainCharacter)
                                console.log("Done with the first, the other looks hesitant to approach you. You take the fight to him.")
                                functions.sleep(3000)
                                quickTimeEvent(mainCharacter, 1500, 20, "Armoury")
                                functions.display_stats(mainCharacter)
                                variables.armouryEntered = true
                                break
                            } else if (armouryUserInput2 === "2") {
                                console.log("Blindly, you rush both of them and get attacked twice in a short period.")
                                functions.sleep(2000)
                                quickTimeEvent(mainCharacter, 1000, 20, "Armoury")
                                quickTimeEvent(mainCharacter, 1000, 20, "Armoury")
                                variables.armouryEntered = true
                                break
                            }
                        }
                    }
                } else {
                    console.log("You stand in the armoury, surveying the carnage you've caused.")
                    functions.displayStats(mainCharacter)
                    functions.options(armouryPromptList3, armoury)
                    armouryUserInput3 = functions.prompt(">>> ")
                    functions.canWrite(armouryUserInput3, mainCharacter)
                    while (armouryUserInput3 === "1") {
                        if (variables.draculaChambersEntered === false) {
                            print("With a looming silence, you press forwards, inching the doors to Dracula's chamber open.")
                            time.sleep(0.3)
                            print("It's daytime, so you expect a sleeping figure hanging from the ceiling. You've never")
                            time.sleep(0.3)
                            print("been more incorrect.")
                            time.sleep(0.3)
                            print("Resting on a velvet throne is Dracula in a full set of engraved metal armour. In the")
                            time.sleep(0.3)
                            print("engravings you see a million deaths. A million lifetimes spent drinking blood. Dracula smiles,")
                            time.sleep(0.3)
                            print("her spectacularly white teeth sparkling between her frame of golden hair. She stands from her")
                            time.sleep(0.3)
                            print("throne and descends a couple steps.")
                            time.sleep(0.3)
                            print(ct.convert("<>magenta 'I can only presume you're here to kill me,'<> she says, her smirk growing wider."))
                            display_stats()
                            dracula_chambers_entered = True
                        } else {
                            functions.displayStats(mainCharacter)
                        }
                        if (variables.draculaKilled === true) {
                            functions.options(prompts.draculaPromptList3, "Dracula's Chambers")
                            draculaChambersUserInput5 = functions.prompt(">>> ")
                            functions.canWrite(armouryUserInput3, mainCharacter)
                            if (draculaChambersUserInput5 === "1") {
                                break
                            }
                        }
                        if (variables.servantKilled === true && variables.guardKilledCounter >= 1) {
                            functions.options(prompts.draculaPromptList1, "Dracula's Chambers")
                        } else {
                            functions.options(prompts.draculaPromptList2, "Dracula's Chambers")
                            
                        }
                        draculaChambersUserInput3 = functions.prompt(">>> ")
                        functions.canWrite(draculaChambersUserInput3, mainCharacter)
                        if (draculaChambersUserInput3 === "1") {
                            print(ct.convert("<>magenta 'Do I really?'<> she asks. <>magenta 'People kill animals all the time. What's the difference?'<>"))
                            time.sleep(0.3)
                            print("'People aren't animals, and they aren't slaves either. They want to live,' you")
                            time.sleep(0.3)
                            print("remind her. Much good it will do.")
                            time.sleep(0.3)
                            print(ct.convert("Dracula's eyes take on a faint glow. <>magenta 'I've never seen an animal that wanted to die.<>"))
                            time.sleep(0.3)
                            print(ct.convert("<>magenta Yet here you are,'<> she whispers, breaking into a tinkling laugh so violent it rattles"))
                            time.sleep(0.3)
                            print("the plates of her armour.")
                        }

                    }
                }
            }
        }
}
    }
