"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Receiver = require("./Receiver");

var _Receiver2 = _interopRequireDefault(_Receiver);

var _Report = require("./tools/Report");

var _Report2 = _interopRequireDefault(_Report);

var _TypeValidator = require("./tools/TypeValidator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Broadcaster = function () {
    /**
     * Broadcaster constructor
     * @param node
     * @param name
     * @param type
     */
    function Broadcaster(node, name, type) {
        _classCallCheck(this, Broadcaster);

        this.node = node;
        this.name = name;
        this.type = type;
        this.connections = [];
    }

    /**
     * Broadcasts a message to all connected receivers
     * @param data
     * @return {Broadcaster|Report}
     */


    _createClass(Broadcaster, [{
        key: "broadcast",
        value: function broadcast(data) {
            // Checking type validation
            if (!(0, _TypeValidator.checkValid)(this.type, data)) return new _Report2.default({ type: 'error', message: "broadcast data is not valid! expected " + this.type });

            // Broadcasting to all connected receivers
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.connections[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var receiver = _step.value;

                    receiver.receive(data);
                }

                // Firing onBroadcast method of parent node
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

            this.node.onBroadcast(this, data);

            return this;
        }

        /**
         * Connects broadcaster to a receiver
         * @param receiver
         * @return {Broadcaster|Report}
         */

    }, {
        key: "connectTo",
        value: function connectTo(receiver) {
            var oneOfThoseHaveAnyType = this.type === _TypeValidator.any || receiver.type === _TypeValidator.any;
            // Validating data types between broadcaster and receiver
            if (this.type !== receiver.type && !oneOfThoseHaveAnyType) {
                return new _Report2.default({
                    type: 'error',
                    message: "Type of broadcaster and receiver doesn't match! " + this.type + " X " + receiver.type
                });
            }

            // checking existing connections and connect the new one
            if (receiver instanceof _Receiver2.default && !this.connections.includes(receiver)) {
                this.connections.push(receiver);
            }

            return this;
        }
    }]);

    return Broadcaster;
}();

exports.default = Broadcaster;