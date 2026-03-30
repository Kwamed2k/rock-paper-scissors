// (Step 1) Testing the console
console.log("Hello world!");

// (Step 2) Algorithm to get computer choice
function getComputerChoice() {
    const randomNum = Math.random();

    if (randomNum < 1/3) {
        return "rock";
    } else if (randomNum < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Testing step 2: getComputerChoice
console.log("=== Test getComputerChoice() ===");
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log("\n");

// (Step 3) Algorithm to get human choice
function getHumanChoice() {
    let choice = prompt("Enter your choice: rock, paper, or scissors");

    if (choice === null) {
        return null;
    }
    return choice.toLowerCase().trim();
}

// (Step 4) Player score variables
humanScore = 0;
computerScore = 0;

// Initializing score variables
console.log("=== (Step 4) Score variables initialized ===");
console.log(`Human score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);
console.log("\n");

// (Step 5) Logic to play a single round
function playRound(humanChoice, computerChoice) {

    // Making humanChoice case-insensitive
    humanChoice = humanChoice.toLowerCase();

    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    
    // Determine winner
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanChoice++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerChoice++;
    }

    console.log(`Scores - You: ${humanScore}, Computer: ${computerScore}\n`);
}
