'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jsCodec = require('@aureooms/js-codec');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Base32EncodeError = function (_EncodeError) {
	_inherits(Base32EncodeError, _EncodeError);

	function Base32EncodeError(reason, object, position) {
		_classCallCheck(this, Base32EncodeError);

		return _possibleConstructorReturn(this, (Base32EncodeError.__proto__ || Object.getPrototypeOf(Base32EncodeError)).call(this, 'base32', reason, object, position));
	}

	return Base32EncodeError;
}(_jsCodec.EncodeError);

exports.default = Base32EncodeError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CYXNlMzJFbmNvZGVFcnJvci5qcyJdLCJuYW1lcyI6WyJCYXNlMzJFbmNvZGVFcnJvciIsInJlYXNvbiIsIm9iamVjdCIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7SUFFcUJBLGlCOzs7QUFFcEIsNEJBQWNDLE1BQWQsRUFBdUJDLE1BQXZCLEVBQWdDQyxRQUFoQyxFQUEyQztBQUFBOztBQUFBLCtIQUNuQyxRQURtQyxFQUN4QkYsTUFEd0IsRUFDZkMsTUFEZSxFQUNOQyxRQURNO0FBRTFDOzs7OztrQkFKbUJILGlCIiwiZmlsZSI6IkJhc2UzMkVuY29kZUVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW5jb2RlRXJyb3IgfSBmcm9tICdAYXVyZW9vbXMvanMtY29kZWMnIDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZTMyRW5jb2RlRXJyb3IgZXh0ZW5kcyBFbmNvZGVFcnJvciB7XG5cblx0Y29uc3RydWN0b3IgKCByZWFzb24gLCBvYmplY3QgLCBwb3NpdGlvbiApIHtcblx0XHRzdXBlciggJ2Jhc2UzMicgLCByZWFzb24gLCBvYmplY3QgLCBwb3NpdGlvbiApIDtcblx0fVxuXG59XG5cbiJdfQ==