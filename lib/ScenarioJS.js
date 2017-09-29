'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.union = exports.any = exports.Node = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node = require('./Node');

var _Node2 = _interopRequireDefault(_Node);

var _shapely = require('shapely');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scenario = function () {
    function Scenario() {
        _classCallCheck(this, Scenario);
    }

    _createClass(Scenario, [{
        key: 'start',


        /**
         * starts a node
         * @param node
         */
        value: function start(node) {
            node.receivers.control.receive(true);
        }
    }]);

    return Scenario;
}();

exports.Node = _Node2.default;
exports.any = _shapely.any;
exports.union = _shapely.union;
exports.default = Scenario;