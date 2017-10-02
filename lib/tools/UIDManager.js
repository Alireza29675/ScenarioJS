'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var digits = 5; // Enough for handling 10Million nodes

var usedUIDs = [];

var getIntRandomBetween = function getIntRandomBetween(from, to) {
    return Math.floor(from + Math.random() * (to - from));
};

var generateRandomChar = function generateRandomChar() {
    var char = void 0;
    do {
        char = String.fromCharCode(getIntRandomBetween(65, 122));
    } while (!/^[a-zA-Z]$/.test(char));
    return char;
};

var generateUID = function generateUID() {
    var uid = void 0;
    do {
        uid = '';
        for (var i = digits; i > 0; i--) {
            uid += generateRandomChar();
        }
    } while (UIDExists(uid));
    return uid;
};

var UIDExists = function UIDExists(uid) {
    return usedUIDs.includes(uid);
};

exports.generateUID = generateUID;
exports.UIDExists = UIDExists;