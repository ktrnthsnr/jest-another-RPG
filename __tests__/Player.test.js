// -- mock test with console.log
const Potion = require('../lib/Potion');
jest.mock('../lib/Potion.js');
console.log(new Potion());
// -- run test $ nmp run test Player

//-- import the Player() constructor
const Player = require('../lib/Player');

// -- first test, by creating new player object
test('creates a player object', () => {
    // -- new player object 'Dave'
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

  // -- second test, for stats
  test("gets player's stats as an object", () => {
    // -- create a new object 'Dave'
    const player = new Player('Dave');  
    // -- the new object will have 4 new properties
    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
  });

  // -- another test
  test('gets inventory from player or returns false', () => {
    const player = new Player('Dave');  
    // -- return an array
    expect(player.getInventory()).toEqual(expect.any(Array));  
    player.inventory = [];  
    expect(player.getInventory()).toEqual(false);
  });
