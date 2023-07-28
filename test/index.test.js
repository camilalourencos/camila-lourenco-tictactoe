const { Player } = require("../src/index");

describe('Players', () => {
    test('Should return the player 1 name as “X”', () => {
        const player1 = new Player("X");
        expect(player1.name).toBe("X");
    })
});