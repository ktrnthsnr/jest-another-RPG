// -- import Potion.js constructor into Player
const Potion = require('../lib/Potion');

// -- Player() constructor function
function Player(name = '') {
    this.name = name;
    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    // -- after importing the Potion() construction
    this.inventory = [new Potion('health'), new Potion()];
  }

  // -- details: create a new Potion object within the Player() constructor.

  // -- export
  module.exports = Player;