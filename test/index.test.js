const { Player, boardCreation } = require("../src/index");

describe('Players', () => {
    test('Should return the player 1 name as “X”', () => {
        const player1 = new Player("X");
        expect(player1.name).toBe("X");
    })
    test('Should return the player 2 name as "O"', () => {
        const player1 = new Player("O");
        expect(player1.name).toBe("O");
    })
});

describe('Board creation', () =>{
    test('Should return true if board is created', () => {
        const board = boardCreation();
        expect(board).toBe(true);
    })
})