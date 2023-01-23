//Use a for loop to iterate numbers from 1 to 20, and for each of them, print whether the number is even or odd.

const isEvenOrOdd = (number) => {

    for (let number = 1; number <= 20; number++) {
        if (number % 2 === 0 ) {
            return 'even';
        } else {
            return 'odd';
        };
    };
};

module.exports = isEvenOrOdd;