/* Action plan 
1. Prompt the user to choose one of the three options 
- rock, paper or scissors
2. Make the computer choose one of the options itself
3. Compare the two options
4. Choose the winner
5. Display the result
*/


let playerScoreCounter = 0;
let CPUScoreCounter = 0;

let rockImage = document.getElementById('dwayne');
let paperImage = document.getElementById('paperman');
let scissorsImage = document.getElementById('edward');

let showPlayerChoice = document.querySelector('#player-choice')
let showCPUChoice = document.querySelector('#CPU-choice');

let showRoundResult = document.querySelector('.show-round-result');

let playerScore = document.querySelector('#playerScore');
let CPUScore = document.querySelector('#CPUScore')

console.log(showRoundResult);

rockImage.addEventListener('click',checkPlayerChoice);
paperImage.addEventListener('click',checkPlayerChoice);
scissorsImage.addEventListener('click',checkPlayerChoice);

rockImage.addEventListener('mouseenter',addTransition);
paperImage.addEventListener('mouseenter',addTransition);
scissorsImage.addEventListener('mouseenter',addTransition);

rockImage.addEventListener('mouseleave',removeTransition);
paperImage.addEventListener('mouseleave',removeTransition);
scissorsImage.addEventListener('mouseleave',removeTransition);


function checkPlayerChoice(e){
    let playerClick = e.target.id;
    
    showPlayerChoice.textContent = playerClick;
    returnComputerPlay();
}

function addTransition(e){
    e.target.classList.add('fighting');
}

function removeTransition(e){
    e.target.classList.remove('fighting');
}

/* Determine and return computer's pick option */
function returnComputerPlay() {

    let randomNumber = Math.floor(Math.random() * 3);
    let computerPlayResult;
    if (randomNumber==0){
        computerPlayResult = "ROCK";
    } else if (randomNumber==1) {
        computerPlayResult = "PAPER";
    } else {
        computerPlayResult = "SCISSORS";
    }

    showCPUChoice.textContent = computerPlayResult;

    roundTrack();
}

let roundResult;
let roundWiner;


function roundTrack(){

    if ((showPlayerChoice.textContent == 'dwayne') && ((showCPUChoice.textContent == 'PAPER')) ){
        showRoundResult.textContent = "You Lose! Paperman beats Dwayne";
        CPUScoreCounter +=1;
        CPUScore.textContent = CPUScoreCounter;
        roundWiner = "CPU";
    } else if ((showPlayerChoice.textContent == 'dwayne') && (showCPUChoice.textContent == 'SCISSORS')){
        showRoundResult.textContent = "You Win! Dwayne beats Edward!";
        playerScoreCounter +=1;
        playerScore.textContent = playerScoreCounter;
        roundWiner = "PLAYER";
    } else if ((showPlayerChoice.textContent == 'paperman') && (showCPUChoice.textContent == 'ROCK')){
        showRoundResult.textContent = "You Win! Paperman beats Dwayne!";
        playerScoreCounter +=1;
        playerScore.textContent = playerScoreCounter;
        roundWiner = "PLAYER";
    } else if ((showPlayerChoice.textContent == 'paperman') && (showCPUChoice.textContent == 'SCISSORS')){
        showRoundResult.textContent = "You Lose! Edward beats Paperman";
        CPUScoreCounter +=1;
        CPUScore.textContent = CPUScoreCounter;
        roundWiner = "CPU";
    } else if ((showPlayerChoice.textContent == 'edward') && (showCPUChoice.textContent == 'ROCK')) {
        showRoundResult.textContent = "You Lose! Dwayne beats Edward";
        CPUScoreCounter +=1;
        CPUScore.textContent = CPUScoreCounter;
        roundWiner = "CPU";
    } else if ((showPlayerChoice.textContent == 'edward') && (showCPUChoice.textContent == 'PAPER')){
        showRoundResult.textContent = "You Win! Dwayne beats Paperman!";    
        playerScoreCounter +=1;
        playerScore.textContent = playerScoreCounter;
        roundWiner = "PLAYER";
    } else {
        showRoundResult.textContent = "It's a tie! You can repeat the round!";
        roundWiner = "NO WINNER";
    }

    checkGameWinner();
}

function checkGameWinner(){
    if (playerScoreCounter == 5){
        showRoundResult.textContent = "Amazingly done! Now leave as a winner!"
        CPUScore.textContent = 0;
        playerScore.textContent = 0;
        playerScoreCounter = 0;
        CPUScoreCounter = 0;
    } else if (CPUScoreCounter == 5){
        showRoundResult.textContent = "You lost! Leave and don't look at me!"
        CPUScore.textContent = 0;
        playerScore.textContent = 0;
        playerScoreCounter = 0;
        CPUScoreCounter = 0;    
    }
}

// /*---------------------------------------------------------------------------------*/

// function returnPlayerSelection(){
    
//     let KeepGoing = true;
//     let playerChoice;

//     while(KeepGoing) {
        
//         playerChoice = prompt("Please choose between 'Rock', 'Paper' or 'Scissors':")
    
//         playerChoice = playerChoice.toUpperCase();

//         if (playerChoice == 'ROCK' || playerChoice == 'PAPER' || playerChoice == 'SCISSORS') {
//             KeepGoing = false;
//         } else{
//             alert("You can only choose 'ROCK', 'PAPER' or 'SCISSORS'. Please try again.");
//         }   
//     }

//     return playerChoice;
// }
// /*---------------------------------------------------------------------------------*/

/*
let startGameBtn = document.getElementById('start-game-btn');

startGameBtn.addEventListener('click',returnPlayerChoice);


function playRound(playerSelection,computerSelection){

    playerSelection = returnPlayerChoice();
    computerSelection = returnComputerPlay();

    let roundResult;
    let roundWiner;

    if ((playerSelection == 'ROCK') && ((computerSelection == 'PAPER')) ){
        roundResult = "You Lose! Paper beats Rock";
        roundWiner = "CPU";
    } else if ((playerSelection == 'ROCK') && (computerSelection == 'SCISSORS')){
        roundResult = "You Win! Rock beats Paper!";
        roundWiner = "PLAYER";
    } else if ((playerSelection == 'PAPER') && (computerSelection == 'ROCK')){
        roundResult = "You Win! Paper beats Rock!";
        roundWiner = "PLAYER";
    } else if ((playerSelection == 'PAPER') && (computerSelection == 'SCISSORS')){
        roundResult = "You Lose! Scissors beats Paper";
        roundWiner = "CPU";
    } else if ((playerSelection == 'SCISSORS') && (computerSelection == 'ROCK')) {
        roundResult = "You Lose! Rock beats Scissors";
        roundWiner = "CPU";
    } else if ((playerSelection == 'SCISSORS') && (computerSelection == 'PAPER')){
        roundResult = "You Win! Scissors beats Paper!";    
        roundWiner = "PLAYER";
    } else {
        roundResult = "It's a tie!";
        roundWiner = "NO WINNER";
    }

    return roundWiner;
}
*/