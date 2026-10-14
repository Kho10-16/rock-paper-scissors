# Rock Paper Scissors

A simple Rock Paper Scissors game written in vanilla JavaScript. You enter your choice through a browser prompt and play 5 rounds against the computer. The result of each round and the final winner are printed to the browser console.

## Features

- The computer picks randomly (rock, paper and scissors each have a 1/3 chance)
- You enter your choice in a `prompt` dialog; input is case-insensitive (`Rock`, `ROCK` and `rock` all work)
- 5 rounds per game, with each round's outcome and the computer's choice logged to the console
- After 5 rounds the scores are compared and the overall winner (or a draw) is announced

## Getting Started

The project has no dependencies and no build step.

1. Clone the repository:
   ```bash
   git clone https://github.com/Kho10-16/rock-paper-scissors.git
   cd rock-paper-scissors
   ```
2. Open `index.html` in your browser.
3. Open the developer tools (`F12`, or `Cmd + Option + I` on macOS) and switch to the **Console** tab.
4. Type `rock`, `paper` or `scissors` into the prompt 5 times, then check the console for the results.

> Tip: To see every round's output, open the console first and then reload the page to start a new game.

## Rules

| You \ Computer | rock | paper | scissors |
|---|---|---|---|
| **rock** | Draw | Lose | Win |
| **paper** | Win | Draw | Lose |
| **scissors** | Lose | Win | Draw |

Each round won is worth 1 point; draws score nothing. After 5 rounds, the player with more points wins. Equal scores mean a draw.

## Project Structure

```
rock-paper-scissors/
├── index.html   # Entry page, loads script.js
└── script.js    # Game logic
```

Main functions in `script.js`:

| Function | Description |
|---|---|
| `getComputerChoice()` | Uses `Math.random()` to return `"rock"`, `"paper"` or `"scissors"` |
| `getHumanChoice()` | Shows a prompt and returns what the player typed |
| `playGame()` | Sets up both scores, plays 5 rounds and logs the final result |
| `playRound(humanChoice, computerChoice)` | Defined inside `playGame()`; decides the winner of a single round and updates the score |

## Known Limitations

- Results are shown only in the console; there is no graphical interface on the page.
- Input is not validated: anything other than `rock` or `paper` is treated as `scissors`.
- Clicking "Cancel" in the prompt returns `null`, which causes an error and stops the game.

## Built With

- HTML
- JavaScript (ES6)
