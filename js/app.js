'use strict'

alert("welcome to my first project")

let uesrname = prompt("can you tell us your name? ")

alert("welcome " + uesrname)

let age = prompt(" now your age catagory if your age are between 18-24 print Y and if your age between 25-30 print N? ").toLowerCase()
switch (age) {
    case "y":
        alert("your are very young enjoy your time  ")
        break;
    case "n":
        alert("you are young too but you must think about your futur")
        break;

}
let animeLover = prompt("are you Anime lover answer by yes or no?").toUpperCase()
switch (animeLover) {
    case "NO":
        alert("you must try to watch one I recommand (Hunter X Hunter) its amazing I put a link to you scroll down to see it")
        break;
    case "YES":
        let hunterLover = prompt("are you Hunter X hunter lover yes or no ").toLowerCase()
        break;
    default:
        alert("you can't enter this Just yes or no ")
}

switch (hunterLover) {
    case "yes":
        alert("great you are a real Anime lover ")
        break;
    case "no":
        alert("no you are not Anime lover")
        break;
    default:
        alert("you can't enter this Just yes or no ")
}


alert('welcome again to my site and ready to the gussing game so Lets start......')
let startGame = prompt('now please if you want to start the game now Enter yes')

if (startGame == 'yes') {

    alert('now you must Enter a number between  1 and 10 , you have only 4 trys ')
    let answer = 7;
    let guess = prompt('here Enter your answer')

    for (let i = 1; i < 4; i++) {
        if (answer == guess) {
            alert('good job');
            break;

        } else {
            guess = prompt('try agian')
        }


    }


}
else {
    alert('come back next time to play')
}


