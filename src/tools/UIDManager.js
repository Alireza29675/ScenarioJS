const digits = 5; // Enough for handling 10Million nodes

const usedUIDs = [];

const getIntRandomBetween = (from, to) => {
    return Math.floor(from + Math.random() * (to - from))
};

const generateRandomChar = () => {
    let char;
    do {
        char = String.fromCharCode(getIntRandomBetween(65, 122))
    } while (!/^[a-zA-Z]$/.test(char));
    return char;
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