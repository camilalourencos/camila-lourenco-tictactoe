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

function boardPosition(position, player) {
    let board = boardCreation();
    board[position] = player.name;

    console.log(board);
    
    return board;

}

module.exports = {
    Player,
    boardCreation,
    boardPosition,
}