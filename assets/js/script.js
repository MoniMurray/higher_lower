
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
// IF THESE NUMBERS AND NUMARRAY WERE GLOBAL VARIABLES I COULD ACCESS THEM IN EVERY FUNCTION
    let num1 = Math.floor(Math.random()*21);
    
    // document.getElementById("purple-button").value = num1;
    let num2 = Math.floor(Math.random()*21);
    // num2.value = parseInt(document.getElementById("pink-button").innerText);
    let num3 = Math.floor(Math.random()*21);
    // num3.value = parseInt(document.getElementById("yellow-button").innerText);
    let num4 = Math.floor(Math.random()*21);
    // num4.value = parseInt(document.getElementById("blue-button").innerText);
    let num5 = Math.floor(Math.random()*21);
    // num5.value = parseInt(document.getElementById("green-button").innerText);
    
    let numArray = [num1, num2, num3, num4, num5];
    console.log(numArray);

    })


// function to startGame and reveal numbers


    

 function startGame () {   

    document.getElementById("purple-button").innerText = numArray[0];
    document.getElementById("pink-button") = numArray[1];
    document.getElementById("yellow-button") = numArray[2];
    document.getElementById("blue-button") = numArray[3];
    document.getElementById("green-button") = numArray[4];
}
    

    function compareTwoValues () {
        document.getElementById()
        // let Higher;
        // let Lower;
        // let result;
    // for (let i = 1; i < numArray.length; i++) 
        let i = 1;
    
        if(numArray[i-1] > numArray[i]) {
        return Lower;
        } else {
        if ((numArray[i-1]) < numArray[i]) {
        return Higher;
    } else {
        result = Equal;
    }
}
    }
    console.log('result');
// compare result (Higher/Lower) to userGuess



function randomNumbers () {

    document.getElementById("purple-button") = num1;
    num1.display.none;


}

// function to allow user guess Higher/Lower

// function to check whether user's guess matched hidden number

function checkGuess () {
    let userGuessHigher = document.getElementById("choose-Higher");
    let userGuessLower = document.getElementById("choose-Lower");

    let revealedAnswer = startGame(numArray[i])
} 

// function to increment correct guesses - based on the Score area from Love Maths

function correctGuessTally () {
    let oldScore = parseInt(document.getElementById("tally-Correct")).innertext;
    document.getElementById("tally-Correct").innertext = ++oldScore;
}

// function to increment incorrect guesses - based on the Score area from Love Maths

function incorrectGuessTally () {
    let oldScore = parseInt(document.getElementById("tally-Incorrect")).innertext;
    document.getElementById("tally-Incorrect").innertext = ++oldScore;
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


// function drawHeads (xloc, yloc, Red) {
//     c.beginPath();
//     c.fillstyle = Red;
//     c.strokeStyle = "Black" ;
//     c.linewidth = 5;
//     c.arc(xloc, yloc, 100, 0, 2 * Math.PI);
//     c.fill();
//     c.stroke();
//     c.closePath();
//     // draw "?" on Head side
//     c.fillstyle = "Black"
//     c.font = "72px Arial";
//     c.fillText = ("?", xloc, yloc);
// }

// function drawTails (xloc, yloc, flip) {
//     c.beginPath();
//     c.fillstyle = "red";
//     c.strokeStyle = "Black" ;
//     c.linewidth = 5;
//     c.arc(xloc, yloc, 100, 0, 2 * Math.PI);
//     c.fill();
//     c.stroke();
//     c.closePath();
//     // insert flip() on Head side
//     c.fillstyle = "Black"
//     c.font = "72px Arial";
//     c.fillText = (flip, xloc, yloc);
// }