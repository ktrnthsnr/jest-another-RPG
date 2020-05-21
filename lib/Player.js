// -- import Potion() constructor into Player
const Potion = require('../lib/Potion');


// -- refactored Player() constructor funtion - using prototype syntax
function Player(name = '') {
  this.name = name;
  this.health = Math.floor(Math.random() * 10 + 95);
  this.strength = Math.floor(Math.random() * 5 + 7);
  this.agility = Math.floor(Math.random() * 5 + 7);

  this.inventory = [new Potion('health'), new Potion()];
}

Player.prototype.getStats = function() {
  return {
    potions: this.inventory.length,
    health: this.health,
    strength: this.strength,
    agility: this.agility
  };
};

Player.prototype.getInventory = function() {
  if (this.inventory.length) {
    return this.inventory;
  }
  return false;
};

  // -- export
  module.exports = Player;

// --------- previous -- updated Player() constructor function
    // function Player(name = '') {
    //   this.name = name;

    //   this.health = Math.floor(Math.random() * 10 + 95);
    //   this.strength = Math.floor(Math.random() * 5 + 7);
    //   this.agility = Math.floor(Math.random() * 5 + 7);

    //   this.inventory = [new Potion('health'), new Potion()];

    //   // returns an object with various player properties
    //   this.getStats = function() {
    //     return {
    //       potions: this.inventory.length,
    //       health: this.health,
    //       strength: this.strength,
    //       agility: this.agility
    //     };
    //   };

    //   // returns the inventory array or false if empty
    //   this.getInventory = function() {
    //     if (this.inventory.length) {
    //       return this.inventory;
    //     }
    //     return false;
    //   };
    // }



// --------------- previous --------------- //
      // // -- Player() constructor function
      // function Player(name = '') {
      //     this.name = name;
      //     this.health = Math.floor(Math.random() * 10 + 95);
      //     this.strength = Math.floor(Math.random() * 5 + 7);
      //     this.agility = Math.floor(Math.random() * 5 + 7);
      //     // -- details: create a new Potion object within the Player() constructor.
      //     // -- after importing the Potion() construction
      //     this.inventory = [new Potion('health'), new Potion()];
      //   }

    