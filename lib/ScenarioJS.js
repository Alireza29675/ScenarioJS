'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.any = exports.Report = exports.Node = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node = require('./Node');

var _Node2 = _interopRequireDefault(_Node);

var _TypeValidator = require('./tools/TypeValidator');

var _Report = require('./tools/Report');

var _Report2 = _interopRequireDefault(_Report);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scenario = function () {

    /**
     * Scenario constructor
     */
    function Scenario() {
        _classCallCheck(this, Scenario);

        this.flagNodes = [];
    }

    /**
     * flags a node to start, when start method fired
     * @param node
     */


    _createClass(Scenario, [{
        key: 'flag',
        value: function flag(node) {
            this.flagNodes.push(node);
        }

        /**
         * starts all flag nodes
         * @param nodes
         */

    }, {
        key: 'start',
        value: function start() {
            for (var _len = arguments.length, nodes = Array(_len), _key = 0; _key < _len; _key++) {
                nodes[_key] = arguments[_key];
            }

            // flags all nodes which got to start method
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var node = _step.value;
                    this.flag(node);
                } // start all flag nodes
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.flagNodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _node = _step2.value;
                    _node.receivers.control.receive(true);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }]);

    return Scenario;
}();

exports.Node = _Node2.default;
exports.Report = _Report2.default;
exports.any = _TypeValidator.any;
exports.default = Scenario;