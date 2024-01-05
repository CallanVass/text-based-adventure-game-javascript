const globals = require('./globalVariables')
const prompts = require('./prompts')
const { blue, green, red, bold, yellow, black } = require('colorette')
const { spawn, exec } = require('child_process')

// Allows us to call prompt in place of input()
const prompt = require('prompt-sync')()
const restartScriptPath = "./restart.sh"

exec(`sh ${restartScriptPath}`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing the script: ${error}`)
        return
    }

    console.log(`Script output: ${stdout}`)
    console.error(`Script errors: ${stderr}`)
})

// Sleep function 
function sleep(ms) {
    const end = Date.now() + ms
    while (Date.now() < end) {
    }
  }

// Append Notebook
function appendNotebook(notebook) {
    notebook.readNotebook()
    notebook.appendNotebook()
    return
}

// Append Notebook 
function canWrite(prompt, character) {
    if (character.inv.hasItem("Bone Pen") === true) {
        if (prompt === "Write" || prompt === "write") {
            appendNotebook()
        } else {
            // Left Empty For No Result
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

function askIfPlayAgain() {
    while (true) {
        youDied()
        console.log("Would you like to play again?")
        options(prompts.endPromptList, "Death Screen")
        endUserInput = prompt(">>> ")
        if (endUserInput === "1") {
            console.log("Oh no! Looks like Node.js's asynchronous nature doesn't provide a way to restart!")
            console.log("Please restart manually! :)")
            process.exit()
        } else if (endUserInput === "2") {
            console.log("Thanks for playing!")
            process.exit()
        } else {
            console.log("Please enter a valid value.")
        }
    }
}

function askIfPlayAgainNotDead() {
    while (true) {
        console.log("Would you like to play again?")
        options(prompts.endPromptList, "A state of indecision.")
        endUserInput = prompt(">>> ")
        if (endUserInput === "1") {
            console.log("Oh no! Looks like Node.js's asynchronous nature doesn't provide a way to restart!")
            console.log("Please restart manually! :)")
            exec()
        } else if (endUserInput === "2") {
            console.log("Thanks for playing!")
            process.exit()
        } else {
            console.log("Please enter a valid value.")
        }
    }
}

function displayStats(character) {
    let prompt = "What do you want to do?"
    character.checkStats()
    console.log(prompt)
    return
}

function checkCharacterHealth(character) {
    health = character.health
    if (health <= 0) {
        askIfPlayAgain()
    }
}


function restartProgram() {
    const child = spawn(process.argv[0], process.argv.slice(1), {
        detached: true,
        stdio: 'ignore',
    })
    child.unref() // Unreferences the child process, allowing the original process to exit
}


function chanceOfSuccess(percentage) {
    if (percentage < 1 || percentage > 3) {
        console.log("Callan, you turd, that's a stupidly high percentage. Change it. Now.")
        return
    }

    const randomNum = Math.floor(Math.random() * 10) + 1

    if (randomNum <= percentage) {
        return "Your attempt succeeds!"
    } else {
        return "Your attempt fails!"
    }
}

function quickTimeEvent(character, timeLimit, healthLost, room) {
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
                character.addBloodGlut(10)
                enemyKilled = true
                globals.guardKilledCounter += 1
                globals.treasuryGuardDead = true
                break
            }
            while (quickUserInput1 === "2") {
                console.log("You throw the body aside, refusing to indulge in your dark desires!")
                enemyKilled = true
                break
            }
        }
        if (quickUserInput === "" && timePassed > timeLimit) {
            character.loseHealth(healthLost)
            checkCharacterHealth(character)
        }
    }
}

function fightWithDracula(character, timeLimit, healthLost, enemy) {
    const start = performance.now()
    quickUserInput = prompt("Quickly press Enter! ")
    const end = performance.now()
    let timePassed = end = start
    attackCounter++
    while (attackCounter === 1) {
        if (quickUserInput === "" && timePassed < timeLimit) {
            console.log("You dodge her feral claws and throw back an attack of your own, catching her unaware")
            enemy.draculaLoseHealth(20)
            break
        } else {
            console.log("It slashes you across the chest, drawing thick blood to the surface.")
            character.lostHealth(healthLost)
            checkCharacterHealth(character)
            break
        }
    }
    while (attackCounter === 2) {
        if (quickUserInput === "" && timePassed < timeLimit) {
            console.log("You catch the attack, slashing her across the throat with claws of your own.")
            enemy.draculaLoseHealth(20)
            break
        } else {
            console.log("The attack slams you into a wall. You bounce back, coughing up blood.")
            character.lostHealth(healthLost)
            checkCharacterHealth(character)
            break
        }
    }
    while (attackCounter === 3) {
        if (quickUserInput === "" && timePassed < timeLimit) {
            console.log("She dives left, but you catch her attack just before it lands, rerouting the momentum.")
            enemy.draculaLoseHealth(20)
            break
        } else {
            console.log("Her attack circumnavigates your defence, piercing your ribs and puncturing a lung.")
            character.lostHealth(healthLost)
            checkCharacterHealth(character)
            break
        }
    }
    while (attackCounter === 4) {
        if (quickUserInput === "" && timePassed < timeLimit) {
            console.log("You're too quick, and catch her hand just before it smashes into your jaw.")
            enemy.draculaLoseHealth(20)
            break
        } else {
            console.log("Her hand cracks you in the jaw. You turn back, dazed.")
            character.lostHealth(healthLost)
            checkCharacterHealth(character)
            break
        }
    }
    while (attackCounter === 5) {
        if (quickUserInput === "" && timePassed < timeLimit) {
            console.log("You're too quick, and catch her hand just before it smashes into your jaw.")
            enemy.draculaLoseHealth(20)
            break
        } else {
            console.log("Her hand cracks you in the jaw. You turn back, dazed.")
            character.lostHealth(healthLost)
            checkCharacterHealth(character)
            break
        }
    }
}

// These functions below were originally in another file called texts,
// however circular imports forced me to merge them 

//   ASCII Art
function youDied() {
    console.log(red("  ▓██   ██▓ ▒█████   █    ██    ▓█████▄  ██▓▓█████ ▓█████▄ "))
    console.log(red("  ▒██  ██▒▒██▒  ██▒ ██  ▓██▒   ▒██▀ ██▌▓██▒▓█   ▀ ▒██▀ ██▌ "))
    console.log(red("   ▒██ ██░▒██░  ██▒▓██  ▒██░   ░██   █▌▒██▒▒███   ░██   █▌ "))
    console.log(red("   ░ ▐██▓░▒██   ██░▓▓█  ░██░   ░▓█▄   ▌░██░▒▓█  ▄ ░▓█▄   ▌ "))
    console.log(red("   ░ ██▒▓░░ ████▓▒░▒▒█████▓    ░▒████▓ ░██░░▒████▒░▒████▓  "))
    console.log(red("    ██▒▒▒ ░ ▒░▒░▒░ ░▒▓▒ ▒ ▒     ▒▒▓  ▒ ░▓  ░░ ▒░ ░ ▒▒▓  ▒  "))
    console.log(red("  ▓██ ░▒░   ░ ▒ ▒░ ░░▒░ ░ ░     ░ ▒  ▒  ▒ ░ ░ ░  ░ ░ ▒  ▒  "))
    console.log(red("  ▒ ▒ ░░  ░ ░ ░ ▒   ░░░ ░ ░     ░ ░  ░  ▒ ░   ░    ░ ░  ░  "))
    console.log(red("  ░ ░         ░ ░     ░           ░     ░     ░  ░   ░     "))
    console.log(red("  ░ ░                           ░                  ░       "))
}

function draculasCastle() {
    console.log(red(" ▓█████▄  ██▀███   ▄▄▄       ▄████▄   █    ██  ██▓    ▄▄▄        ██████     ▄████▄   ▄▄▄        ██████ ▄▄▄█████▓ ██▓    ▓█████  ▐██▌ "))
    console.log(red(" ▒██▀ ██▌▓██ ▒ ██▒▒████▄    ▒██▀ ▀█   ██  ▓██▒▓██▒   ▒████▄    ▒██    ▒    ▒██▀ ▀█  ▒████▄    ▒██    ▒ ▓  ██▒ ▓▒▓██▒    ▓█   ▀  ▐██▌ "))
    console.log(red(" ░██   █▌▓██ ░▄█ ▒▒██  ▀█▄  ▒▓█    ▄ ▓██  ▒██░▒██░   ▒██  ▀█▄  ░ ▓██▄      ▒▓█    ▄ ▒██  ▀█▄  ░ ▓██▄   ▒ ▓██░ ▒░▒██░    ▒███    ▐██▌ "))
    console.log(red(" ░▓█▄   ▌▒██▀▀█▄  ░██▄▄▄▄██ ▒▓▓▄ ▄██▒▓▓█  ░██░▒██░   ░██▄▄▄▄██   ▒   ██▒   ▒▓▓▄ ▄██▒░██▄▄▄▄██   ▒   ██▒░ ▓██▓ ░ ▒██░    ▒▓█  ▄  ▓██▒ "))
    console.log(red(" ░▒████▓ ░██▓ ▒██▒ ▓█   ▓██▒▒ ▓███▀ ░▒▒█████▓ ░██████▒▓█   ▓██▒▒██████▒▒   ▒ ▓███▀ ░ ▓█   ▓██▒▒██████▒▒  ▒██▒ ░ ░██████▒░▒████▒ ▒▄▄  "))
    console.log(red("  ▒▒▓  ▒ ░ ▒▓ ░▒▓░ ▒▒   ▓▒█░░ ░▒ ▒  ░░▒▓▒ ▒ ▒ ░ ▒░▓  ░▒▒   ▓▒█░▒ ▒▓▒ ▒ ░   ░ ░▒ ▒  ░ ▒▒   ▓▒█░▒ ▒▓▒ ▒ ░  ▒ ░░   ░ ▒░▓  ░░░ ▒░ ░ ░▀▀▒ "))
    console.log(red("  ░ ▒  ▒   ░▒ ░ ▒░  ▒   ▒▒ ░  ░  ▒   ░░▒░ ░ ░ ░ ░ ▒  ░ ▒   ▒▒ ░░ ░▒  ░ ░     ░  ▒     ▒   ▒▒ ░░ ░▒  ░ ░    ░    ░ ░ ▒  ░ ░ ░  ░ ░  ░ "))
    console.log(red("  ░ ░  ░   ░░   ░   ░   ▒   ░         ░░░ ░ ░   ░ ░    ░   ▒   ░  ░  ░     ░          ░   ▒   ░  ░  ░    ░        ░ ░      ░       ░ "))
    console.log(red("    ░       ░           ░  ░░ ░         ░         ░  ░     ░  ░      ░     ░ ░            ░  ░      ░               ░  ░   ░  ░ ░    "))
    console.log(red("  ░                         ░                                              ░                                                         "))
}

// Intro
function intro() {
    console.log("You awaken in a castle cell. Blood drips steadily from the bricks above, splashing into a rusty basin.")
    // sleep(2000)
    console.log("Tap...")
    // sleep(1500)
    console.log("Tap...")
    // sleep(1500)
    console.log("Tap...")
    // sleep(1500)
    console.log("The moans of distant prisoners fill the halls. In the corner is a pile of bones. Past prisoners.")
    // sleep(1500)
    console.log("The bite marks on your body are from Dracula. You're a blood slave. Something's different, though.")
    sleep(300)
    console.log("Your bite marks are healing, and the strength in your limbs wills you to fight back.")
    sleep(300)
    console.log("What's happening to you?")
}

// Endings (Title Indicative)

function selfBludgeonEnding(notebook) {
    console.log("The thought of actually trying makes you extremely fed up.")
    sleep(300)
    console.log("Welp, you think, I guess this is better than round-the-clock-torture.")
    sleep(300)
    console.log("Then again... you think, but before you can change your mind, you")
    sleep(300)
    console.log("slip on a small pool of blood smack your head on the sink. Nice one,")
    sleep(300)
    console.log("doofus.")
    sleep(11000)
    notebook.resetNotebook()
    askIfPlayAgainNotDead()
}

function ominousSpiritStareEnding(notebook) {
    if (globals.prisonersFree === false) {
        console.log("'Oh, for fucks sake!' the spirit rages. 'How can one little human be so annoying?!'")
        sleep(300)
        console.log("'Fine, go through. See if I care. Just stop staring at me. Please.'")
        sleep(300)
        console.log("The spirit moves aside and you rush past, afraid he'll rescind his offer.")
        sleep(300)
        console.log("Soon you come to the end of the tunnel. The air smells fresh. Like pines and clear sky.")
        sleep(300)
        console.log("You take one final look back. Misery. A bad dream, and nothing more.")
        sleep(300)
        console.log("You're free.")
        sleep(15000)
        notebook.resetNotebook()
        askIfPlayAgainNotDead()
    } else {
        console.log("'Oh, for fucks sake!' the spirit rages. 'How can one little human be so annoying?!'")
        sleep(300)
        console.log("'Fine, go through. See if I care. Just stop staring at me. Please.'")
        sleep(300)
        console.log("'Wait one second' you say, risking the wrath of the Ominous Spirit. You sconsole.log back ")
        sleep(300)
        console.log("to the Jail and grab the prisoners, hauling them back with you to the tunnel. You ")
        sleep(300)
        console.log("keep your head down as you pass the Ominous Spirit. Soon you come to the end of the ")
        sleep(300)
        console.log("tunnel. The air smells fresh. Like pines and clear sky. You take one final look back.")
        sleep(300)
        console.log("Misery. A bad dream, and nothing more. You're free. And what's more, the prisoners are, too.")
        sleep(300)
        console.log("Your heart unclenches.")
        sleep(15000)
        notebook.resetNotebook()
        askIfPlayAgainNotDead()
    }
}


function ominousSpiritRiddleEnding(notebook, character) {
    if (globals.prisonersFree === false) {
        console.log("If the spirit had a brow, it would be furrowed. He stands in silence for a moment, as ")
        sleep(300)
        console.log("though trying to figure out how you did it. After some time, he snaps out of it and his ")
        sleep(300)
        console.log("eyes focus on you.")
        sleep(300)
        console.log("'You're not like the others... I don't know how, or why, but you're not. And for that, ")
        sleep(300)
        console.log("I give you this: ")
        sleep(300)
        character.inv.addItem(yellow("Spirit's Blessing"))
        sleep(300)
        console.log("You feel a rush wash over you, and your bloodlust fades. You look to the spirit, but he  ")
        sleep(300)
        console.log("simply moves aside. You keep your head down as you pass the Ominous Spirit. Soon you")
        sleep(300)
        console.log("come to the end of the tunnel. The air smells fresh. Like pines and clear sky. You take")
        sleep(300)
        console.log("one final look back. Misery. A bad dream, and nothing more. You're free.")
        sleep(300)
        console.log("Your heart unclenches, and you move onwards, propelled by the Ominous Spirit's blessing.")
        sleep(18000)
        notebook.resetNotebook()
        askIfPlayAgainNotDead()
    } else {
        console.log("If the spirit had a brow, it would be furrowed. He stands in silence for a moment, as ")
        sleep(300)
        console.log("though trying to figure out how you did it. After some time, he snaps out of it and his ")
        sleep(300)
        console.log("eyes focus on you.")
        sleep(300)
        console.log("'You're not like the others... I don't know how, or why, but you're not. And for that, ")
        sleep(300)
        console.log("I give you this: ")
        sleep(300)
        main_character.inv.addItem(yellow("Spirit's Blessing"))
        sleep(300)
        console.log("You feel a rush wash over you, and your bloodlust fades. You look to the spirit, but he  ")
        sleep(300)
        console.log("simply moves aside." )
        sleep(300)
        console.log("'Wait one second' you say, risking angering of the Ominous Spirit. You sconsole.log back ")
        sleep(300)
        console.log("to the Jail and grab the prisoners, hauling them back with you to the tunnel.")
        sleep(300)
        console.log("You keep your head down as you pass the Ominous Spirit. Soon you")
        sleep(300)
        console.log("come to the end of the tunnel. The air smells fresh. Like pines and clear sky. You take")
        sleep(300)
        console.log("one final look back. Misery. A bad dream, and nothing more. You're free. They're free.")
        sleep(300)
        console.log("Your heart unclenches, and you move onwards, propelled by the Ominous Spirit's blessing.")
        sleep(20000)
        notebook.resetNotebook()
        askIfPlayAgainNotDead()
    }

}

function mainDoorFullBloodGlutEnding(notebook) {
    if (prisonersFree === false) {
        console.log("First, you free the prisoners with your immense strength.")
        sleep(300)
        console.log("You look back at the wretched place that contained you for so long, wondering if setting ")
        sleep(300)
        console.log("it ablaze would be too much. It's not worth it, you think. There's prey to hunt, and the")
        sleep(300)
        console.log("darkness calls you forward. You throw an impossbily-strong kick, ripping the large wooden")
        sleep(300)
        console.log("doors off their hinges and stepping outside. Your skin boils in the sunlight as the prisoners")
        sleep(300)
        console.log("run past you, fear-struck by your smoking form. You have become everything you hate.")
        sleep(300)
        console.log("The last thing you remember is the unbearably hot sun beating down, melting your flesh...")
        sleep(18000)
        notebook.resetNotebook()
        askIfPlayAgainNotDead()
    }
}

function mainDoorEndingWithKey(notebook) {
    console.log("You look back at the wretched place that contained you for so long, wondering if setting it")
    sleep(300)
    console.log("ablaze would be too much. It's not worth it, you think. Maybe one day, someone will live ")
    sleep(300)
    console.log("here. Someone nice. Someone kind. You insert the Master Key into the lock and swing the large ")
    sleep(300)
    console.log("wooden doors forward, stepping outside. Your skin tingles in the sunlight, a ghost of the ")
    sleep(300)
    console.log("pain it might have caused you if you'd transitioned. The last thing you remember are the prisoners ")
    sleep(300)
    console.log("rushing past you, free at last.")
    sleep(300)
    console.log("You smile. It's finally over.")
    sleep(18000)
    notebook.reset_notebook()
    askIfPlayAgainNotDead()
}

function mainDoorEndingWithoutKey(notebook) {
    console.log("You look back at the wretched place that contained you for so long, wondering if setting it")
    sleep(300)
    console.log("ablaze would be too much.It's not worth it, you think. Maybe one day, someone will live here.")
    sleep(300)
    console.log("Someone nice. Someone kind. You throw an impossbily-strong kick, ripping the large wooden doors ")
    sleep(300)
    console.log("off their hinges and stepping outside. Your skin tingles in the sunlight, a ghost of the pain ")
    sleep(300)
    console.log("it might have caused you if you'd transitioned.The last thing you remember are the prisoners ")
    sleep(300)
    console.log("rushing past you, free at last.")
    sleep(300)
    console.log("You smile. It's finally over.")
    sleep(18000)
    notebook.reset_notebook()
    askIfPlayAgainNotDead()
}

function draculaSparedEnding(notebook) {
    console.log("'You're right,' you say, giving into your own darkness.")
    sleep(300)
    console.log("Slowly, you remove your hand from her neck and stand up.")
    sleep(300)
    console.log("Dracula slowly stands. 'Just wait until I show you all we can do,' she cooes.")
    sleep(300)
    console.log("'Come now, my child. The night is still young, and there is blood to be spilt.'")
    sleep(300)
    console.log("As night falls, you both head to a nearby town. Terror ensues. The screams of the")
    sleep(300)
    console.log("innocent echo off every wall in the town. ")
    sleep(300)
    console.log("You've become a prince of darkness.")
    sleep(18000)
    notebook.reset_notebook()
    askIfPlayAgainNotDead()
}

module.exports = {
    prompt: prompt,
    sleep: sleep,
    appendNotebook: appendNotebook,
    canWrite: canWrite,
    options: options,
    displayStats: displayStats,
    restartProgram: restartProgram,
    checkCharacterHealth: checkCharacterHealth,
    chanceOfSuccess: chanceOfSuccess,
    quickTimeEvent: quickTimeEvent,
    fightWithDracula: fightWithDracula,
    youDied: youDied,
    draculasCastle: draculasCastle,
    intro: intro,
    selfBludgeonEnding: selfBludgeonEnding,
    askIfPlayAgain: askIfPlayAgain,
    askIfPlayAgainNotDead: askIfPlayAgainNotDead,
    ominousSpiritStareEnding: ominousSpiritStareEnding,
    draculaSparedEnding: draculaSparedEnding,
    mainDoorEndingWithoutKey: mainDoorEndingWithoutKey,
    mainDoorEndingWithKey: mainDoorEndingWithKey,
    mainDoorFullBloodGlutEnding: mainDoorFullBloodGlutEnding,
    ominousSpiritRiddleEnding: ominousSpiritRiddleEnding
}

