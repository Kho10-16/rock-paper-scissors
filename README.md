# Rock Paper Scissors

A simple Rock Paper Scissors game written in vanilla JavaScript. Click a button to play rounds against the computer, and the result and score show up right on the page. The first player to reach 5 points wins the game, and the scores then reset so a new game can begin.

## Features

- Three buttons on the page: **Rock**, **Paper** and **Scissors**
- The computer picks randomly (rock, paper and scissors each have a 1/3 chance)
- After each round the page shows whether you won, lost or drew, plus what the computer chose
- A live scoreboard shows `You: X | Computer: Y`
- First to 5 points wins: the page shows "Human win" or "Computer win", and both scores go back to 0 for the next game

## Getting Started

The project has no dependencies and no build step.

1. Clone the repository:
   ```bash
   git clone https://github.com/Kho10-16/rock-paper-scissors.git
   cd rock-paper-scissors
   ```
2. Open `index.html` in your browser.
3. Click **Rock**, **Paper** or **Scissors** to play a round.

## Rules

| You \ Computer | rock | paper | scissors |
|---|---|---|---|
| **rock** | Draw | Lose | Win |
| **paper** | Win | Draw | Lose |
| **scissors** | Lose | Win | Draw |

Each round you win is worth 1 point, and draws score nothing. The first player to reach 5 points wins the game.

## Project Structure

```
rock-paper-scissors/
├── index.html   # Page with the result area, scoreboard and the three buttons
└── script.js    # Game logic and button event listeners
```

Main parts of `script.js`:

| Name | Description |
|---|---|
| `humanScore` / `computerScore` | Global variables that hold the current scores |
| `getComputerChoice()` | Uses `Math.random()` to return `"rock"`, `"paper"` or `"scissors"` |
| `playRound(humanChoice, computerChoice)` | Decides the winner of one round, updates the scores, writes the result to `#results` and the score to `#score`, and resets both scores when either one reaches 5 |
| Button listeners | Clicking `#rock`, `#paper` or `#scissors` calls `playRound` with that choice and a random computer choice |

## Known Limitations

- When a game ends, the winner message replaces that round's result, and the scoreboard keeps showing the final score (for example `You: 5 | Computer: 3`) until the next round is played.
- There is no styling yet, so the page uses the browser's default look.

## Built With

- HTML
- JavaScript (ES6)
