"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _shapely = require("shapely");

var _Receiver = require("./Receiver");

var _Receiver2 = _interopRequireDefault(_Receiver);

var _Broadcaster = require("./Broadcaster");

var _Broadcaster2 = _interopRequireDefault(_Broadcaster);

var _Report = require("./tools/Report");

var _Report2 = _interopRequireDefault(_Report);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultNodeOptions = {
    name: 'no-name',
    label: 'No Name Node!',
    script: '',
    position: [0, 0]
};
var defaultProperties = {};

var Node = function () {
    /**
     * Node constructor
     * @param options
     * @param props
     */
    function Node() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Node);

        // Default options for every node
        this.options = Object.assign({}, defaultNodeOptions, options);
        this.receivers = {};
        this.broadcasters = {};
        this.props = Object.assign({}, defaultProperties, props);
        this.name = this.options.name;
        this.label = this.options.label;
        this.script = this.options.script;
    }

    /**
     * Adding Receiver
     * @param name
     * @param type
     * @returns {Receiver|Report}
     */


    _createClass(Node, [{
        key: "addReceiver",
        value: function addReceiver(name) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _shapely.any;

            // Validation and Catch errors
            if (!name) return new _Report2.default({ type: 'error', message: 'Receiver must have a name!' });

            if (this.receivers[name]) return new _Report2.default({ type: 'error', message: 'Receiver must have a name!' });

            // Add Receiver
            return this.receivers[name] = new _Receiver2.default(this, name, type);
        }

        /**
         * Adding Broadcaster
         * @param options
         * @returns {Broadcaster|Report}
         */

    }, {
        key: "addBroadcaster",
        value: function addBroadcaster() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { type: _shapely.any };

            // Validation and Catch errors
            if (!options.name) return new _Report2.default({ type: 'error', message: 'Broadcaster must have a name!' });

            if (this.broadcasters[options.name]) return new _Report2.default({ type: 'error', message: 'Broadcaster must have a name!' });

            // Add Receiver
            return this.broadcasters[options.name] = new _Broadcaster2.default(this, options.name, options.type);
        }

        /**
         * Adding Property
         * @param options
         */

    }, {
        key: "addProperty",
        value: function addProperty() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { type: _shapely.any };

            this.props[options.name] = {
                name: options.name,
                type: options.type
            };
        }

        /**
         * Returns all receivers as an array
         * @returns {Array}
         */

    }, {
        key: "getAllReceivers",
        value: function getAllReceivers() {
            var allReceivers = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.receivers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var name = _step.value;
                    allReceivers.push(name);
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

            return allReceivers;
        }

        /**
         * Returns all broadcasters as an array
         * @returns {Array}
         */

    }, {
        key: "getAllBroadcasters",
        value: function getAllBroadcasters() {
            var allBroadcasters = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.broadcasters[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var name = _step2.value;
                    allBroadcasters.push(name);
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

            return allBroadcasters;
        }

        /**
         * Positioning Getters and Setters
         */

    }, {
        key: "receive",


        /**
         * Receive data and pass it to a receiver
         * @param receiverName
         * @param data
         */
        value: function receive(receiverName, data) {
            var receiver = this.receivers[receiverName];
            receiver.receive(data);
        }

        /**
         * Receive data and pass it to a receiver
         * @param broadcasterName
         * @param data
         */

    }, {
        key: "broadcast",
        value: function broadcast(broadcasterName, data) {
            var broadcaster = this.broadcasters[broadcasterName];
            broadcaster.broadcast(data);
        }

        // Events Listeners

    }, {
        key: "onReady",
        value: function onReady() {}
    }, {
        key: "onReceive",
        value: function onReceive(receiver, data) {}
    }, {
        key: "onBroadcast",
        value: function onBroadcast(broadcaster, data) {}
    }, {
        key: "onMove",
        value: function onMove(position) {}

        /**
         * Append a listener to a receiver
         * @param receiverName
         * @param cb
         * @returns {Receiver|Report}
         */

    }, {
        key: "on",
        value: function on(receiverName, cb) {
            var receiver = this.receivers[receiverName];
            if (!receiver) return new _Report2.default({
                type: 'error',
                message: "There is no receiver named " + receiverName + "! Check it out again"
            });
            receiver.addListener(cb);
            return receiver;
        }
    }, {
        key: "x",
        get: function get() {
            return this.options.position[0];
        },
        set: function set(to) {
            this.options.position[0] = to;
            this.onMove(this.options.position);
        }
    }, {
        key: "y",
        get: function get() {
            return this.options.position[1];
        },
        set: function set(to) {
            this.options.position[1] = to;
            this.onMove(this.options.position);
        }
    }]);

    return Node;
}();

exports.default = Node;