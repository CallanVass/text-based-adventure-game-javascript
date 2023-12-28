const  cellPromptList11 = ["Examine the pile of bones.", 
                "Examine the bloody basin.", 
                "Listen out to the calls of the prisoners.", 
                "Examine bite marks.",
                "Exit the cell door.",]

const cellPromptList12 = ["Snap a femur and shave it down to a sizeable 'key'", 
                        "Whittle a splinter of bone down to a needle for... engraving.",
                        "Go back"]

const cellPromptList21 = ["Take a sip",
                      "Look underneath",
                      "Bludgeon yourself on the basin.",
                      "Go back"]

// CELL ROOM LISTS
const cellRoomPromptList11 = ["Enter Treasury Room.",
                             "Free the prisoners.",
                             "Enter Armoury. (* 100% chance of conflict *)",
                             "Try the door to freedom",
                             "Check carving on the door.",
                             "Go back into the Cell"]

const cellRoomPromptList12 = ["Enter Treasury Room.",
                             "Free the prisoners.",
                             "Enter Armoury.",
                             "Try the door to freedom",
                             "Check engraving on the door.",
                             "Go back into the Cell"]

// TREASURY LISTS
const treasuryPromptList11 = ["Drain the servant",
                             "Examine the gold coins",
                             "Knock the servant unconscious",
                             "Examine door at the back of the room",
                             "Go back to the Jail."]

const treasuryPromptList12 = ["Bite the coin.",
                             "Forge a key out of the gold coins.",
                             "Go back.",]

const treasuryPromptList13 = ["Dig away some of the coins. (* 20% chance of conflict *)",
                             "Check the letter on the table besides the door.",
                             "Go back."]

const treasuryPromptList131 = ["Step over the gold and enter the door.",
                             "Check the letter on the table besides the door.",
                             "Go back."]

// TUNNEL LISTS
const tunnelPromptList1 = ["Venture down the tunnel.",
                             "Go back."]
const tunnelPromptList2 = ["Bow before the figure.",
                        "Ask to pass.",
                        "Stand and stare in awkward silence.",
                        "Go back."]

const tunnelPromptList21 = ["Bow before the figure.",
                        "Try the riddle.",
                        "Stand and stare in awkward silence.",
                        "Go back."]

// ARMOURY LISTS
const armouryPromptList1 = ["Charge the men head on."]

const armouryPromptList2 = ["Back into the doorway to draw them in one at a time.",
                         "Charge them again."]

const armouryPromptList3 = ["Go forward to Dracula's Chambers.",
                         "Loot the soldier's bodies.",
                         "Go back."]

// DRACULA'S ROOM LISTS
const draculaPromptList1 = ["'You deserve to die for what you've done to these people.'",
                         "'You've lived for long enough, don't you think?'",
                         "'Actually, I've left a pile of bodies behind me the whole way here. I have zero moral agency.'",
                         "Enough chit chat. Let's fight.",
                         "Go back."]

const draculaPromptList2 = ["'You deserve to die for what you've done to these people.'",
                         "'You've lived for long enough, don't you think?'",
                         "'I'm not entirely exempt, either. But you need to be stopped'",
                         "'Enough chit chat. Let's fight.' (* 100% chance of conflict *)",
                         "Go back."]

const draculaPromptList21 = ["'There is no redemption for you!' (Kill Dracula)",
                         "I suppose... I suppose that could work. (Spare Dracula)"]

const draculaPromptList3 = ["Exit the room."]

// END PROMPT LIST
const endPromptList = ["Yes",
                   "No"]

module.exports = {
    cellPromptList11: cellPromptList11,
    cellPromptList12: cellPromptList12,
    cellPromptList21: cellPromptList21,
    cellRoomPromptList11: cellRoomPromptList11,
    cellRoomPromptList12: cellRoomPromptList12,
    treasuryPromptList11: treasuryPromptList11,
    treasuryPromptList12: treasuryPromptList12,
    treasuryPromptList13: treasuryPromptList13,
    treasuryPromptList131: treasuryPromptList131,
    tunnelPromptList1: tunnelPromptList1,
    tunnelPromptList2: tunnelPromptList2,
    tunnelPromptList21: tunnelPromptList21,
    armouryPromptList1: armouryPromptList1,
    armouryPromptList2: armouryPromptList2,
    armouryPromptList3: armouryPromptList3,
    draculaPromptList1: draculaPromptList1,
    draculaPromptList2: draculaPromptList2,
    draculaPromptList21: draculaPromptList21,
    draculaPromptList3: draculaPromptList3,
    endPromptList: endPromptList
}