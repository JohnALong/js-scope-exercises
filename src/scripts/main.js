console.log("linked");
// corrected for loop and declaration to console log info
// const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]

// for (let i = 0; i < cookies.length; i++) {
//     const currentCookie = cookies[i]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }

// changed conjoinedWord to global let variable
// let conjoinedWord;
// const conjunction = function (firstWord, secondWord) {
//     conjoinedWord = `${firstWord} ${secondWord}`
// }

// conjunction("Master", "Card")
// console.log(conjoinedWord)

//     let ModSquad = {
//         "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
//         "series": {
//             "start": "1968",
//             "end": "1973"
//         }
//     }

//     let HTMLRepresentation = `<h1>The Mod Squad</h1>`

//     ModSquad.members.forEach(member => {
//         HTMLRepresentation += `<div>${member}</div>`
        
//     })


// document.querySelector(".show-info").innerHTML = HTMLRepresentation

// created counting variable changed const to let to correct
// const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]];
// let invalidLocation;
// let invalidLocationCounter = 0;
// for (let k = 0; k < locations.length; k++) {
//     let currentLocation = locations[k]

//     if (currentLocation[0] > 2) {
//      invalidLocation = true;
//      invalidLocationCounter++;
//     }

//     if (invalidLocation) {
//         console.log("This location is invalid")
//     }
//     console.log(`There were ${invalidLocationCounter} invalid locations`)
// }

/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/
// console.log(`There were ${k} invalid locations`)

const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)

    const namer = function () {
        const suffix = " the Llama"
        const name = possibleNames[randomizer]
        return name + suffix
    }
    return namer();
    
}
nameMaker = llamaNamer()
console.log(nameMaker)

