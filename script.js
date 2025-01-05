let humanScore = 0;
let computerScore = 0;

// asks for the name of the player and displays it on the page
function getName(){
   let player = prompt("What should i call you?")
   return player
}

const container = document.querySelector(".name");

const content = document.createElement("div");
content.classList.add(".name");
content.textContent = getName();

container.appendChild(content);

// asks for input and checks if it is correct
function getHumanChoice() {
    
    }

// loops the game
  function playGame() {
    for (let i = 0; i < 1; i++)
     {
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

            const containers = document.querySelector(".choices");

            const contents = document.createElement("div");
            contents.classList.add(".choices");
            contents.textContent = ("You picked " + person + " and computer picked "+ computerChoice);
            
            containers.appendChild(contents);

        playRound(humanChoice, computerChoice);
        console.log("You played " + person);
        console.log("Computer played " + computerChoice);
        
        console.log(message());
        score();
        console.log("You have " + humanScore + " points." );
        console.log("Computer has " + computerScore + " points.");


        // win or lose message
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

        // displays the win or lose message
        const container = document.querySelector(".result");

const content = document.createElement("div");
content.classList.add(".result");
content.textContent = message();

containers.appendChild(content);
                            
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