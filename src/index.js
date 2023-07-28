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

module.exports = {
    Player,
    boardCreation,
}