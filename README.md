# rock-paper-scissors
My first responsive non-GUI assignment - JavaScript

A classic Rock Paper Scissors game built with vanilla JavaScript as part of my full-stack web development learning journey on The Odin Project.

# Project Overview
This is a console-based implementation of the Rock Paper Scissors game where a human player competes against the computer over 5 rounds. The project was built to practice core JavaScript fundamentals including functions, loops, conditionals, and scope.

# Features
Computer generates a random choice (rock, paper, or scissors)
Human player inputs their choice via browser prompt
Plays exactly 5 rounds per game
Tracks and displays score after every round
Validates player input — invalid entries do not count as a round
Handles game cancellation gracefully (Escape key)
Declares the final winner after all 5 rounds

# Built With
HTML5
Vanilla JavaScript ES6+ (external script file)

# Project Structure
rock-paper-scissors/
│
├── index.html        # Main HTML file
├── script.js         # All JavaScript logic (linked externally)
└── README.md         # Project documentation

# How to Run
Clone the repository:
git clone https://github.com/Kwamed2k/rock-paper-scissors.git
Open index.html in any web browser
Open the browser Developer Console (press F12 → Console tab) or Ctrl+Shift+J
Follow the prompts to play — enter rock, paper, or scissors when asked

# How to Play
When prompted, type rock, paper, or scissors (not case-sensitive)
The computer picks randomly
The game plays 5 rounds
Scores are updated and displayed after every round
The overall winner is announced at the end

# Win Conditions
Your Choice             Computer Choice       Result
Rock                    Scissors              You Win
Scissors                Paper                 You Win
Paper                   Rock                  You Win
Same                    Same                  Tie
Any other combination    —                    You Lose

# Key JavaScript Concepts Practiced
Functions — defining vs calling, return values
Math.random() — generating random computer choices
let and const — proper variable declaration and scope
for loops — controlling 5 rounds of gameplay
Conditionals (if/else if/else) — determining round winners
Template literals — dynamic console output using ` and ${}
.toLowerCase() and .trim() — sanitizing user input
null handling — graceful cancellation when user presses Escape
Array .includes() — validating player input
++ operator — incrementing scores

# Sample Console Output
=== ROCK PAPER SCISSORS - 5 ROUNDS ===

--- Round 1 ---
You chose: rock
Computer chose: scissors
You win! rock beats scissors
Scores - You: 1, Computer: 0

--- Round 2 ---
You chose: paper
Computer chose: paper
It's a tie!
Scores - You: 1, Computer: 0

...

=== GAME OVER ===
Final Score - You: 3, Computer: 2
🎉 Congratulations! You won the game!

# Status & Roadmap
 Console version — complete
 Browser UI version — coming soon (DOM manipulation)
 Score persistence across sessions
 Best of N rounds selector

# Author
Daniel Junior Kusi 
GitHub: @Kwamed2k
LinkedIn: https://linkedin.com/in/daniel-kusi-6439692b
Learning: The Odin Project — JavaScript Foundations

# Acknowledgements
The Odin Project — for the structured, project-based curriculum
MDN Web Docs — JavaScript reference and documentation
JAVASCRIPT.INFO — For modern javascript tutorials

# License
This project is open source and available under the MIT License.
