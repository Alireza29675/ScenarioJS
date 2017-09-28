'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _ScenarioJS = require('./ScenarioJS');

Object.keys(_ScenarioJS).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ScenarioJS[key];
    }
  });
});

var _ScenarioJS2 = _interopRequireDefault(_ScenarioJS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ScenarioJS2.default;