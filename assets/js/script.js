
/**Game is to generate 5 random numbers between 1-20, user must guess whether each consecutive number is Higher or Lower than the 
 * previous number.  The current number will be kept hidden from the user until they select either the Higher/Lower submit button. The game 
 * will continue until all 5 numbers have been correctly guessed.
 */

// Declare clickable buttons at Global scope

const enterGameButton = document.getElementsByClassName("start-game");
const chooseHigher = document.getElementById("choose-Higher");
const chooseLower = document.getElementById("choose-Lower");
var userGuess = chooseHigher || chooseLower;
const answerCount = document.getElementById("answer-count");
const ansCount = parseInt(document.getElementById("answer-count").innerText); 

// Declare signin variable at Global scope

const signInSection = document.getElementsByClassName("sign-in");
var playerName = document.getElementById("name").value;

// Declare game area at Global scope

const gameSection = document.getElementsByClassName("game");
const gameInstruction = document.getElementById("game-instruction");
const gameEnd = document.getElementById("game-end");

// const isHigher = numArray[currentIndex+1] > numArray[currentIndex] ? true : false;

// Declare nums and numArray to use in functions and what I need to compare i+1 to i

var num1;
var num2;
var num3;
var num4;
var num5;

var numArray = [num1, num2, num3, num4, num5];
console.log(numArray);

let currentIndex = 0;

// Declare Tally section and variables at Global scope

const tallySection = document.getElementsByClassName("tally");
const tallyCorrect = document.getElementById("tally-correct");
const tallyIncorrect = document.getElementById("tally-incorrect");

// Event listener for DOM load and to startGame on button click
    
 document.addEventListener("DOMContentLoaded", function() {
   
    let buttons = document.getElementsByTagName("button");
    userGuess = chooseHigher || chooseLower;
    // let gameArea = document.getElementsByTagName("game");
    for (let button of buttons) {
        button.addEventListener("click", function () {

        if (this.getAttribute("data-type") === "submit") {
            signIn();
        
        } else if (userGuess) {
            // user has clicked on Higher or Lower button so compare user selection to compare numbers
            checkGuess(this.id);
            counter();
            myReveal();
        } else {
            alert("Error"); 
        }
    })}
});
   
// functions to toggle between hide and show of sections

function show () {
    var element = document.getElementById("load-game");
    element.classList.add("show");
  }

function hide () {
    var element = document.getElementById("load-signin");
    element.classList.add("hide");
}

function remove (){
    var element = document.getElementById("load-game");
    element.classList.remove("hide");
}

function logInAlert () {
    var element = document.getElementById("log-in");
    element.classList.add("show");
}

// function to sign in a player - User login on entering their name to the input field and clicking 'Start', toggling signin off and game area on  
function signIn (){
    document.getElementById("name").required = true;
    playerName = document.getElementById("name").value;
    console.log(playerName);
    if (playerName !== "") {
       alert (`Welcome ${playerName}`);
       hide();
       show();
    startGame();
     } else 
        // alert ("You must log in to play this game");
       logInAlert();
    } 
    
// function to generate random numbers.  

 function startGame (gameButton) {   
// Create 5 random numbers and pass them into the 5 html buttons. 
    remove ();

    num1 = Math.floor(Math.random()*21) +1;    
    let purpleButtonNumber = document.getElementsByClassName("purple-button")[0];
    purpleButtonNumber.innerHTML = num1;
          
    num2 = Math.floor(Math.random()*21) +1;
    let pinkButtonNumber = document.getElementsByClassName("pink-button")[0];
    pinkButtonNumber = num2;

    num3 = Math.floor(Math.random()*21) +1;
    let yellowButtonNumber = document.getElementsByClassName("yellow-button")[0];
    yellowButtonNumber = num3;

    num4 = Math.floor(Math.random()*21) +1;
    let blueButtonNumber = document.getElementsByClassName("blue-button")[0];
    blueButtonNumber = num4;

    num5 = Math.floor(Math.random()*21) +1;
    let greenButtonNumber = document.getElementsByClassName("green-button")[0]
    greenButtonNumber = num5;
    
    numArray = [num1, num2, num3, num4, num5];
    console.log(numArray);
  
 }


 //    event listener for either the Higher or Lower button to be clicked, indicating user has made a choice and the current hidden number is to be revealed.
function myReveal () {
        
       const gameButton = document.getElementsByClassName("game-button")[currentIndex];
       console.log(gameButton);
        gameButton.innerHTML = numArray[currentIndex];
        console.log(numArray[currentIndex]);
      
}
    
// function for game to loop to next number guess
function nextNumber () {

    currentIndex++;
   }

   function counter () {

    let ansCount = parseInt(document.getElementById("answer-count").innerText);
    document.getElementById("answer-count").innerText = ++ansCount;

    if (ansCount == 4) {
                          
            chooseHigher.classList.add("hide");
            chooseLower.classList.add("hide");
            gameInstruction.classList.add("hide");
            gameEnd.classList.add("show");
            // gameOver();
      
    } else {
    ++ansCount;
   }
}

// function to check whether user's guess matched hidden number
function checkGuess (id) {

        const isHigher = numArray[currentIndex+1] > numArray[currentIndex] ? true : false;
      
   
    if (
        isHigher && id === 'choose-Higher' ||
        !isHigher && id === 'choose-Lower'
    ) {
        true;
        alert("Wizard!! You guessed correctly.");      
        correctGuessTally();
        nextNumber();
        console.log(currentIndex);
    } else {
        false;
        alert("Wrong guess, sorry :( ");
        incorrectGuessTally();
        nextNumber();
        console.log(currentIndex);
    }  
    
}
     
    
    // for (let currentIndex = 0; currentIndex < numArray.length; currentIndex++) {
    //     if (currentIndex <= numArray.length){
    //         currentIndex++;
    //     } else 
    //     {
    //         gameOver();
    //     }
    //         }
 
 

// function to increment correct guesses score - based on the Score area from Love Maths

function correctGuessTally () {
    let oldScore = parseInt(document.getElementById("tally-correct").innerText);
    document.getElementById("tally-correct").innerText = ++oldScore;
}

// function to increment incorrect guesses score - based on the Score area from Love Maths

function incorrectGuessTally () {
    let oldScore = parseInt(document.getElementById("tally-incorrect").innerText);
    document.getElementById("tally-incorrect").innerText = ++oldScore;
}

// function youWin () {

// }

// function endGame () {
//     while (currentIndex < numArray[4]) {
//         nextNumber();
//     }
// }

function gameOver () {
    playerName = document.getElementById("name").value;
    // do {
    //     nextNumber();
    // }
        // while (currentIndex < numArray.length){
    
    alert(`Goodbye ${playerName}. Thanks for playing`);
    throw `Game Over!`; 
    // clear();

}


