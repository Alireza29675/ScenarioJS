'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.union = exports.any = exports.Node = undefined;

var _Node = require('./Node');

var _Node2 = _interopRequireDefault(_Node);

var _shapely = require('shapely');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scenario = function Scenario() {
    _classCallCheck(this, Scenario);
};

exports.Node = _Node2.default;
exports.any = _shapely.any;
exports.union = _shapely.union;
exports.default = Scenario;