const fs = require('fs')
const input = require('./functions')
const { blue, green, red, bold, yellow, black } = require('colorette')
const readlineSync = require('readline-sync')

class Character {
    constructor(name) {
        this.name = name
        this.health = 100
        this.bloodglut = 0
        this.inv = new Inventory()
    }
    checkHealth() {
        health = this.health
        return health
    }
    checkStats() {
        console.log(green(`Health: ${this.health}/100`))
        console.log(red(`Bloodglut: ${this.bloodglut}/100`))
        console.log(yellow(`Inventory: ${this.inv.getItems()}`))
    }
    checkDraculaStats() {
        console.log(red(`Dracula's Health: ${this.health}/100`))
    }
    loseHealth(healthLoss) {
        this.health -= healthLoss
        console.log(red(`You lost ${healthLoss} health!`))
    }
    draculaLoseHealth(healthLoss) {
        this.health -= healthLoss
        console.log(`Dracula lost ${healthLoss} health!`)
    }
    addBloodGlut(amount) {
        this.bloodglut = this.bloodglut + amount
        let increase = `Blood glut has been increased by ${amount}!`
        if (this.bloodglut >= 100) {
            this.bloodglut = 100
        }
        if (this.bloodglut <= 20) {
            console.log(`${increase} \nDark desires writhe within you!`)
        } else if (this.bloodglut > 20 && this.bloodglut <= 50) {
            console.log(`${increase} \nYou grow stronger and an almost irresistable desire for blood awakens!`)
        } else if (this.bloodglut > 50 && this.bloodglut <= 65) {
            console.log(`${increase} \nYou're turning into an unkillable creature of nightmares!`)
        } else if (this.bloodglut > 65 && this.bloodglut <= 80) {
            console.log(`${increase} \nYou swelter with violent power. Soon you'll be lost to your human form forever!`)
        } else if (this.bloodglut > 80 && this.bloodglut <= 99) {
            console.log(`${increase} \nYour humanity sinks deeper with every kill, drowned in the blood of your enemies! One more kill and you'll be lost to the dark forces of vampirism!`)
        } else {
            console.log(`${increase} \nDarkness shrouds around you like torrent of black fire, hailing you as its new king!`)
        }
    }
}


class Inventory {
    constructor() {
        this.items = []
    }

    addItem(name) {
        this.items.push(name)
        console.log(yellow(`You have picked up ${name}!`))
    }
    removeItem(name) {
        let index = this.items.indexOf(name)
        if (index !== -1) {
            this.items.splice(index, 1)
            console.log(`You have removed ${name}!`)
        }
        
    }
    getItems() {
        return this.items.join(', ')
    }
    hasItem(name) {
        return this.items.includes(name)
    }

}

class Notebook {
    readNotebook() {
        try {
            const data = fs.readFileSync('notebook.txt', 'utf8');
            console.log('Notebook content:');
            console.log(data);
        } catch (err) {
            console.error('Error reading file:', err);
        }
    }

    writeNotebook() {
        const content = readlineSync.question("What would you like to write? ");

        try {
            fs.appendFileSync("notebook.txt", content + "\n", 'utf-8');
            console.log('Notebook updated!');
        } catch (err) {
            console.error('Error writing to the file:', err);
        }
    }


    resetNotebook() {
        fs.writeFile("notebook.txt", "", (err) => {
            if (err) {
                console.error('Error writing to the file:', err)
            } else {
                console.log('')
            }
        })
    }

    }

    // const notebook = new Notebook()


    // notebook.readNotebook()
    // notebook.writeNotebook()

module.exports = {
    Notebook: Notebook,
    Inventory: Inventory,
    Character: Character,
}