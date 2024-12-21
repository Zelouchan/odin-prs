let humanScore = 0;
let computerScore = 0;

// asks for input and checks if it is correct
function getHumanChoice() {
    if ( person === 'paper' ) 
        return "papier";
     else if (person === 'rock') 
        return "steen";
     else if (person === 'scissors') 
        return "schaar";
        
    else
        alert("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.");
        return 'wrong';
    }

// loops the game
  function playGame() {
    for ( let i = 0; i < 5; i++) {

        // caluclates random number and gives value
    function getComputerChoice() {
     let result = Math.floor(Math.random() * 3) + 1;

      if (result === 1) {
        return "rock";
        } else if (result === 2) {
        return "paper";
       } else {
        return "scissors";
        }
    }

const computerChoice = getComputerChoice();

// asks fur human input, loops if wrong answer is given untill right answer is put in

            do {
                person = prompt("Pick Paper, Rock or Scissors").toLowerCase();  
             }
             while (getHumanChoice() === 'wrong' );

        const humanChoice = getHumanChoice();
        getHumanChoice();
        getComputerChoice();

// plays the actual game
        function playRound() {
            if        (humanChoice == 'papier' && computerChoice == "paper") {
               return 'draw'} 
            else if   (humanChoice == 'steen' && computerChoice == "rock") {
                return 'draw'} 
            else if   (humanChoice == 'schaar' && computerChoice == "scissors") {
                return 'draw'}
                
            else if (humanChoice == 'papier' && computerChoice == "rock") {
                return 'win'} 
            else if (humanChoice == 'steen' && computerChoice == "scissors") {
                return 'win'} 
            else if (humanChoice == 'schaar' && computerChoice == "paper") {
                return 'win';}
                
            else {
                return 'lose';}
            }

        playRound(humanChoice, computerChoice);
        console.log("You played " + person);
        console.log("Computer played " + computerChoice);
        
        console.log(message());
        score();
        console.log("You have " + humanScore + " points." );
        console.log("Computer has " + computerScore + " points.");
        
        function message() {
            if    (playRound() == 'draw') { 
                    return "It is a draw! Try again"
                        }
                        
            else if (playRound() == 'win') {
                   return ("You Win! " + person + " beats " + computerChoice + "." ); }          
            else { 
                    return ("You Lost! " + computerChoice + " beats " + person + ".");
                            }
             }
                            
        function score() {
            let result = playRound();
            if  (result === 'win') {
                humanScore++;
                }
            else if (result === 'lose') {
                computerScore++;
                }               
            return {computerScore, humanScore}}
            
        }
  }  
    
playGame(); 