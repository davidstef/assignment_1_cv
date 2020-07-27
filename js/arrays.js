// 1. Write
// function that receives a string with a sentence and returns a string that has words reversed.Use array functions to achieve it.
// Example:
//     INPUT: perfect makes practice
// RESULT: practice makes perfect
const array1 = ['perfect', 'makes', 'practice'];

function reverseStrings(array1) {
    const reversed = array1.reverse();
    return reversed
}
console.log('1. Reversed: ', reverseStrings(array1));

// 2. Write a
// function that receives 2 arrays and finds the element from array 1 that cannot be found in array 2.
// Example:
// Array 1: [4, 8, 12, 9, 3]
// Array 2: [4, 8, 9, 3]
// Result: 12

// Array 1: [4, 8, 9, 3]
// Array 2: [4, 8, 9, 3]
// Result: null
console.log("2.");

function diffElements(a, b) {
    a.forEach(value => {
        if (!b.includes(value)) {
            console.log('Different element:', value);
        }
    });
    b.forEach(value => {
        if (!a.includes(value)) {
            console.log('Different element:', value);
        }
    });
}

const a = [4, 8, 12, 9, 3, 16];
const b = [4, 8, 9, 3, 34];
diffElements(a, b);

/*
3. Find smallest number in array
Example:
Input: [3, 6, 4, 2, 1, 5]
Result: 1
*/

const array3 = [3, 6, 4, 2, 1, 5];

function findMin(array3) {
    var minimum = Math.min(...array3);
    return minimum;
}
console.log('3. Minimum is:', findMin(array3));

/* 
4. Find third smallest number in array
Example:
Input: [3, 6, 4, 2, 1, 5]
Result: 3
*/

const array4 = [3, 6, 4, 2, 1, 5];

function find3Min(array4) {
    let i = 0;
    while (i < 3) {
        var minimum3 = Math.min(...array4);
        let index = array4.indexOf(minimum3);
        array4.splice(index, 1);
        i++;
    }
    return minimum3;
}
console.log('4. Minimum is:', find3Min(array4));

/*
5. Write a
function that checks
if sudoku table is valid or not.Input: array of arrays

Input Sudoku table structure / example:

    [
        [7, 8, 4, 1, 5, 9, 3, 2, 6],
        [5, 3, 9, 6, 7, 2, 8, 4, 1],
        [6, 1, 2, 4, 3, 8, 7, 5, 9],

        [9, 2, 8, 7, 1, 5, 4, 6, 3],
        [3, 5, 7, 8, 4, 6, 1, 9, 2],
        [4, 6, 1, 9, 2, 3, 5, 8, 7],

        [8, 7, 6, 3, 9, 4, 2, 1, 5],
        [2, 4, 3, 5, 6, 1, 9, 7, 8],
        [1, 9, 5, 2, 8, 7, 6, 3, 4]
    ]

Validations:
    -rows and columns should contain exact 9 numbers -
    all numbers should be between 1 - 9 -
    should not have duplicated numbers -
    should not have duplicated numbers in subsquares
*/

const sudoku = [
    [7, 8, 4, 1, 5, 9, 3, 2, 6],
    [5, 3, 9, 6, 7, 2, 8, 4, 1],
    [6, 1, 2, 4, 3, 8, 7, 5, 9],

    [9, 2, 8, 7, 1, 5, 4, 6, 3],
    [3, 5, 7, 8, 4, 6, 1, 9, 2],
    [4, 6, 1, 9, 2, 3, 5, 8, 7],

    [8, 7, 6, 3, 9, 4, 2, 1, 5],
    [2, 4, 3, 5, 6, 1, 9, 7, 8],
    [1, 9, 5, 2, 8, 7, 6, 3, 4]
];

function isValid(sudoku) {
    sudoku.forEach(function(array) {
        if (sudoku.length !== 9 || array.length !== sudoku.length) {
            return false;
        }
    });
    sudoku.forEach(function(array) {
        array.forEach(function(element) {
            if (element < 1 || element > 9) {
                return false;
            }
            var hasDuplicate = array.some((element, i) => array.indexOf(element) !== i);
            if (hasDuplicate === true) {
                return false;
            }
        });
    });
    for (let j = 0; j < 9; j++) {
        for (let i = 0; i < 9; i++) {
            for (var k = 0; k < 9; k++) {
                if (k != i && sudoku[k][j] == sudoku[i][j])
                    return false;
            }
            var startY = Math.floor(i / 3) * 3;
            for (var ii = startY; ii < startY + 3; ii++) {
                var startX = Math.floor(j / 3) * 3;
                for (jj = startX; jj < startX + 3; jj++) {
                    if ((jj != j || ii != i) && sudoku[ii][jj] == sudoku[i][j]) {
                        return false;
                    }
                }
            }
        }
    }
    return true;
}
console.log('5. is valid?:', isValid(sudoku));


/*
6. Write a
function that flattens the array
Example:
    Input: [1, [2, 3], 4, 5, [6, [7]]]
Output: [1, 2, 3, 4, 5, 6, 7]

Input: ['a', ['b', 2], 3, null, [
    [4],
    ['c']
]]
Output: ['a', 'b', 2, 3, null, 4, 'c'] 
*/

const array61 = [1, [2, 3], 4, 5, [6, [7, 8, [9, 10, [11]]]]];
const array62 = ['a', ['b', 2], 3, null, [
    [4],
    ['c']
]];

function flatDeep(arr, d = 1) {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), []) :
        arr.slice();
};
const flated1 = flatDeep(array61, Infinity);
console.log('6.1:', flated1);
const flated2 = flatDeep(array62, Infinity);
console.log('6.2:', flated2);