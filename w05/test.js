'use strict';

// function amIOldEnough(age){
//     console.log(age);
//         if (age < 12) {
//         console.log(`In the if with ${age}`);
//         return 'No, sorry.';
//         } else if (age < 18) {
//         console.log(`In the else-if with ${age}`);
//         return 'Only if you are accompanied by an adult.';
//         } else {
//         console.log(`In the else with ${age}`);
//         return 'Yep, come on in!';
//     }
// }

// console.log(amIOldEnough(21))
//______________________________________________________________________
// function amIOldEnough(age){
//     debugger;
//         if (age < 12) {
//         debugger;
//         return 'No, sorry.';
//         } else if (age < 18) {
//         debugger;
//         return 'Only if you are accompanied by an adult.';
//         } else {
//         debugger;
//         return 'Yep, come on in!';
//     }
// }

// amIOldEnough(16);
//_______________________________________________________________________

////Throwing Exceptions

// function squareRoot(number) {
//     'use strict';
//     if (number < 0) {
//         throw new RangeError("You can't find the square root of negative numbers")
//     }
//     return Math.sqrt(number);
// };

// console.log(squareRoot(121));

// squareRoot(-1);
//____________________________________________________________
//test 
function itSquareRoots4() {
    return squareRoot(4) === 2;
}
console.log(itSquareRoots4())


function squareRoot(number) {
    'use strict';
    if (number < 0) {
        throw new RangeError("You can't find the square root of negative numbers")
    }
    return Math.sqrt(number);
};

test('square root of 4 is 2', () => {
expect(squareRoot(4)).toBe(2);
});

