import {
    formatWorkBook,
    makePet
} from './objects.js';

const test = QUnit.test;

QUnit.module('objects');

test('makes a pet', (expect) => {
    const actual = makePet(
        'felix',
        'cat',
        6,
        'tuna',
        ['feather chaser', 'laser pointer', 'ball of yarn']
    );

    expect.deepEqual(actual, {
        name: 'felix',
        type: 'cat',
        age: 6,
        food: 'tuna',
        toys: ['feather chaser', 'laser pointer', 'ball of yarn']
    });
});

test('return only work and writer', (expect) => {
    const actual = formatWorkBook({
        author: {
            last: 'wells',
            first: 'h.g.'
        },
        book: {
            title: 'war of the worlds',
            genre: 'scifi',
            word: 312000
        }
    });

    expect.deepEqual(actual, {
        work: 'war of the worlds',
        writer: 'h.g. wells'
    });
});