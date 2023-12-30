const functions = require('./functions')

function youDied() {
    console.log("  ▓██   ██▓ ▒█████   █    ██    ▓█████▄  ██▓▓█████ ▓█████▄ ")
    console.log("  ▒██  ██▒▒██▒  ██▒ ██  ▓██▒   ▒██▀ ██▌▓██▒▓█   ▀ ▒██▀ ██▌ ")
    console.log("   ▒██ ██░▒██░  ██▒▓██  ▒██░   ░██   █▌▒██▒▒███   ░██   █▌ ")
    console.log("   ░ ▐██▓░▒██   ██░▓▓█  ░██░   ░▓█▄   ▌░██░▒▓█  ▄ ░▓█▄   ▌ ")
    console.log("   ░ ██▒▓░░ ████▓▒░▒▒█████▓    ░▒████▓ ░██░░▒████▒░▒████▓  ")
    console.log("    ██▒▒▒ ░ ▒░▒░▒░ ░▒▓▒ ▒ ▒     ▒▒▓  ▒ ░▓  ░░ ▒░ ░ ▒▒▓  ▒  ")
    console.log("  ▓██ ░▒░   ░ ▒ ▒░ ░░▒░ ░ ░     ░ ▒  ▒  ▒ ░ ░ ░  ░ ░ ▒  ▒  ")
    console.log("  ▒ ▒ ░░  ░ ░ ░ ▒   ░░░ ░ ░     ░ ░  ░  ▒ ░   ░    ░ ░  ░  ")
    console.log("  ░ ░         ░ ░     ░           ░     ░     ░  ░   ░     ")
    console.log("  ░ ░                           ░                  ░       ")
}

function draculasCastle() {
    console.log(" ▓█████▄  ██▀███   ▄▄▄       ▄████▄   █    ██  ██▓    ▄▄▄        ██████     ▄████▄   ▄▄▄        ██████ ▄▄▄█████▓ ██▓    ▓█████  ▐██▌ ")
    console.log(" ▒██▀ ██▌▓██ ▒ ██▒▒████▄    ▒██▀ ▀█   ██  ▓██▒▓██▒   ▒████▄    ▒██    ▒    ▒██▀ ▀█  ▒████▄    ▒██    ▒ ▓  ██▒ ▓▒▓██▒    ▓█   ▀  ▐██▌ ")
    console.log(" ░██   █▌▓██ ░▄█ ▒▒██  ▀█▄  ▒▓█    ▄ ▓██  ▒██░▒██░   ▒██  ▀█▄  ░ ▓██▄      ▒▓█    ▄ ▒██  ▀█▄  ░ ▓██▄   ▒ ▓██░ ▒░▒██░    ▒███    ▐██▌ ")
    console.log(" ░▓█▄   ▌▒██▀▀█▄  ░██▄▄▄▄██ ▒▓▓▄ ▄██▒▓▓█  ░██░▒██░   ░██▄▄▄▄██   ▒   ██▒   ▒▓▓▄ ▄██▒░██▄▄▄▄██   ▒   ██▒░ ▓██▓ ░ ▒██░    ▒▓█  ▄  ▓██▒ ")
    console.log(" ░▒████▓ ░██▓ ▒██▒ ▓█   ▓██▒▒ ▓███▀ ░▒▒█████▓ ░██████▒▓█   ▓██▒▒██████▒▒   ▒ ▓███▀ ░ ▓█   ▓██▒▒██████▒▒  ▒██▒ ░ ░██████▒░▒████▒ ▒▄▄  ")
    console.log("  ▒▒▓  ▒ ░ ▒▓ ░▒▓░ ▒▒   ▓▒█░░ ░▒ ▒  ░░▒▓▒ ▒ ▒ ░ ▒░▓  ░▒▒   ▓▒█░▒ ▒▓▒ ▒ ░   ░ ░▒ ▒  ░ ▒▒   ▓▒█░▒ ▒▓▒ ▒ ░  ▒ ░░   ░ ▒░▓  ░░░ ▒░ ░ ░▀▀▒ ")
    console.log("  ░ ▒  ▒   ░▒ ░ ▒░  ▒   ▒▒ ░  ░  ▒   ░░▒░ ░ ░ ░ ░ ▒  ░ ▒   ▒▒ ░░ ░▒  ░ ░     ░  ▒     ▒   ▒▒ ░░ ░▒  ░ ░    ░    ░ ░ ▒  ░ ░ ░  ░ ░  ░ ")
    console.log("  ░ ░  ░   ░░   ░   ░   ▒   ░         ░░░ ░ ░   ░ ░    ░   ▒   ░  ░  ░     ░          ░   ▒   ░  ░  ░    ░        ░ ░      ░       ░ ")
    console.log("    ░       ░           ░  ░░ ░         ░         ░  ░     ░  ░      ░     ░ ░            ░  ░      ░               ░  ░   ░  ░ ░    ")
    console.log("  ░                         ░                                              ░                                                         ")
}

function intro() {
    console.log("You awaken in a castle cell. Blood drips steadily from the bricks above, splashing into a rusty basin.")
    functions.sleep(2000)
    console.log("Tap...")
    functions.sleep(1500)
    console.log("Tap...")
    functions.sleep(1500)
    console.log("Tap...")
    functions.sleep(1500)
    console.log("The moans of distant prisoners fill the halls. In the corner is a pile of bones. Past prisoners.")
    functions.sleep(1500)
    console.log("The bite marks on your body are from Dracula. You're a blood slave. Something's different, though.")
    functions.sleep(300)
    console.log("Your bite marks are healing, and the strength in your limbs wills you to fight back.")
    functions.sleep(300)
    console.log("What's happening to you?")
}


module.exports = {
    youDied: youDied,
    draculasCastle: draculasCastle,
    intro: intro

}