function computerPlay(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    // Returns an integer between [0,3)
    let roll = Math.floor(Math.random() * choices.length);
    return choices[roll];
}