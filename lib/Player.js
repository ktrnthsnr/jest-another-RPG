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



// -- adding .getStats() and .getInventory() "methods" through "prototype" of Player constructor function
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

// -- added the .getHealth method, with a this.name template literal 
  // -- with preceeding and appending (both) backticks (` `)  
Player.prototype.getHealth = function() {
  return `${this.name}'s health is now ${this.health}!`;
};

// -- added isAlive method, with Boolean conditional true\false checks
Player.prototype.isAlive = function() {
  if (this.health === 0) {
    return false;
  }
  return true;
};


// -- added .reduceHealth method
Player.prototype.reduceHealth = function(health) {
  this.health -= health;
  if (this.health < 0) {
    this.health = 0;
  }
};

// -- add the getAttackValue() method to the Player prototype in Player.js
Player.prototype.getAttackValue = function() {
  const min = this.strength - 5;
  const max = this.strength + 5;
  return Math.floor(Math.random() * (max - min) + min);
};

// -- add the addPotion() method to the Player prototype
Player.prototype.addPotion = function(potion) {
  this.inventory.push(potion);
};


// -- prototype with usePotion() method
  // -- The .splice() method removes items from an array & returns the removed item(s) as a new array. 
  // -- Both .push() and .splice() are methods on the Array prototype.
  // -- 2 events occur here: 
        // -- 1.the original inventory array has a single Potion removed at the specified index value 
            // -- and put into a new "removed items" array, 
        // -- 2. then the Potion at index [0] of this "removed items" array is saved in a potion variable.
Player.prototype.usePotion = function(index) {
  const potion = this.getInventory().splice(index, 1)[0];
  switch (potion.name) {
    case 'agility':
      this.agility += potion.value;
      break;
    case 'health':
      this.health += potion.value;
      break;
    case 'strength':
      this.strength += potion.value;
      break;
  }
};



// -- export the Player.js module
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

    