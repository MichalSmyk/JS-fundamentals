const addToBatch = (array, number) => {
    if (array.length >= 5) {
        return array;
    }
    return array.concat(number);
};

//console.log(addToBatch([1], 3));
//console.log(addToBatch([1, 2, 3], 4));
//console.log(addToBatch([1, 2, 3, 4, 5, 6], 7));

module.exports = addToBatch;