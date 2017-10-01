const digits = 5; // Enough for handling 10Million nodes

const usedUIDs = [];

const getIntRandomBetween = (from, to) => {
    return Math.floor(from + Math.random() * (to - from))
};

const generateRandomChar = () => {
    return String.fromCharCode(getIntRandomBetween(65, 122))
};

const generateUID = () => {
    let uid;
    do {
        uid = '';
        for (let i = digits; i > 0; i--) uid += generateRandomChar();
    } while (usedUIDs.includes(uid));
    return uid;
};

export { generateUID }