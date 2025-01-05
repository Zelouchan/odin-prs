let humanScore = 0;
let computerScore = 0;
let userChoice = "";

// asks for the name of the player and displays it on the page WORKING FINE
function getName(){
   let player = prompt("What should I call you?")
   return player;
}

const container = document.querySelector(".name");
const content = document.createElement("div");
content.classList.add("name");
content.textContent = getName();
container.appendChild(content);    

//recognizes which button is clicked and puts input into getHumanChoice
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id === "paper") {
            userChoice = button.id; 
        } else if (button.id === "rock") {
            userChoice = button.id; 
        } else if (button.id === "scissors") {
            userChoice = button.id; 
        }
        });
    });


// loops the game
// const loops = Math.max(computerScore, humanScore);

  function playGame() {
    for (let i = 0; i < 5; i++)
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
        const humanChoice = userChoice;


        // getHumanChoice();
        getComputerChoice();


// plays the actual game
        function playRound() {
            if        (humanChoice === computerChoice) {
                return 'draw'}
                
            else if (humanChoice == 'paper' && computerChoice == "rock") {
                return 'win'} 
            else if (humanChoice == 'rock' && computerChoice == "scissors") {
                return 'win'} 
            else if (humanChoice == 'scissors' && computerChoice == "paper") {
                return 'win';}
                
            else {
                return 'lose';}
            }

            // prints the choices of player and computer to the page
            const containers = document.querySelector(".chosen");
            const contents = document.createElement("div");
            contents.classList.add(".choices");
            contents.textContent = ("You picked " + userChoice + " and computer picked "+ computerChoice);
            containers.appendChild(contents);

        playRound(humanChoice, computerChoice);

        // win or lose message
        function message() {
            if    (playRound() == 'draw') { 
                    return "It is a tie! Try again"
                        }             
            else if (playRound() == 'win') {
                   return ("You Win! " + humanChoice + " beats " + computerChoice + "." ); }          
            else { 
                    return ("You Lost! " + computerChoice + " beats " + computerChoice + ".");
                            }
             }

        // displays the win or lose message WORKING FINE
        const container1 = document.querySelector(".result");
        const content1 = document.createElement("div");
        content1.classList.add(".result");
        content1.textContent = message();
        container1.appendChild(content1);
                            
        function score() {
            let result = playRound();
            if  (result === 'win') {
                humanScore++;
                }
            else if (result === 'lose') {
                computerScore++;
                }               
            return {computerScore, humanScore}}
            console.log(score);
            
        }
  }  
    
playGame(); 