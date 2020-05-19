// -- a test that's expecting the function checkIfEqual to be truthy when given 10 and 10 as arguments -- //
    // const checkIfEqual = require('../lib/random.js');

    // test('checks if 10 is equal to 10', () => {
    //   expect(checkIfEqual(10, 10)).toBe(true);
    // });

//2nd test
    const randomNumber = require('../lib/random.js');

    test('gets random number between 1 and 10', () => {
    expect(randomNumber()).toBeGreaterThanOrEqual(1);
    expect(randomNumber()).toBeLessThanOrEqual(10);
    });
