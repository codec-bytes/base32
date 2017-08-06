'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = encode;

var _encode2 = require('./_encode');

var _encode3 = _interopRequireDefault(_encode2);

var _DEFAULT_OPTIONS = require('./DEFAULT_OPTIONS');

var _DEFAULT_OPTIONS2 = _interopRequireDefault(_DEFAULT_OPTIONS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function encode(bytes) {
	var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _DEFAULT_OPTIONS2.default;


	return [].concat(_toConsumableArray((0, _encode3.default)(bytes, options)));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbmNvZGUuanMiXSwibmFtZXMiOlsiZW5jb2RlIiwiYnl0ZXMiLCJvcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFHd0JBLE07O0FBSHhCOzs7O0FBQ0E7Ozs7Ozs7O0FBRWUsU0FBU0EsTUFBVCxDQUFrQkMsS0FBbEIsRUFBc0Q7QUFBQSxLQUE1QkMsT0FBNEI7OztBQUVwRSxxQ0FBWSxzQkFBUUQsS0FBUixFQUFlQyxPQUFmLENBQVo7QUFFQSIsImZpbGUiOiJlbmNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2VuY29kZSBmcm9tICcuL19lbmNvZGUnIDtcbmltcG9ydCBERUZBVUxUX09QVElPTlMgZnJvbSAnLi9ERUZBVUxUX09QVElPTlMnIDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5jb2RlICggYnl0ZXMgLCBvcHRpb25zID0gREVGQVVMVF9PUFRJT05TICkge1xuXG5cdHJldHVybiBbIC4uLl9lbmNvZGUoYnl0ZXMsIG9wdGlvbnMpIF0gO1xuXG59XG4iXX0=