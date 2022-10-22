
/**Game is to generate 5 random numbers between 1-20, user must guess whether each consecutive number is Higher or Lower than the 
 * previous number.  The numbers will be kept hidden from the user until they select either the Higher/Lower button. 
 */

// Declare clickable buttons at Global scope

const enterGameButton = document.getElementsByClassName("start-game");
const chooseHigher = document.getElementById("choose-Higher");
const chooseLower = document.getElementById("choose-Lower");
var userGuess = chooseHigher || chooseLower;

// Declare signin variable at Global scope

const signInSection = document.getElementsByClassName("sign-in");
var playerName = document.getElementById("name").value;

// Declare game area at Global scope

const gameSection = document.getElementsByClassName("game");

// Declare nums to use as parameters in functions and what I need to compare i-- to i

var num1;
var num2;
var num3;
var num4;
var num5;

var numArray = [num1, num2, num3, num4, num5];

// function higher () {
//     numArray = [num1, num2, num3, num4, num5];
//     let i = 1;
//     for (let i = 1; i < numArray.length; i++) {
//         if (numArray[i--] < numArray[i]) {
//             let result = higher;
//                 return result;
//         } 
//     }
// }

// function lower () {
//     numArray = [num1, num2, num3, num4, num5];
//     let i = 1;
//     for (let i = 1; i < numArray.length; i++) {
//         if (numArray[i--] > numArray[i]) {
//             let result = lower;
//                 return result;
//         }
//     }
// }
/*The function compareNums() works, so if trialling 
*function higher () and function lower () doesn't work, put it back!!
*/

// function compareNums (Higher, Lower, Equal){
//     numArray = [num1, num2, num3, num4, num5];
// var Higher = numArray[i--] < numArray[i];
// var Lower = numArray[i--] > numArray[i];
// var Equal = numArray[i--] == numArray[i];
// let i = 1;
// for (let i = 1; i < numArray.length; i++) {
//    if (numArray[i--] < numArray[i] === Higher) {
//     //means the number being guessed is Higher, so the 'Higher' button choice would be correct
        
//    } else {
//     if (numArray[i--] > numArray[i] === Lower) {
//         // means the number being guessed is Lower, so the 'Lower' button choice would be correct
        
//     } else {
//         if (numArray[i--] > numArray[i] === Equal) {
           
//         }
//     }
//    }
// }
// }


// Declare Tally section and variables at Global scope

const tallySection = document.getElementsByClassName("tally");
const tallyCorrect = document.getElementById("tally-correct");
const tallyIncorrect = document.getElementById("tally-incorrect");

// Event listener for DOM load and to startGame on button click

    
 document.addEventListener("DOMContentLoaded", function() {
    // $(document).ready(function(){
    //     $(".sign-in").click(function() {
    //         $(this).hide("slow", startGame()); {
    //             alert(`Welcome ${playerName}! Let's Play...`);
    //         };
    //     });
    // });

    let buttons = document.getElementsByTagName("button");
    userGuess = chooseHigher || chooseLower;
    // let gameArea = document.getElementsByTagName("game");
    for (let button of buttons) {
        button.addEventListener("click", function () {

        if (this.getAttribute("data-type") === "submit") {
            signIn();
            // startGame();
            // alert("Starting Game");
        } else if (userGuess) {
            // user has clicked on Higher or Lower button so compare user selection to compare numbers
            alert("boo");
            checkGuess(this.id);
        } else {
            alert("Error"); 
        }
    })}
});
    
 
    

    // let game = document.getElementsByClassName("game");
    // if (game.style.display === "none") {
    //     game.style.display === "block";
    // } else {
    //     game.style.display ==="none";
    // }
// //    
// //   
    
//     // document.getElementById("vote-box").addEventListener("click", compareValue());


    // }})


 
// display: none from https://www.w3schools.com/css/tryit.asp?filename=trycss_display_js
// function loadGameArea (event) {
//     let game = document.getElementsByClassName("game");
//     game.addEventListener("click");
//     if (event.getAttribute("data-type") === "submit") {
//         if (game.style.display = none) {
//         game.style.display = block;
//     }     
//  }
// }

// function to sign in a player - User login on entering their name to the input field and clicking 'Start'

