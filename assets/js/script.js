
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
console.log(numArray);
// const gameButton = document.getElementsByClassName("game-button");
// console.log(gameButton);

let currentIndex = 0;





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
            // alert("boo");
            checkGuess(this.id);
            myReveal();
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

 function startGame (gameButton) {   
// Create 5 random numbers and pass them into the 5 html buttons.  Tidy up assigning random to coloured buttons before submitting.
    // let toggle = document.getElementsByClassName("game-button");
   
    // hide content of .game-button until user guesses Higher/Lower
  
    num1 = Math.floor(Math.random()*21);    
    let purpleButtonNumber = document.getElementsByClassName("purple-button")[0];
    purpleButtonNumber.innerHTML = num1;
          
    num2 = Math.floor(Math.random()*21);
    let pinkButtonNumber = document.getElementsByClassName("pink-button")[0];
    pinkButtonNumber = num2;

    num3 = Math.floor(Math.random()*21);
    let yellowButtonNumber = document.getElementsByClassName("yellow-button")[0];
    yellowButtonNumber = num3;

    num4 = Math.floor(Math.random()*21);
    let blueButtonNumber = document.getElementsByClassName("blue-button")[0];
    blueButtonNumber = num4;

    num5 = Math.floor(Math.random()*21);
    let greenButtonNumber = document.getElementsByClassName("green-button")[0]
    // greenButtonNumber.innerHTML = num5;
    greenButtonNumber = num5;
    
    numArray = [num1, num2, num3, num4, num5];
    console.log(numArray);
   
    // gameButton = document.getElementsByClassName("game-button").innerHTML;

    
 }
       
function myReveal () {
        
       const gameButton = document.getElementsByClassName("game-button")[currentIndex];
       console.log(gameButton);
        gameButton.innerHTML = numArray[currentIndex];
        
}
       
        
        // let showHide = document.getElementsByClassName("purple-button")[0];
        // if (showHide.style.display === "none") {
        //     showHide.style.display === "block";
        // } else {
        //     showHide.style.display === "none"
        // }

    
// compare result (Higher/Lower) to user's Guess



// function for game to loop to next number guess
function nextNumber () {
   currentIndex++;
 
}

// function to check whether user's guess matched hidden number

function checkGuess (id) {

    // const newRandomNumber = Math.floor(Math.random()* 21);
    const isHigher = numArray[currentIndex+1] > numArray[currentIndex] ? true : false;
    console.log(currentIndex+1);

    if (
        isHigher && id === 'choose-Higher' ||
        !isHigher && id === 'choose-Lower'
    ) {
        true;
        alert("Wizard!! You guessed correctly.");
        // $(this).toggle(); number currently hide() should show() on guess
        
        correctGuessTally();
        nextNumber();
    } else {
        false;
        alert("Wrong :( ");
        gameOver();
    } 
}  

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
    alert(`Goodbye ${playerName}. Thanks for playing`);
           
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