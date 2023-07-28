const { Player, boardCreation, boardPosition } = require("../src/index");

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
    test('Should return columns length as 3', () => {
        const board = boardCreation();
        expect(board.length).toBe(3);
    })
    test('Should return first row length as 3', () => {
        const board = boardCreation();
        expect(board[0].length).toBe(3);
    })
    test('Should return second row length as 3', () => {
        const board = boardCreation();
        expect(board[1].length).toBe(3);
    })
    test('Should return third row length as 3', () => {
        const board = boardCreation();
        expect(board[2].length).toBe(3);
    })
})

describe('Game', () =>{
    test('Should return "X" on the first cell', () => {
        const player1 = new Player("X");
        const player2 = new Player("");
        let board = boardCreation();
        const mockedBoard = [
            ['X','',''],
            ['','',''],
            ['','',''],
        ];
        board = boardPosition(0, player1, player2);
        expect(board).toStrictEqual(mockedBoard);
    })
    test('Should return "X" on the first cell and "O" on the second cell', () => {
        const player1 = new Player("X");
        const player2 = new Player("O");
        let board = boardCreation();
        const mockedBoard = [
            ['X','O',''],
            ['','',''],
            ['','',''],
        ];
        board = boardPosition(0, player1, player2);
        expect(board).toStrictEqual(mockedBoard);
    })
})
