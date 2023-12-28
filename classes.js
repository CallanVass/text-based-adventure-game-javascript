const fs = require('fs')
const input = require('./functions')


class Character {
    constructor(name) {
        self.name = name
        self.health = 100
        self.bloodglut = 0
        self.inv = Inventory
    }
    checkStats() {
        console.log(`Health: ${this.health}/100 \n Bloodglut: ${this.bloodglut} \n Inventory: ${this.inv.getItems}`)
    }
    checkDraculaStats() {
        console.log(`Dracula's Health: ${this.health}/100`)
    }
    loseHealth(healthLoss) {
        this.health -= healthLoss
        console.log(`You lost ${healthLoss} health!`)
    }
    draculaLoseHealth(healthLoss) {
        this.health -= healthLoss
        console.log(`Dracula lost ${healthLoss} health!`)
    }
    addBloodGlut(amount) {
        this.bloodglut = this.bloodglut + amount
        let increase = console.log(`Blood glut has been increased by ${amount}`)
        if (this.bloodglut > 100) {
            this.bloodglut = 100
        }
        if (this.bloodglut <= 20) {
            console.log(`${increase} \n Dark desires writhe within you!`)
        } else if (this.bloodglut > 20 && this.bloodglut <= 50) {
            console.log(`${increase} \n You grow stronger and an almost irresistable desire for blood awakens!`)
        } else if (this.bloodglut > 50 && this.bloodglut <= 65) {
            console.log(`${increase} \n You're turning into an unkillable creature of nightmares!`)
        } else if (this.bloodglut > 65 && this.bloodglut <= 80) {
            console.log(`${increase} \n You swelter with violent power. Soon you'll be lost to your human form forever!`)
        } else if (this.bloodglut > 80 && this.bloodglut <= 99) {
            console.log(`${increase} \nYour humanity sinks deeper with every kill, drowned in the blood of your enemies! One more kill and you'll be lost to the dark forces of vampirism!`)
        } else {
            console.log(`${increase} \n Darkness shrouds around you like torrent of black fire, hailing you as its new king!`)
        }
    }
}

module.exports = Character

class Inventory {
    constructor() {
        this.items = []
    }

    addItem(name) {
        this.items.push(name)
        console.log(`You have picked up ${name}!`)
    }
    removeItem(name) {
        let index = this.items.indexOf(name)
        if (index !== -1) {
            this.items.splice(index, 1)
        }
        this.items.push(name)
        console.log(`You have picked up ${name}!`)
    }
    getItems() {
        return `${this.items}`
    }
    hasItem(name) {
        return name in this.items
    }

}


module.exports = Inventory

class Notebook {
    readNotebook() {
        fs.readFile('notebook.txt', 'utf8', (err, data) => {
            if (err) {
              console.error('Error reading file:', err)
            } else {
              console.log(data)
            }
          })
    }
}


module.exports = Notebook