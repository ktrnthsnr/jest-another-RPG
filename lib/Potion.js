// -- constructor function for a health & random potion, take a name parameter and assign it a value property to be a random number between 7 and 12.

// -- added also random potion: health, agility, OR strength
function Potion(name) {
    // -- random potion value: with three options
    this.types = ['strength', 'agility', 'health'];
    // -- if name is truthy = name; if not, is a random type of potion
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
    // -- specific value: health
    if (this.name === 'health') {
      this.value = Math.floor(Math.random() * 10 + 30);
    } else {
      this.value = Math.floor(Math.random() * 5 + 7);
    }
  }
  
  
  module.exports = Potion;


// --------------------  previous ------------------------------------------ //

// -- Only for specific potion: heatlh
            // function Potion(name) {
            //     this.name = name;  
            //     if (this.name === 'health') {
            //     this.value = Math.floor(Math.random() * 10 + 30);
            //     } else {
            //     this.value = Math.floor(Math.random() * 5 + 7);
            //     }
            // }