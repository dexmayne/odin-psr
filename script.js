const result = document.querySelector('#result');
const playerScoreContainer = document.querySelector('#playerScore');
const computerScoreContainer = document.querySelector('#computerScore');
const playerDisplay = document.querySelector('#playerDisplay');
const computerDisplay = document.querySelector('#ComputerDisplay');
const resetGameMssg = document.querySelector('#resetGameMssg');
const btns = document.querySelectorAll('.sign');
const modal = document.getElementById("myModal");
const resetbutton = document.querySelector('#resetbutton');
let computerPick;
let playerPick;
let winner;
let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    let randomNum = Math.floor(Math.random() * 3);

    let computerPick = 
        randomNum === 0 ? 'rock' :
        randomNum === 1 ? 'paper' : 'scissors';
    console.log(`computer picked ${computerPick}`); //debug
    return computerPick;
}

function playRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        console.log(`Tie`);
        return -1;
    }

    if(playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log(`You win ${playerSelection} beats ${computerSelection}`);
        return 1;    
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        console.log(`You win ${playerSelection} beats ${computerSelection}`);
        return 1;  
    }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log(`You win ${playerSelection} beats ${computerSelection}`);
        return 1;  
    }else{
        console.log(`You Lose ${computerSelection} beats ${playerSelection}`);
        return 0;  
    }
}

// Each time user makes a pick kick off the game..
btns.forEach((button) => {

    button.addEventListener('click', () => {
        
        // Get the player and computer pick
		playerPick = button.title;
		computerPick = computerPlay();

        switch(computerPick){
            case "rock":
                computerDisplay.textContent = "✊";
                break;
            case "scissors":
                computerDisplay.textContent = "✌";
                break;
            case "paper":
                computerDisplay.textContent = "✋";
                break;
        }    
	   
	    playerDisplay.textContent = button.textContent;
    
        winner = playRound(playerPick, computerPick);
        updateScore(winner, playerPick, computerPick);
    });
});

// Event listener for reset button
resetbutton.addEventListener('click', () => {
    console.log("clicked");
    modal.classList.toggle('active');
});


function calculateWinner(){
    if(playerScore == 5){
        result.textContent = 'You win the game!';
		resetGameMssg.textContent = "You won!";
        showReset();
        
    }else if(computerScore == 5){
        result.textContent = 'You lose the game!';  
		resetGameMssg.textContent = "You lost!";
		showReset();
    }
}

function showReset(){
	modal.classList.toggle('active');
	resetGame();
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    playerScoreContainer.textContent = `Player: ${playerScore}`;
    computerScoreContainer.textContent = `Computer: ${computerScore}`;
}

function updateScore(roundWinner, playerChoice, computerChoice){
    if(roundWinner === 1){
        playerScore += 1;
        playerScoreContainer.textContent = `Player: ${playerScore}`;
        result.textContent = 'You Win!';      
    }else if(roundWinner === 0){
        computerScore += 1;
        computerScoreContainer.textContent = `Computer: ${computerScore}`;
        result.textContent = 'You Lose!';
    }else{
        result.textContent = 'Tie!';  
    }
    calculateWinner();
}