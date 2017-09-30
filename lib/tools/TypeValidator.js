'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.any = exports.checkValid = undefined;

var _shapely = require('shapely');

var checkValid = function checkValid(type, data) {
    try {
        return (0, _shapely.isValid)(type, data);
    } catch (e) {
        return data instanceof type;
    }
};

exports.checkValid = checkValid;
exports.any = _shapely.any;