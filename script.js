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

function game(){

    let playerScore = 0;
    let computerScore = 0;
    let roundWinner;

        let playerSelection = prompt("Enter either Rock, Paper or Scissors?").toLowerCase();
        console.log(`Player picked ${playerSelection}`);  //debug

        roundWinner = playRound(playerSelection, computerPlay());     

        if(roundWinner === 1){
            playerScore += 1;
        }else if(roundWinner === 0){
            computerScore += 1;
        }
    
   console.log(`Game Over: PlayScore = ${playerScore} and ComputerScore = ${computerScore}`);
   
}


game();