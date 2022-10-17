
/**Game is to generate 5 random numbers between 1-20, user must guess whether each consecutive number is Higher or Lower than the 
 * previous number.  The numbers will be kept hidden from the user until they select either the Higher/Lower button. 
 */

// Event listener for DOM load and to startGame on button click

document.addEventListener("DOMContentLoaded", function() {
//    
//     let playerName = document.getElementsByTagName("input").value;
//     // let signIn = document.getElementById("start-game").click;
//     signIn.addEventListener("playerName", function(event){
//         if (event.key === "Enter") {
//         alert(`Let's play ${playerName}`);
//         startGame();
//     } else {
//             alert("You must sign in to play");
//     }
//     })
// })

    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener('click', function () {

        if (this.getAttribute("data-type") === "submit") {
            startGame();
            alert("Starting Game");
        } else {
//             if (this.getElementsByClassName("choose-Higher")) {

//             alert(`Your guess was ${}`);
//         } else 
//             if (this.getElementsByClassName("choose-Lower")) {
            
            alert("Error");
        }})
}
    // document.getElementById("vote-box").addEventListener("click", compareValue());


    })

// User login on entering their name to the input field and clicking 'Start'

// let userLoggedIn = true;
// if (userLoggedIn) {
//     if (event.key === "Enter") {
//     alert("Welcome, let's play!");
// } else {
//     alert("Please press Enter")
// } 
// }


  // function to generate numbers.  The return of startGame is numArray?!?!?!?!?! is this correct?

 function startGame () {   
// Create 5 random numbers and pass them into the 5 html buttons
    let num1 = Math.floor(Math.random()*21);    
    document.getElementsByClassName("purple-button")[0].innerHTML = num1;
    let num2 = Math.floor(Math.random()*21);
    document.getElementsByClassName("pink-button")[0].innerHTML = num2;
    let num3 = Math.floor(Math.random()*21);
    document.getElementsByClassName("yellow-button")[0].innerHTML = num3;
    let num4 = Math.floor(Math.random()*21);
    document.getElementsByClassName("blue-button")[0].innerHTML = num4;
    let num5 = Math.floor(Math.random()*21);
    document.getElementsByClassName("green-button")[0].innerHTML = num5;
    
    let numArray = [num1, num2, num3, num4, num5];
    let i = 1;
    compareTwoValues(numArray[i--], numArray[i]);
 }
    // return numArray;
    // console.log(numArray);

    
    // let numArrayLength = numArray.length;
    // while (i < numArrayLength) {
    //     
    //     i++;
    // }
    // i = 1 is on purpose, I do understand that the index starts at 0!

    // for (let i = 1; i < numArray.length; i++) {
    //     if (numArray[i--] > numArray[i] === true) {
    //     return lower;
    // } else if (numArray[i--] < numArray[i] === true) {
    //     return higher;
        
    // } else {
    //     return equal;
    // }
  
// let numberArray = startGame ()
// function to compare two numbers, using Comparison operators to delare Higher/Lower and give them values

function compareTwoValues (number1, number2) {
       
        let Higher = number1 < number2;
        let Lower = number1 > number2;
        let Equal = number1 == number2;
    // for (let i = 1; i < numArray.length; i++) 
       
    
        if (Lower === true) {
        alert(`${number2} is Lower. Game over!`);

        } else {
        if (Higher === true) {
        alert(`${number2} is Higher}`);
        // compareTwoValues(number1: numArray[i--], number2: numArray[i]);
    } else {
        alert("The numbers are the same!Let's continue!!");
        // compareTwoValues(number1: numArray[i--], number2: numArray[i]);
    }
    alert (`Game over! Well played!! Your score is ${correctGuessTally()}`)
}
    }
// compare result (Higher/Lower) to userGuess

/*if user chooseHigher and number is higher than previous number, 
 * then jump to next number in iteration and continue game; 
 * if user chooseHigher and number is lower than previuos number, then game over.
 * But if user chooseLower and number is lower than previous number, then jump 
 * to next number in iteration and continue game; if user chooselower and number is higher than previous number, then game over.
 * code for number being tested is higher than previous number = chooseHigher ? jump to next number : game over;
 * code for number being tested is lower than previous number = chooseLower ? jump to next number : game over;*/


// function to allow user guess Higher/Lower


// function to check whether user's guess matched hidden number

function checkGuess () {

    let userGuessHigher = document.getElementById("choose-Higher").click;
    let userGuessLower = document.getElementById("choose-Lower").click;
    let isCorrect = userGuessHigher === compareTwoValues.Higher ? compareTwoValues () : endGame();
    
    if (userGuessHigher && compareTwoValues().Higher) {
        if (userGuessLower && compareTwoValues.Lower){
        correctGuessTally();
    } else if (userGuessHigher && compareTwoValues.lower) {
        if (userGuessLower && compareTwoValues.higher) {
        endGame();
    }
} 

// function to increment correct guesses - based on the Score area from Love Maths

function correctGuessTally () {
    let oldScore = parseInt(document.getElementById("tally-Correct")).innerHTML;
    document.getElementById("tally-Correct").innerHTML = ++oldScore;
}

// function to increment incorrect guesses - based on the Score area from Love Maths

function incorrectGuessTally () {
    let oldScore = parseInt(document.getElementById("tally-Incorrect")).innertext;
    document.getElementById("tally-Incorrect").innertext = ++oldScore;
}

function gameOver () {
    
}



// Trying Canvas
// var canvas = document.getElementById("myCanvas");
// console.log("canvas");
// var c = canvas.getContext("2d");


// function randomNum () {
//     let Num1 = Math.floor(Math.random() * 13);
// }

// function flipCoin () {
//     // declare variable flip
//     // assign Heads=?, Tails=flip
//     let coinFlip = document.getElementById("flipCoin");
//     coinFlip.addEventListener() = 'click';
//     var flip = Math.floor(Math.random()*13);
//     if (flip === "?") {
//     drawHeads(200, 200, "red");
// } else {
//     drawTails(200, 200, flip);
// }


/*function drawHeads (xloc, yloc, Red) {
    c.beginPath();
    c.fillstyle = Red;
    c.strokeStyle = "Black" ;
    c.linewidth = 5;
    c.arc(xloc, yloc, 100, 0, 2 * Math.PI);
    c.fill();
    c.stroke();
    c.closePath();
    // draw "?" on Head side
    c.fillstyle = "Black"
    c.font = "72px Arial";
    c.fillText = ("?", xloc, yloc);
}

function drawTails (xloc, yloc, flip) {
    c.beginPath();
    c.fillstyle = "red";
    c.strokeStyle = "Black" ;
    c.linewidth = 5;
    c.arc(xloc, yloc, 100, 0, 2 * Math.PI);
    c.fill();
    c.stroke();
    c.closePath();
    // insert flip() on Head side
    c.fillstyle = "Black"
    c.font = "72px Arial";
    c.fillText = (flip, xloc, yloc);*/