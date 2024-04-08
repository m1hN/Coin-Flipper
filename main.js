// COIN FLIP SIMULATOR

// HTML Variables
let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");

let rollEl = document.getElementById("roll-output");
let oneOut = document.getElementById("1out");
let twoOut = document.getElementById("2out");
let threeOut = document.getElementById("3out");
let fourOut = document.getElementById("4out");
let fiveOut = document.getElementById("5out");
let sixOut = document.getElementById("6out");

// Count Variables
let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;

// Count Variables
let numHeads = 0;
let numTails = 0;

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("diceBtn").addEventListener("click", btnRoll);

function btnClicked() {
  // Generate Random Number
  let randNum = Math.random();
  console.log(randNum);

  // Simulate the Coin Flip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src='img/heads.png' />";
    numHeads++;
    headsEl.innerHTML = numHeads;
    console.log(numHeads);
  } else {
    outputEl.innerHTML = "<img src='img/tails.png' />";
    numTails++;
    tailsEl.innerHTML = numTails;
    console.log(numTails);
  }
}

function btnRoll() {
  // Generate Random
  let randRoll = Math.random();
  console.log(randRoll);

  // Simulate Dice Roll
  if (randRoll < 0.16666666666) {
    rollEl.innerHTML = "<img src='img/1.png' width=300px />";
    num1++;
    oneOut.innerHTML = num1;
  } else if (randRoll < 0.33333333333) {
    rollEl.innerHTML = "<img src='img/2.png' width=300px />";
    num2++;
    twoOut.innerHTML = num2;
  } else if (randRoll < 0.5) {
    rollEl.innerHTML = "<img src='img/3.png' width=300px />";
    num3++;
    threeOut.innerHTML = num3;
  } else if (randRoll < 0.66666666666) {
    rollEl.innerHTML = "<img src='img/4.png' width=300px />";
    num4++;
    fourOut.innerHTML = num4;
  } else if (randRoll < 0.83333333333) {
    rollEl.innerHTML = "<img src='img/5.png' width=300px />";
    num5++;
    fiveOut.innerHTML = num5;
  } else {
    rollEl.innerHTML = "<img src='img/6.png' width=300px />";
    num6++;
    sixOut.innerHTML = num6;
  }
}
