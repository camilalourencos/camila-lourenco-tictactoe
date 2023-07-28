class Player {
    constructor(name){
        this.name = name;
    }
}

function boardCreation() {
    let board = [
        ['','',''],
        ['','',''],
        ['','',''],
    ]

    return board;
}

function boardPosition(position, player1, player2) {
    let board = boardCreation();
    if (player2.name === ""){
        board[position] = [player1.name, "", ""];
    } else {
        board[position] = [player1.name, player2.name, ""];
    }
    
    return board;

}

module.exports = {
    Player,
    boardCreation,
    boardPosition,
}