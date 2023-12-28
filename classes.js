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
    
}

class Inventory {

}

class Notebook {

}