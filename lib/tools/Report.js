'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    {bgRed  }{bgRedBright.white  ', ' }\n    {redBright ', '}'], ['\n    {bgRed  }{bgRedBright.white  ', ' }\n    {redBright ', '}']),
    _templateObject2 = _taggedTemplateLiteral(['\n    {bgYellow  }{bgYellowBright.black  ', ' }\n    {yellowBright ', '}'], ['\n    {bgYellow  }{bgYellowBright.black  ', ' }\n    {yellowBright ', '}']),
    _templateObject3 = _taggedTemplateLiteral(['\n    {bgGreen  }{bgGreenBright.black  ', ' }\n    {greenBright ', '}'], ['\n    {bgGreen  }{bgGreenBright.black  ', ' }\n    {greenBright ', '}']),
    _templateObject4 = _taggedTemplateLiteral(['\n    {grey  }{white.black  ', ' }\n    {white ', '}'], ['\n    {grey  }{white.black  ', ' }\n    {white ', '}']);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var generateErrorMessage = function generateErrorMessage(title, message) {
    return (0, _chalk2.default)(_templateObject, title, message);
};
var generateWarningMessage = function generateWarningMessage(title, message) {
    return (0, _chalk2.default)(_templateObject2, title, message);
};
var generateSuccessMessage = function generateSuccessMessage(title, message) {
    return (0, _chalk2.default)(_templateObject3, title, message);
};
var generateLogMessage = function generateLogMessage(title, message) {
    return (0, _chalk2.default)(_templateObject4, title, message);
};

var Report = function () {
    /**
     * Report constructor
     * @param options
     */
    function Report() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { type: 'error', message: '' };

        _classCallCheck(this, Report);

        this.isReport = true;
        this.type = options.type.toLowerCase();
        this.isSuccess = this.type === 'success';
        this.isWarning = this.type === 'warning';
        this.isError = this.type === 'error';
        this.message = options.message;
        this.onCreated();
    }

    _createClass(Report, [{
        key: 'onCreated',
        value: function onCreated() {
            var content = {
                type: this.type,
                message: this.message
            };
            if (this.isError) console.log(generateErrorMessage('Error', content.message));
            if (this.isWarning) console.log(generateWarningMessage('Warning', content.message));
            if (this.isSuccess) console.log(generateSuccessMessage('Success', content.message));
        }
    }], [{
        key: 'log',
        value: function log(node, message) {
            console.log(generateLogMessage('Log from ' + node.name, message));
        }
    }]);

    return Report;
}();

exports.default = Report;