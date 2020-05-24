            // -- requires --- //

// -- mock test with console.log
const Potion = require('../lib/Potion');
jest.mock('../lib/Potion.js');
console.log(new Potion());
// -- run test $ nmp run test Player

//-- import the Player module
const Player = require('../lib/Player');

            // -- tests --- //

// -- basic tests, by creating new Player 'object' called (lowercase) player
test('creates a player object', () => {
    // -- new player object 'Dave'
    const player = new Player('Dave');
    // -- whereby the player test object has 4 properties of the expect.toBe() and .toEqual() Jest methods
    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    // -- refactor by adding this also
    expect(player.inventory).toEqual(
      expect.arrayContaining([expect.any(Object)])
    );
  });
  // -- run $ npm run test Player (after adding each test.)

  // -- test for stats, using the .getStats player method & expect.toHaveProperty Jest method
  test("gets player's stats as an object", () => {
    // -- create a new object 'Dave'
    const player = new Player('Dave');  
    // -- the new object will have 4 new properties
    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
  });

  // -- test for inventory, using the .getInventory() player method & expect.toEqual Jest method
  test('gets inventory from player or returns false', () => {
    // -- Player object with a property
    const player = new Player('Dave');  
    // -- return an array
    expect(player.getInventory()).toEqual(expect.any(Array));  
    player.inventory = [];  
    expect(player.getInventory()).toEqual(false);
  });

// -- test for heatlh, using the .getHealth() player method, & expect.toEqual Jest method
test("gets player's health value", () => {
  const player = new Player('Dave');
  expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
});

// -- test to see if alive, using the .isAlive() player method, & expect.toBeTruthy Jest method
test('checks if player is alive or not', () => {
  const player = new Player('Dave');
  expect(player.isAlive()).toBeTruthy();
  player.health = 0;
  expect(player.isAlive()).toBeFalsy();
});

// -- test, reduceHealth() method to see if the correct amount of health is being subtracted from the Player health property:
// --- (here, calls the reduceHealth() method twice, for the second time w\a high value to make sure it doesn't go negative.)
test("subtracts from player's health", () => {
  const player = new Player('Dave');
  const oldHealth = player.health;
  player.reduceHealth(5);
  expect(player.health).toBe(oldHealth - 5);
  player.reduceHealth(99999);
  expect(player.health).toBe(0);
});

// -- test and method to get a player's attack value
test("gets player's attack value", () => {
  const player = new Player('Dave');
  player.strength = 10;
  expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
  expect(player.getAttackValue()).toBeLessThanOrEqual(15);
});

// test to check that a Potion was added without any issues
test('adds a potion to the inventory', () => {
  const player = new Player('Dave');
  const oldCount = player.inventory.length;
  player.addPotion(new Potion());
  expect(player.inventory.length).toBeGreaterThan(oldCount);
});

// tests that make sure that usePotion() method removes the specific Potion f\ the Player inventory
test('uses a potion from inventory', () => {
  const player = new Player('Dave');
  player.inventory = [new Potion(), new Potion(), new Potion()];
  const oldCount = player.inventory.length;
  player.usePotion(1);
  expect(player.inventory.length).toBeLessThan(oldCount);
});