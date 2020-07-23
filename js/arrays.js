// 1. Write
// function that receives a string with a sentence and returns a string that has words reversed.Use array functions to achieve it.
// Example:
//     INPUT: perfect makes practice
// RESULT: practice makes perfect

const array1 = ['perfect', 'makes', 'practice'];
const reversed = array1.reverse();
console.log('Reversed: ', reversed);

// 2. Write a
// function that receives 2 arrays and finds the element from array 1 that cannot be found in array 2.
// Example:
// Array 1: [4, 8, 12, 9, 3]
// Array 2: [4, 8, 9, 3]
// Result: 12

// Array 1: [4, 8, 9, 3]
// Array 2: [4, 8, 9, 3]
// Result: null

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
var minimum = Math.min(...array3);
console.log('Minimum is:', minimum);