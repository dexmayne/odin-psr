const result = document.querySelector('#result');
const playerScoreContainer = document.querySelector('#playerScore');
const computerScoreContainer = document.querySelector('#computerScore');
const btns = document.querySelectorAll('img');
const playerChoice = document.querySelector('#playerChoice');
const computerChoice = document.querySelector('#computerChoice');
let computerPick;
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


//Each time user makes a pick kick off the game..
btns.forEach((button) => {

    button.addEventListener('click', () => {
        
        
        //Get the Computers Pick
        computerPick = computerPlay();
       
        // Display the Player and Computer pick on UI
        playerChoice.textContent = `Player Choose ${button.alt}`;
        computerChoice.textContent = `Computer Choose ${computerPick}`;
        
        //Play a round
        winner = playRound(button.alt, computerPick);
        updateScore(winner, button.alt, computerPick);
    });
});

function calculateWinner(){
    if(playerScore == 5){
        result.classList.add('success');
        result.textContent = 'You win the game!';
        resetGame();
        
    }else if(computerScore == 5){
        result.classList.add('failure');
        result.textContent = 'You lose the game!';  
        resetGame();
    }
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
        result.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
        
                
    }else if(roundWinner === 0){
        computerScore += 1;
        computerScoreContainer.textContent = `Computer: ${computerScore}`;
        result.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
    }else{
        result.textContent = 'Tie!';  
    }

    calculateWinner();
}