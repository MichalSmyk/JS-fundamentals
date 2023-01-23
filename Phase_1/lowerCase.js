const lowercaseMessage = (message) => {
    return message.toLowerCase();
};

const transform = (message, lowerFunction) => {
    return lowerFunction(message);
};

