// const fruits = ['apple', 'banana', 'cherry'];

// console.log(fruits, 'fruits');

// console.log(fruits[1]);

// fruits[1] = 'kiwi';
// console.log(fruits[1]);


// to add an element at the end
// console.log(fruits.length, 'length');
// fruits.push('mango');
// console.log(fruits, 'push');

// to remove the last element
// fruits.pop();
// console.log(fruits, 'pop');

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for (const fruit of fruits) {
//     console.log(fruit);
// }

// fruits.forEach((fruit, index) => {
//     console.log(fruit, index);
// });

const numbers = [1, 2, 3, 4];

// console.log(numbers, 'numbers');
// const doubledNumbers = numbers.map((num) => {
//     return num * 2;
// })

// console.log(doubledNumbers, 'doubledNumbers');


const evenNumbers = numbers.filter((num) => {
    return num % 2 === 0;
}
);

console.log(evenNumbers, 'evenNumbers');
