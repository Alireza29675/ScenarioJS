"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Receiver = function () {
    /**
     * Receiver constructor
     * @param node
     * @param name
     * @param type
     * @param callback
     */
    function Receiver(node, name, type, callback) {
        _classCallCheck(this, Receiver);

        this.node = node;
        this.name = name;
        this.type = type;
        this.listeners = [];
        if (callback) this.addListener(callback);
    }

    /**
     * Receives a data, calls listeners then fires the onReceive method
     * @param data
     */


    _createClass(Receiver, [{
        key: "receive",
        value: function receive(data) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.listeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var listener = _step.value;
                    if (listener) listener();
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

            this.node.onReceive(this, data);
        }

        /**
         * Adding new listeners to this receiver
         * @param callback
         * @returns {number}: index of new listener
         */

    }, {
        key: "addListener",
        value: function addListener(callback) {
            if (!this.listeners.includes(callback)) this.listeners.push(callback);
            return this.listeners.length - 1;
        }

        /**
         * Removing a listener by it's index
         * @param index
         */

    }, {
        key: "removeListener",
        value: function removeListener(index) {
            this.listeners[index] = null;
        }
    }]);

    return Receiver;
}();

exports.default = Receiver;