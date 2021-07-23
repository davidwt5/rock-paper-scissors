const scores = {
    player: 0,
    computer: 0
}

const selections = document.querySelectorAll(".selection");
selections.forEach(selection => {
    selection.addEventListener('click', e => {
        const playerSelection = selection.id;
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);

        if(result === "win") scores.player++;
        else if(result === "lose") scores.computer++;

        printRound(playerSelection, computerSelection, result);

        if(scores.player >= 5) console.log("YOU ARE THE WINNER!!! CONGRATULATIONS!");
        else if(scores.computer >= 5) console.log("YOU ARE THE LOSER!!! BOO!");
    });
});

// Randomly selects rock/paper/scissors
function computerPlay(){
    const choices = ['rock', 'paper', 'scissors'];
    // Returns an integer between [0,3)
    let roll = Math.floor(Math.random() * choices.length);
    return choices[roll];
}

// Takes two inputs and determines whether the first player won
function playRound(p1, p2) {
    p1 = p1.toLowerCase();
    const winCondition = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    }

    if(p1 === p2) return "draw";
    else if(winCondition[p1] === p2) return "win";
    return "lose";
}

// Outputs p1's victory/loss/draw
function printRound(p1, p2, winloss) {
    if(winloss === "draw")
        console.log("Draw!");
    if(winloss === "win")
        console.log(`You win; ${p1} beats ${p2}!`);
    if(winloss === "lose")
        console.log(`You lose; ${p2} beats ${p1}!`);
}