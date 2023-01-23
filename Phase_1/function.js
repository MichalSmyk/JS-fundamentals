const getNumberSign = (number) => {
 
    if (number === 0) {
        return 0;
    } else if (number > 0) {
        return 'positive';
    } else {
        return 'negative';
    }
};

module.exports = getNumberSign;