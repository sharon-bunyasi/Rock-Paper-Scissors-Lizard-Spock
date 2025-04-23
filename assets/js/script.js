//DOM elements
let button = document.querySelectorAll('.choice');
let resultMessage = document.getElementById('result-message');
let playerScoreDisplay = document.getElementById('player-score');
let computerScoreDisplay = document.getElementById('computer-score');
let resetButton = document.getElementById('reset');
let playerChoiceDisplay = document.getElementById('player-choice');
let computerChoiceDisplay = document.getElementById('computer-choice');
let choices = ['rock','paper','scissors','lizard','spock'];
let playerScore = 0;
let computerScore = 0;

//Game logic functions

//functions to get a random choice for the comouter
function getComuterChoice() {
    let randomIndex = Math.floor(Math.random()*choices.lenght);
    return choices[randomIndex];
}