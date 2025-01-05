let humanScore = 0;
let computerScore = 0;
let userChoice = "";

function getName(){
   let player = prompt("What should I call you?")
   return player;
}

const container = document.querySelector(".name");
const content = document.createElement("div");
content.classList.add("name");
content.textContent = getName();
container.appendChild(content);    

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
        winner(humanScore, computerScore);
        };
        

        function playRound(userChoice, computerChoice) {
            if (userChoice === computerChoice) {
                return 'draw'
            } else if ((userChoice == 'paper' && computerChoice == "rock") ||
            (userChoice == 'rock' && computerChoice == "scissors") ||
            (userChoice == 'scissors' && computerChoice == "paper")) {
                return 'win'
            } else {
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
       
        function updateChoices(userChoice, computerChoice) {
            const containers = document.querySelector(".chosen");
            containers.innerHTML = "";

            const contents = document.createElement("div");
            contents.classList.add(".choices");
            contents.textContent = ("You picked " + userChoice + " and computer picked "+ computerChoice);
            containers.appendChild(contents);
             }

        function updateMessage(result, userChoice, computerChoice) {
            const containers = document.querySelector(".result");
            containers.innerHTML = "";

            const contents = document.createElement("div");
            contents.classList.add(".result");
            contents.textContent = ("You " + result+ "! " + userChoice + " beats "+ computerChoice);
            containers.appendChild(contents);
             }

        function updateResult(result) {
            if (result === "win") {
                humanScore++;
            } else if (result === "lose") {
                computerScore++;
            }
            const containers = document.querySelector(".playerNameScore");
            containers.innerHTML = "";

            const contents = document.createElement("div");
            contents.classList.add(".result");
            contents.textContent = ("You: " + humanScore);
            containers.appendChild(contents);

            const container = document.querySelector(".computerScore");
            container.innerHTML = "";

            const content = document.createElement("div");
            content.classList.add(".result");
            content.textContent = ("Computer: " + computerScore);
            container.appendChild(content);}


        function winner(humanScore, computerScore) {
            if (humanScore === 5) {
                alert("You win this Game!");
            } else if (computerScore === 5) {
                alert("Computer wins this Game...");
        }
    }