const Potion = require('../lib/Potion.js');
    // console.log(Potion);

// 1st test assigning health to potion (specific potion value of specifically: health)
test('creates a health potion object', () => {
    const potion = new Potion('health');    
    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
    });

 //-- fails before adding the Potion contructor to the Potion.js, succeeds after adding the code.
// -- 2nd test, for random type and value (random potion of either: health, agility, or strength.)
test('creates a random potion object', () => {
    const potion = new Potion(); 
    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
    });



// -- verbose, 1st test
// test('creates a health potion object', () => {
//     //create new object, to test it will have both a name and a value
//         // invoke the Potion() constructor by calling it with the 'new' keyword
//         // (Important: constructors are Capitalized!)
//     const potion = new Potion('health');
//     //name property is equal to health
//     expect(potion.name).toBe('health');
//     //expect.any() method takes a Number() constructor as an argument, value is any number for first initial test
//     expect(potion.value).toEqual(expect.any(Number));
//   });



    //run the test $ npm run test
  