// import {
    
// } from './tdd-review.js';

// test ('', () => {
    
//     const expected = 
//     const actual = 
//     expect.equal(actual, expected);
// });

import {
    doge,
} from './tdd-review.js';

const test = QUnit.test;

//write a function that takes an array and returns the length of the array
//the begining step of naming is often nonsense the second stage is exact
test('doge', (expect) => {
    //arrange what goes in and out of the gumball machine
    const array = [];
    const expected = 0;

    //act, turn the gumball machine crank aka call the function with what you want to test
    const actual = doge(array);
    //assert did the gumball machine (function) behave as you indented?
    expect.equal(actual, expected);
});

import {
    third
} from './tdd-review.js';

//write a test that returns the second item in an array,
// remember the first item in an array has a value of zero
test ('third', (expect) => {
    const dogs = ['cheddar', 'shadow', 'chance'];
    const expected = 'chance';
    const actual = third(dogs);
    expect.equal(actual, expected);
});

import {
    firstLast
} from './tdd-review.js';

test('first key, last value', (expect) => {
    // Arrange, Act, Assert
    const input = {
        name: 'felix',
        type: 'cat',
        food: 'tuna',
        age: 6,
    };

    const expected = {
        firstKey: 'name',
        lastValue: 6
    };

    const actual = firstLast(input);

    expect.deepEqual(actual, expected);


});

// test ('object keys returns an array of keys', () => {
//     const cat = {
//         name: 'duchess'
//         type: 'persian'
//         food: 'tuna'
//     }
//     const expected = ['name', 'food'];
//     const keys = Object.keys(cat);
//     const lastKey = keys[keys.length -1]
    
//     expect.deepEqual(keys, expected);
//     expect.equal(keys[0], 'name') 
    
//     expect.equal(lastKey, 'food');
//     expect.equal(cat[lastKey], 'food');

// });