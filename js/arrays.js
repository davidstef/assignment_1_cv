// 1. Write
// function that receives a string with a sentence and returns a string that has words reversed.Use array functions to achieve it.
// Example:
//     INPUT: perfect makes practice
// RESULT: practice makes perfect
const array1 = ['perfect', 'makes', 'practice'];

function reverseStrings(array1) {
    return array1.reverse();
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
const a = [4, 8, 12, 9, 3];
const b = [4, 8, 9, 3];

function diffElements(a, b) {
    const notFound = a.find(value => {
        return (!b.includes(value)) ? true : false;
    });
    return notFound;
}

console.log('Different elements:', diffElements(a, b));

/*
3. Find smallest number in array
Example:
Input: [3, 6, 4, 2, 1, 5]
Result: 1
*/

const array3 = [3, 6, 4, 2, 1, 5];

const findMin = array3.reduce(function(min, val) {
    if (val < min) {
        min = val;
    }
    return min;
});
console.log('3. Minimum is:', findMin);

/* 
4. Find third smallest number in array
Example:
Input: [3, 6, 4, 2, 1, 5]
Result: 3
*/

const array4 = [3, 6, 4, 2, 1, 5];
const sorted = array4.sort();
console.log('4. Minimum is:', sorted[2]);

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
let ok = true;

function isValid(sudoku) {
    if (sudoku.length !== 9)
        return false;
    sudoku.forEach(function(array) {
        if (array.length != 9) {
            ok = false;
        }
    });
    sudoku.forEach(function(array) {
        array.forEach(function(element) {
            if (element < 1 || element > 9) {
                ok = false;
            }
            var hasDuplicate = array.some((element, i) => array.indexOf(element) !== i);
            if (hasDuplicate === true) {
                ok = false;
            }
        });
    });
    for (let col = 0; col < 9; col++) {
        for (let row = 0; row < 9; row++) {
            for (let elemIndex = 0; elemIndex < 9; elemIndex++) {
                if (elemIndex != row && sudoku[elemIndex][col] == sudoku[row][col])
                    return false;
            }
            var startRow = Math.floor(row / 3) * 3;
            for (let rowSquare = startRow; rowSquare < startRow + 3; rowSquare++) {
                var startCol = Math.floor(col / 3) * 3;
                for (let colSquare = startCol; colSquare < startCol + 3; colSquare++) {
                    if ((colSquare != col || rowSquare != row) && sudoku[rowSquare][colSquare] == sudoku[row][col]) {
                        return false;
                    }
                }
            }
        }
    }
    return ok;
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

function flatArray(array) {
    let flatedArr = [];
    array.forEach(element => {
        if (Array.isArray(element)) {
            flatedArr = flatedArr.concat(flatArray(element));
        } else {
            flatedArr.push(element);
        }
    });
    return flatedArr;
}

function flatDeep(arr, d = 1) {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), []) :
        arr.slice();
};

console.log('flated Array:', flatArray(array61));