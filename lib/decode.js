'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = decode;

var _decode2 = require('./_decode');

var _decode3 = _interopRequireDefault(_decode2);

var _DEFAULT_OPTIONS = require('./DEFAULT_OPTIONS');

var _DEFAULT_OPTIONS2 = _interopRequireDefault(_DEFAULT_OPTIONS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function decode(bytes) {
	var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _DEFAULT_OPTIONS2.default;


	return [].concat(_toConsumableArray((0, _decode3.default)(bytes, options))).join('');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNvZGUuanMiXSwibmFtZXMiOlsiZGVjb2RlIiwiYnl0ZXMiLCJvcHRpb25zIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBR3dCQSxNOztBQUh4Qjs7OztBQUNBOzs7Ozs7OztBQUVlLFNBQVNBLE1BQVQsQ0FBa0JDLEtBQWxCLEVBQXNEO0FBQUEsS0FBNUJDLE9BQTRCOzs7QUFFcEUsUUFBTyw2QkFBSyxzQkFBUUQsS0FBUixFQUFlQyxPQUFmLENBQUwsR0FBK0JDLElBQS9CLENBQW9DLEVBQXBDLENBQVA7QUFFQSIsImZpbGUiOiJkZWNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2RlY29kZSBmcm9tICcuL19kZWNvZGUnIDtcbmltcG9ydCBERUZBVUxUX09QVElPTlMgZnJvbSAnLi9ERUZBVUxUX09QVElPTlMnIDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVjb2RlICggYnl0ZXMgLCBvcHRpb25zID0gREVGQVVMVF9PUFRJT05TICkge1xuXG5cdHJldHVybiBbIC4uLl9kZWNvZGUoYnl0ZXMsIG9wdGlvbnMpIF0uam9pbignJykgO1xuXG59XG4iXX0=