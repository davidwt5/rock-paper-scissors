const scores = {
    player: document.getElementById('player-score'),
    computer: document.getElementById('computer-score')
}

const selections = document.querySelectorAll('.selection');
selections.forEach(selection => {
    selection.addEventListener('click', e => {
        const playerSelection = selection.id;
        const computerSelection = computerPlay();
        const roundResult = playRound(playerSelection, computerSelection);

        if(roundResult === 'win') scores.player.innerText++; // Funky type coersion from string->number->string (it works)
        else if(roundResult === 'lose') scores.computer.innerText++;

        // Print result to HTML
        const roundResultContainer = document.getElementById('round-result');
        roundResultContainer.innerText = roundResult.toUpperCase();

        const finalResult = document.getElementById('final-result');
        if(scores.player.innerText >= 5) {
            finalResult.innerText = 'VICTORY';
            endGame();
        } else if(scores.computer.innerText >= 5) {
            finalResult.innerHTML = 'DEFEAT';
            endGame();
        }
    });
});

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', e => {
    resetGame();
});

function resetGame(){
    const main = document.getElementById('main');
    main.classList.remove('inactive');

    const ending = document.getElementById('ending');
    ending.classList.add('inactive');

    scores.player.innerText = 0;
    scores.computer.innerText = 0;
}

function endGame(){
    const main = document.getElementById('main');
    main.classList.add('inactive');

    const ending = document.getElementById('ending');
    ending.classList.remove('inactive');
}

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

function printRound(winloss) {
    const result = document.getElementById('result');
    if(winloss === "draw")
        console.log("Draw!");
    if(winloss === "win")
        console.log(`You win`);
    if(winloss === "lose")
        console.log(`You lose`);
}