function signIn (){
    playerName = document.getElementById("name").value;
    console.log(playerName);
    if (playerName !== "") {
       alert (`Welcome ${playerName}`);
       $(document).ready(function(){
        $(".sign-in").click(function() {
            $(this).hide("slow");
        });
            $(".game").toggle(startGame());
        });
    } else 
        alert ("You must log in to play this game");
       
    } 
   
   
    // function to generate numbers.  The return of startGame is numArray?!?!?!?!?! is this correct?

 function startGame () {   
// Create 5 random numbers and pass them into the 5 html buttons.  Tidy up assigning random to coloured buttons before submitting.
    // let toggle = document.getElementsByClassName("game-button");
   
    
    num1 = Math.floor(Math.random()*21);    
    let purpleButtonNumber = document.getElementsByClassName("purple-button")[0];
    purpleButtonNumber.innerHTML = num1;
    
    num2 = Math.floor(Math.random()*21);
    let pinkButtonNumber = document.getElementsByClassName("pink-button")[0];
    pinkButtonNumber.innerHTML = num2;

    num3 = Math.floor(Math.random()*21);
    let yellowButtonNumber = document.getElementsByClassName("yellow-button")[0];
    yellowButtonNumber.innerHTML = num3;

    num4 = Math.floor(Math.random()*21);
    let blueButtonNumber = document.getElementsByClassName("blue-button")[0];
    blueButtonNumber.innerHTML = num4;

    num5 = Math.floor(Math.random()*21);
    let greenButtonNumber = document.getElementsByClassName("green-button")[0]
    greenButtonNumber.innerHTML = num5;
    
    numArray = [num1, num2, num3, num4, num5];
    // let i = 1;
    // compareTwoValues(numArray[i--], numArray[i]);

    // let gameButtons = [purpleButtonNumber, pinkButtonNumber, yellowButtonNumber, blueButtonNumber, greenButtonNumber];
    // gameButtons.innerHTML.style.visibility = "hidden";
 }
       
// function to compare two numbers, using Comparison operators to declare Higher/Lower and give them values

// function compareTwoValues (number1, number2) {
       
//         let Higher = number1 < number2;
//         let Lower = number1 > number2;
//         let Equal = number1 == number2;
//     // for (let i = 1; i < numArray.length; i++) 
       
    
//         if (Lower === true) {
//         alert(`${number2} is Lower. Game over!`);

//         } else {
//         if (Higher === true) {
//         alert(`${number2} is Higher}`);
//         // compareTwoValues(number1: numArray[i--], number2: numArray[i]);
//     } else {
//         alert("The numbers are the same!Let's continue!!");
//         // compareTwoValues(number1: numArray[i--], number2: numArray[i]);
//     }
//     alert (`Game over! Well played!! Your score is ${correctGuessTally()}`)
// }
//     }

    // function myReveal () {
    //     let showHide = document.getElementsByClassName("purple-button")[0];
    //     if (showHide.style.display === "none") {
    //         showHide.style.display === "block";
    //     } else {
    //         showHide.style.display === "none"
    //     }

    // }
// compare result (Higher/Lower) to userGuess

/*if user chooseHigher and number is higher than previous number, 
 * then jump to next number in iteration and continue game; 
 * if user chooseHigher and number is lower than previuos number, then game over.
 * But if user chooseLower and number is lower than previous number, then jump 
 * to next number in iteration and continue game; if user chooselower and number is higher than previous number, then game over.
 * code for number being tested is higher than previous number = chooseHigher ? jump to next number : game over;
 * code for number being tested is lower than previous number = chooseLower ? jump to next number : game over;*/

let currentIndex = 0;

// function for game to loop to next number guess
function nextNumber () {
    currentIndex++;
}
// function to allow user guess Higher/Lower


// function to check whether user's guess matched hidden number

function checkGuess (id) {

    const newRandomNumber = Math.floor(Math.random()* 21);
    
    const isHigher = numArray[currentIndex+1] > numArray[currentIndex] ? true : false;
    console.log(num2);

    if (
        isHigher && id === 'choose-Higher' ||
        !isHigher && id === 'choose-Lower'
    ) {
        true;
        alert("Wizard!! You guessed correctly.");
        correctGuessTally();
    } else {
        false;
        alert("Wrong :( ");
        gameOver();
    }  
}  
    // let isCorrectGuess;
    
    // userGuessHigher === compareNums(Higher);
    
    // if (isCorrect) {
    //     alert("You're right!");
    // } else 
    //     alert("You're wrong :( ");
    // }
//         ? compareTwoValues () : endGame();
    
//     if (userGuessHigher && higher()) {
//         if (userGuessLower && lower()){
//         let result = true;
//         alert("Correct!!")
//         correctGuessTally();
        
//     } else if (userGuessHigher && lower()) {
//         if (userGuessLower && higher()) {
//         alert("Wrong!!")
//         let result = false;
//     }
// } 
//     }}

// function to increment correct guesses - based on the Score area from Love Maths

function correctGuessTally () {
    let oldScore = parseInt(document.getElementById("tally-correct").innerText);
    document.getElementById("tally-correct").innerText = ++oldScore;
}

// function to increment incorrect guesses - based on the Score area from Love Maths

function incorrectGuessTally () {
    let oldScore = parseInt(document.getElementById("tally-incorrect").innerText);
    document.getElementById("tally-incorrect").innerText = ++oldScore;
}

function gameOver () {
    playerName = document.getElementById("name").value;
    alert(`Goodbye ${playerName}`);
   
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