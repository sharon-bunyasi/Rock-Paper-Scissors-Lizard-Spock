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
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

//function to determin the winner
function determineWinner(player, computer){
    if (player === computer) {
        return "it's a draw!";
    }
     
//all winning conditions for player
let wins = {
    rock:['scissors','lizard'],
    paper:['rock','spock'],
    scissors:['paper','lizard'],
    lizard:['spock','paper'],
    spock:['scissors','rock'],
};

//how do diplay when the player wins or loose
if (wins[player].includes(computer)){
    playerScore++;
    return `You win!${capitalize(player)} beats ${capitalize(computer)}.`;
}else{
    computerScore++;
    return `You lose!${capitalize(computer)} beats ${capitalize(player)}.`;
}
}

//function to capitalize words correctly in message
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}


//format choice functions display using font awesome icons
function formatChoice(choice) {
    let iconMap = {
        rock: '<i class="fa-solid fa-hand-back-fist"></i>',
        paper: '<i class="fa-solid fa-hand"></i>',
        scissors: '<i class="fa-solid fa-hand-scissors"></i>',
        lizard: '<i class="fa-solid fa-hand-lizard"></i>',
        spock: '<i class="fa-solid fa-hand-spock"></i>',
    };
    return iconMap[choice] || capitalize(choice);
}

//functions to update the score display
function updateScores(){
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

//Event listeners
button.forEach(button =>{
    button.addEventListener('click', () => {
        let playerChoice = button.getAttribute('data-choice');
        let computerChoice = getComputerChoice();

        //show choices
        playerChoiceDisplay.innerHTML = formatChoice(playerChoice);
        computerChoiceDisplay.innerHTML = formatChoice(computerChoice);

        let result = determineWinner(playerChoice, computerChoice);
        resultMessage.textContent = result;
        updateScores();

    });
});

//Reset game
resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    updateScores();
    resultMessage.textContent = "Choose your move to start the game!";
});