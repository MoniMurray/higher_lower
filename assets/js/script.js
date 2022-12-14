
/**Game is to generate 5 random numbers between 1-20, user must guess whether each consecutive number is Higher or Lower than the 
 * previous number.  The current number will be kept hidden from the user until they select either the Higher/Lower submit button. The game 
 * will continue until all 5 numbers have been correctly guessed.
 */

// Declare clickable buttons at Global scope

const chooseHigher = document.getElementById("choose-Higher");
const chooseLower = document.getElementById("choose-Lower");
var userGuess = chooseHigher || chooseLower;
var playAgain = document.getElementById("rePlay");


// Declare signin variable at Global scope

var playerName = document.getElementById("name").value;

// Declare game area at Global scope

const gameInstruction = document.getElementById("game-instruction");
const gameEnd = document.getElementById("game-end");

// Declare nums and numArray to use in functions and what I need to compare i+1 to i

var num1;
var num2;
var num3;
var num4;
var num5;

var numArray = [num1, num2, num3, num4, num5];

let currentIndex = 0;

// declare messages to use globally

let messageContainer = document.getElementsByClassName("messages")[0];
let loginAlert = document.getElementById("log-in-msg");
let welcomeMsg = document.getElementById("welcome-msg");
let goodGuessMsg = document.getElementById("good-guess");
let badGuessMsg = document.getElementById("bad-guess");

// Declare Tally section and variables at Global scope

const tallyCorrect = document.getElementById("tally-correct");
const tallyIncorrect = document.getElementById("tally-incorrect");
const answerCount = document.getElementById("answer-count");
const ansCount = parseInt(document.getElementById("answer-count").innerText); 

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
            // user has clicked on Higher or Lower button so compare user selection to hidden numbers
            checkGuess(this.id);
            counter();
            myReveal();
        } else {
            alert("Error"); 
        }
    });}
    // Add event listener for user pressing the enter key after typing their user name on a keyboard, from Love Maths
    document.getElementById("name").addEventListener("keydown", function (event){
        if (event.key === "Enter"){
            signIn();
        }
    });
    // Add event listener for user clicking on the Play Again button
    document.getElementById("rePlay").addEventListener("click", function () {
        if (this.getAttribute("data-type") === "submit2") {
            alert (`Let's play again ${playerName}`);
            location.reload(startGame());
 }
});
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
// using w3schools to learn how to use css to create a pop-up message that is easy for the user to close without distracting from the game
function messageAlertBox () {
    messageContainer = document.getElementsByClassName("messages")[0];
    messageContainer.classList.add("show");
    loginAlert.classList.add("show");
    
    let closeButton = document.getElementById("close-btn");
    closeButton.addEventListener("click", function(){
        let div = this.parentElement;
        div.classList.add("hide");
        messageContainer.classList.remove("show");
        loginAlert.classList.remove("show");
    
    });
}

function messageWelcome () {
    messageContainer = document.getElementsByClassName("messages")[0];
    messageContainer.classList.add("show");
    let personalisedMessage = `Welcome ${playerName}`;
    document.getElementById("welcome-msg").innerHTML = personalisedMessage;
    welcomeMsg.classList.add("show");
    
    let closeButton = document.getElementById("close-btn");
    closeButton.addEventListener("click", function(){
        let div = this.parentElement;
        div.classList.add("hide");
        messageContainer.classList.remove("show");
        welcomeMsg.classList.remove("show");
    
    });
}

function messageGoodGuess () {
    messageContainer = document.getElementsByClassName("messages")[0];
    messageContainer.classList.add("show");
    goodGuessMsg.classList.add("show");
    
    let closeButton = document.getElementById("close-btn");
    closeButton.addEventListener("click", function(){
        let div = this.parentElement;
        div.classList.add("hide");
        goodGuessMsg.classList.remove("show");
        messageContainer.classList.remove("show");
    
    });
}

function messageBadGuess () {
    messageContainer = document.getElementsByClassName("messages")[0];
    messageContainer.classList.add("show");
    badGuessMsg.classList.add("show");
    
    let closeButton = document.getElementById("close-btn");
    closeButton.addEventListener("click", function(){
        let div = this.parentElement;
        div.classList.add("hide");
        badGuessMsg.classList.remove("show");
        messageContainer.classList.remove("show");
    
    });
}

// function to sign in a player - User login on entering their name to the input field and clicking 'Start', toggling signin off and game area on  
function signIn (){
    document.getElementById("name").required = true;
    playerName = document.getElementById("name").value.trim();
    console.log(playerName);
    if (playerName !== "") {
    messageWelcome();
    
       hide();
       show();
    startGame();
     } else 
       messageAlertBox ();
            
    } 
    
// function to generate random numbers.  

 function startGame (gameButton) {   
// Create 5 random numbers and pass them into the 5 html button icons. 
    remove ();

    num1 = Math.floor(Math.random()*20) +1;    
    let purpleButtonNumber = document.getElementsByClassName("purple-button")[0];
    purpleButtonNumber.innerHTML = num1;
          
    num2 = Math.floor(Math.random()*20) +1;
    let pinkButtonNumber = document.getElementsByClassName("pink-button")[0];
    pinkButtonNumber = num2;

    num3 = Math.floor(Math.random()*20) +1;
    let yellowButtonNumber = document.getElementsByClassName("yellow-button")[0];
    yellowButtonNumber = num3;

    num4 = Math.floor(Math.random()*20) +1;
    let blueButtonNumber = document.getElementsByClassName("blue-button")[0];
    blueButtonNumber = num4;

    num5 = Math.floor(Math.random()*20) +1;
    let greenButtonNumber = document.getElementsByClassName("green-button")[0];
    greenButtonNumber = num5;
    
    numArray = [num1, num2, num3, num4, num5];
    // mix the numbers up a little, with a shuffle in the array from YouTube
    numArray.sort((a,b) => 0.5 - Math.random());
 }


 //   reveal the number hidden inside the button icon
function myReveal () {
        
       const gameButton = document.getElementsByClassName("game-button")[currentIndex];
        gameButton.innerHTML = numArray[currentIndex];
      
}
    
// function for game to loop to next number to guess
function nextNumber () {

    currentIndex++;
   }

//  counter to show the user how many guesses out of 4 they're on
   function counter () {

    let ansCount = parseInt(document.getElementById("answer-count").innerText);
    document.getElementById("answer-count").innerText = ++ansCount;

    if (ansCount == 4) {
                          
            chooseHigher.classList.add("hide");
            chooseLower.classList.add("hide");
            gameInstruction.classList.add("hide");
            gameEnd.classList.add("show");
            let personalisedMessage = `Thank you for playing ${playerName}`;
            document.getElementById("game-end").innerHTML = personalisedMessage;
            playAgain.classList.add("show");
      
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
        messageGoodGuess();     
        correctGuessTally();
        nextNumber();
        console.log(currentIndex);
        
    } else {
        incorrectGuessTally();
        nextNumber();
        console.log(currentIndex);
        messageBadGuess();
    }  
    
}
   
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




