'use strict'
alert("welcome to my first project");

let userName = prompt("can you tell us your name?");
alert(`welcome ${userName}`);


let guessNumber = Number(prompt(`Now ${userName} try to guess a number between 1 to 5  you have only just 4 attempts`));
for (let i = 0; i < 3; i++) {
    if (guessNumber === 3) {
        alert('great this is the rigth answer');
        //console.log(guessNumber);
        break;
    }
    else if (guessNumber === 1) {
        alert('too low');
        //console.log(guessNumber);
        guessNumber = Number(prompt(`Now ${userName} try to guess a number between 1 to 5 and remember you have just 4 attempts`));
    } else if (guessNumber === 2) {
        alert('too low');
        //console.log(guessNumber);
        guessNumber = Number(prompt(`Now ${userName} try to guess a number between 1 to 5 and remember you have just 4 attempts`));
    } else if (guessNumber === 4) {
        alert('too high');
        // console.log(guessNumber);
        guessNumber = Number(prompt(`Now ${userName} try to guess a number between 1 to 5 and remember you have just 4 attempts`));
    }
    else if (guessNumber === 5) {
        alert('too high');
        // console.log(guessNumber);
        guessNumber = Number(prompt(`Now ${userName} try to guess a number between 1 to 5 and remember you have just 4 attempts`));
    }
}


//alert('The correct answer is 3');




