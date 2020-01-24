var guesses = 0;
var min = 19;
var max = 120;
var valMin = 1;
var valMax = 12;
var randomNum = Math.random() * (+max - +min) + +min;
var ranNumRound = Math.round(randomNum);
var randomNumber = document.getElementById("randomNumber").innerHTML = ranNumRound;
var randomVal1 = Math.random() * (+valMax - +valMin) + +valMin;
var randomVal2 = Math.random() * (+valMax - +valMin) + +valMin;
var randomVal3 = Math.random() * (+valMax - +valMin) + +valMin;
var randomVal4 = Math.random() * (+valMax - +valMin) + +valMin;

var blueVal = Math.round(randomVal1);
var redVal = Math.round(randomVal2);
var purpleVal = Math.round(randomVal3);
var greenVal = Math.round(randomVal4);

var userScore = 0;
var userLosses = 0;
var points = 0;
var blueCrystal = document.getElementById("blueCrystal").onclick = function () {
  points = points + blueVal;
  console.log(points);
  document.getElementById("score").innerHTML = points;
  winLose();

};
var redCrystal = document.getElementById("redCrystal").onclick = function () {
  points = points + redVal;
  console.log(points);
  document.getElementById("score").innerHTML = points;
  winLose();

};
var greenCrystal = document.getElementById("greenCrystal").onclick = function () {
  points = points + greenVal;
  console.log(points);
  document.getElementById("score").innerHTML = points;
  winLose();

};
var purpleCrystal = document.getElementById("purpleCrystal").onclick = function () {
  points = points + purpleVal;
  console.log(points);
  document.getElementById("score").innerHTML = points;
  winLose();

};
function winLose() {
  if (points === ranNumRound) {

    document.getElementById("result").innerHTML = "You won";
    userScore++;
    console.log("You win");
    document.getElementById("wins").innerHTML = userScore;
    reset();

  }
  else if (points > ranNumRound) {
    document.getElementById("result").innerHTML = "You lose";
    userLosses++;
    console.log("You lose");
    document.getElementById("losses").innerHTML = userLosses;
    reset();
  }
}
function reset() {
  randomNum = Math.random() * (+max - +min) + +min;;
  ranNumRound = Math.round(randomNum);
  document.getElementById("randomNumber").innerHTML = ranNumRound;
  points = 0;
}




