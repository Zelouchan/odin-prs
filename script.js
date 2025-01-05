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
        userChoice = button.id; 
        singleRound();
        });
    });

    function singleRound() {
        let computerChoice = getComputerChoice();
        const result = playRound(userChoice, computerChoice);
        updateResult(result);
        updateMessage(result, userChoice, computerChoice);
        updateChoices(userChoice, computerChoice);
        };
        

        function playRound(userChoice, computerChoice) {
            if        (userChoice === computerChoice) {
                return 'draw'}
                
            else if ((userChoice == 'paper' && computerChoice == "rock") ||
            (userChoice == 'rock' && computerChoice == "scissors") ||
            (userChoice == 'scissors' && computerChoice == "paper")) {
                return 'win'}
                
            else {
                return 'lose';}
            }

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
       
        // win or lose message
        function message() {
            if    (playRound() == 'draw') { 
                    return "It is a tie! Try again"
                        }             
            else if (playRound() == 'win') {
                   return ("You Win! " + humanChoice + " beats " + computerChoice + "." ); }          
            else { 
                    return ("You Lost! " + computerChoice + " beats " + humanChoice + ".");
                            }
             }

        // displays the win or lose message
        const container1 = document.querySelector(".result");
        const content1 = document.createElement("div");
        content1.classList.add(".result");
        content1.textContent = message();
        container1.appendChild(content1);
                            
//         function score() {
//             let result = playRound();
//             if  (result === 'win') {
//                 humanScore++;
//                 }
//             else if (result === 'lose') {
//                 computerScore++;
//                 }               
//             return {computerScore, humanScore}}
//             console.log(score);
            
//         }
//   }  
// prints the choices of player and computer to the page
const containers = document.querySelector(".chosen");
const contents = document.createElement("div");
contents.classList.add(".choices");
contents.textContent = ("You picked " + userChoice + " and computer picked "+ computerChoice);
containers.appendChild(contents);
    
// playGame(); 