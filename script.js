function computerPlay(){
    let randomNum = Math.floor(Math.random() * 3);
    let result;

    switch (randomNum){

        case 0: 
            console.log('computer picked rock');
            return 'rock';
        case 1: 
        console.log('computer picked paper');
            return 'paper';
        case 2: 
        console.log('computer picked scissors');
            return 'scissor';
    }
}

function playRound(user, computer){

    let winner = -1; // 1 = player wins

    if(user === computer){
        return winner;
    }

    if(user === 'rock' && computer === 'scissor'){
        winner = 1;    
    }else if(user === 'paper' && computer === 'rock'){
        winner = 1;
    }else if(user === 'scissor' && computer === 'paper'){
        winner = 1;
    }else{
        winner = 0;
    }
    return winner; 
}

function game(){

    let userScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){

        let computerSelection = computerPlay();
        let playerSelection = prompt("Paper, Scissors or Rock?")

        let result = playRound(playerSelection, computerSelection);

        

        if(result === 1){
            userScore += 1;
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        }else if(result === 0){
            computerScore += 1;
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        }   else{
            console.log(`Tie!`);
        }
    }
   console.log(userScore);
   console.log(computerScore);
}


game();