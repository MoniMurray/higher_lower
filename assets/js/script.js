
/**Game is to generate 5 random numbers between 1-20, user must guess whether each consecutive number is Higher or Lower than the 
 * previous number.  The numbers will be kept hidden from the user until they select either the Higher/Lower button. 
 */

// Event listener for DOM load and to startGame on button click

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("game").display = none;

    let playerName = document.getElementsByTagName("input").value;
    let signIn = document.getElementById("start-game").click;
    signIn.addEventListener("playerName", function(event){
        if (event.key === "Enter") {
        alert(`Let's play ${playerName}`);
        startGame();
    } else {
            alert("You must sign in to play");
    }
    })
})




//     let buttons = document.getElementsByTagName("button");
//   for (let button of buttons) {
//     button.addEventListener('click', function () {

//         if (this.getElementsByClassName("start-game")) {
//             startGame();
//             alert("Starting Game");
//         } else 
//             if (this.getElementsByClassName("choose-Higher")) {
            
//             alert(`Your guess was ${}`);
//         } else 
//             if (this.getElementsByClassName("choose-Lower")) {
            
//             alert(`Your guess was ${}`);
//         }
//     }}
// })


// function to startGame and reveal numbers

function startGame () {

    document.getElementById("game").display = block;
    
    let num1 = Math.floor(Math.random()*21);
    let num2 = Math.floor(Math.random()*21);
    let num3 = Math.floor(Math.random()*21);
    let num4 = Math.floor(Math.random()*21);
    let num5 = Math.floor(Math.random()*21);
}

function randomNumbers () {

    document.getElementById("purple-button") = num1;
    num1.display.none;


}

// function to allow user guess Higher/Lower


// function to increment score









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
// }