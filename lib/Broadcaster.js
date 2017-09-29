"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Receiver = require("./Receiver");

var _Receiver2 = _interopRequireDefault(_Receiver);

var _shapely = require("shapely");

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
     */


    _createClass(Broadcaster, [{
        key: "broadcast",
        value: function broadcast(data) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.connections[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var receiver = _step.value;

                    receiver.receive(data);
                }
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
        }

        /**
         * Connects broadcaster to a receiver
         * @param receiver
         */

    }, {
        key: "connectTo",
        value: function connectTo(receiver) {
            if (receiver instanceof _Receiver2.default && !this.connections.includes(receiver)) {
                this.connections.push(receiver);
            }
        }
    }]);

    return Broadcaster;
}();

exports.default = Broadcaster;