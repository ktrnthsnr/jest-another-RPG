// -- mock test with console.log
const Potion = require('../lib/Potion');
jest.mock('../lib/Potion.js');
console.log(new Potion());
// -- run test $ nmp run test Player


const Player = require('../lib/Player');

test('creates a player object', () => {
    // -- test creates a new player object 'Dave'
    const player = new Player('Dave');
    // -- whereby the test object has 4 properties
    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    // -- refactor by adding this also
    expect(player.inventory).toEqual(
      expect.arrayContaining([expect.any(Object)])
    );
  });

