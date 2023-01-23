const names = ['Mike', 'Sergio', 'Susa', 'Marina'];

console.log(names.length);
console.log(names[1]);

const moreNames = names.concat('Falena');

console.log(moreNames);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0 
numbers.forEach((number) => {
    sum += number
});

console.log(sum);