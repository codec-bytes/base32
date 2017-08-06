'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _decode;

var _jsItertools = require('@aureooms/js-itertools');

var _jsError = require('@aureooms/js-error');

var _byte5tochar = require('./byte5tochar8');

var _byte5tochar2 = _interopRequireDefault(_byte5tochar);

var _byte4tochar = require('./byte4tochar7');

var _byte4tochar2 = _interopRequireDefault(_byte4tochar);

var _byte3tochar = require('./byte3tochar5');

var _byte3tochar2 = _interopRequireDefault(_byte3tochar);

var _byte2tochar = require('./byte2tochar4');

var _byte2tochar2 = _interopRequireDefault(_byte2tochar);

var _byte1tochar = require('./byte1tochar2');

var _byte1tochar2 = _interopRequireDefault(_byte1tochar);

var _Base32DecodeError = require('./Base32DecodeError');

var _Base32DecodeError2 = _interopRequireDefault(_Base32DecodeError);

var _variants = require('./variants');

var _variants2 = _interopRequireDefault(_variants);

var _DEFAULT_OPTIONS = require('./DEFAULT_OPTIONS');

var _DEFAULT_OPTIONS2 = _interopRequireDefault(_DEFAULT_OPTIONS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [_decode].map(regeneratorRuntime.mark);

function _decode(bytes) {
	var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _DEFAULT_OPTIONS2.default;

	var start, _options, alphabet, padding, it, a, b, c, d, e, reason, position, _reason, _position, _reason2, _position2, _reason3, _position3, _reason4, _position4;

	return regeneratorRuntime.wrap(function _decode$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					if (!options.variant) {
						_context.next = 6;
						break;
					}

					if (!_variants2.default.hasOwnProperty(options.variant)) {
						_context.next = 5;
						break;
					}

					options = _variants2.default[options.variant];
					_context.next = 6;
					break;

				case 5:
					throw new _jsError.ValueError('unknown Base32 variant ' + options.variant);

				case 6:
					start = 0;
					_options = options, alphabet = _options.alphabet, padding = _options.padding;
					it = (0, _jsItertools.iter)(bytes);

				case 9:
					if (!true) {
						_context.next = 130;
						break;
					}

					a = void 0, b = void 0, c = void 0, d = void 0, e = void 0;
					_context.prev = 11;

					a = (0, _jsItertools.next)(it);
					_context.next = 22;
					break;

				case 15:
					_context.prev = 15;
					_context.t0 = _context['catch'](11);

					if (!(_context.t0 instanceof _jsItertools.StopIteration)) {
						_context.next = 21;
						break;
					}

					return _context.abrupt('break', 130);

				case 21:
					throw _context.t0;

				case 22:
					if (!(a < 0x00 || a > 0xFF)) {
						_context.next = 26;
						break;
					}

					reason = 'byte out of range 0x00 <= ' + a + ' <= 0xFF';
					position = { start: start, end: start + 1 };
					throw new _Base32DecodeError2.default(reason, bytes, position);

				case 26:

					++start;

					_context.prev = 27;

					b = (0, _jsItertools.next)(it);
					_context.next = 52;
					break;

				case 31:
					_context.prev = 31;
					_context.t1 = _context['catch'](27);

					if (!(_context.t1 instanceof _jsItertools.StopIteration)) {
						_context.next = 51;
						break;
					}

					return _context.delegateYield((0, _byte1tochar2.default)(alphabet, a), 't2', 35);

				case 35:
					if (!padding) {
						_context.next = 48;
						break;
					}

					_context.next = 38;
					return padding;

				case 38:
					_context.next = 40;
					return padding;

				case 40:
					_context.next = 42;
					return padding;

				case 42:
					_context.next = 44;
					return padding;

				case 44:
					_context.next = 46;
					return padding;

				case 46:
					_context.next = 48;
					return padding;

				case 48:
					return _context.abrupt('break', 130);

				case 51:
					throw _context.t1;

				case 52:
					if (!(b < 0x00 || b > 0xFF)) {
						_context.next = 56;
						break;
					}

					_reason = 'byte out of range 0x00 <= ' + b + ' <= 0xFF';
					_position = { start: start, end: start + 1 };
					throw new _Base32DecodeError2.default(_reason, bytes, _position);

				case 56:

					++start;

					_context.prev = 57;

					c = (0, _jsItertools.next)(it);
					_context.next = 78;
					break;

				case 61:
					_context.prev = 61;
					_context.t3 = _context['catch'](57);

					if (!(_context.t3 instanceof _jsItertools.StopIteration)) {
						_context.next = 77;
						break;
					}

					return _context.delegateYield((0, _byte2tochar2.default)(alphabet, a, b), 't4', 65);

				case 65:
					if (!padding) {
						_context.next = 74;
						break;
					}

					_context.next = 68;
					return padding;

				case 68:
					_context.next = 70;
					return padding;

				case 70:
					_context.next = 72;
					return padding;

				case 72:
					_context.next = 74;
					return padding;

				case 74:
					return _context.abrupt('break', 130);

				case 77:
					throw _context.t3;

				case 78:
					if (!(c < 0x00 || c > 0xFF)) {
						_context.next = 82;
						break;
					}

					_reason2 = 'byte out of range 0x00 <= ' + c + ' <= 0xFF';
					_position2 = { start: start, end: start + 1 };
					throw new _Base32DecodeError2.default(_reason2, bytes, _position2);

				case 82:

					++start;

					_context.prev = 83;

					d = (0, _jsItertools.next)(it);
					_context.next = 102;
					break;

				case 87:
					_context.prev = 87;
					_context.t5 = _context['catch'](83);

					if (!(_context.t5 instanceof _jsItertools.StopIteration)) {
						_context.next = 101;
						break;
					}

					return _context.delegateYield((0, _byte3tochar2.default)(alphabet, a, b, c), 't6', 91);

				case 91:
					if (!padding) {
						_context.next = 98;
						break;
					}

					_context.next = 94;
					return padding;

				case 94:
					_context.next = 96;
					return padding;

				case 96:
					_context.next = 98;
					return padding;

				case 98:
					return _context.abrupt('break', 130);

				case 101:
					throw _context.t5;

				case 102:
					if (!(d < 0x00 || d > 0xFF)) {
						_context.next = 106;
						break;
					}

					_reason3 = 'byte out of range 0x00 <= ' + d + ' <= 0xFF';
					_position3 = { start: start, end: start + 1 };
					throw new _Base32DecodeError2.default(_reason3, bytes, _position3);

				case 106:

					++start;

					_context.prev = 107;

					e = (0, _jsItertools.next)(it);
					_context.next = 122;
					break;

				case 111:
					_context.prev = 111;
					_context.t7 = _context['catch'](107);

					if (!(_context.t7 instanceof _jsItertools.StopIteration)) {
						_context.next = 121;
						break;
					}

					return _context.delegateYield((0, _byte4tochar2.default)(alphabet, a, b, c, d), 't8', 115);

				case 115:
					if (!padding) {
						_context.next = 118;
						break;
					}

					_context.next = 118;
					return padding;

				case 118:
					return _context.abrupt('break', 130);

				case 121:
					throw _context.t7;

				case 122:
					if (!(e < 0x00 || e > 0xFF)) {
						_context.next = 126;
						break;
					}

					_reason4 = 'byte out of range 0x00 <= ' + e + ' <= 0xFF';
					_position4 = { start: start, end: start + 1 };
					throw new _Base32DecodeError2.default(_reason4, bytes, _position4);

				case 126:
					return _context.delegateYield((0, _byte5tochar2.default)(alphabet, a, b, c, d, e), 't9', 127);

				case 127:

					++start;

					_context.next = 9;
					break;

				case 130:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this, [[11, 15], [27, 31], [57, 61], [83, 87], [107, 111]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fZGVjb2RlLmpzIl0sIm5hbWVzIjpbIl9kZWNvZGUiLCJieXRlcyIsIm9wdGlvbnMiLCJ2YXJpYW50IiwiaGFzT3duUHJvcGVydHkiLCJzdGFydCIsImFscGhhYmV0IiwicGFkZGluZyIsIml0IiwiYSIsImIiLCJjIiwiZCIsImUiLCJyZWFzb24iLCJwb3NpdGlvbiIsImVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBY3lCQSxPOztBQWR6Qjs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7ZUFFeUJBLE87O0FBQVYsU0FBVUEsT0FBVixDQUFvQkMsS0FBcEI7QUFBQSxLQUE0QkMsT0FBNUI7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUVUQSxRQUFRQyxPQUZDO0FBQUE7QUFBQTtBQUFBOztBQUFBLFVBR1IsbUJBQVNDLGNBQVQsQ0FBd0JGLFFBQVFDLE9BQWhDLENBSFE7QUFBQTtBQUFBO0FBQUE7O0FBSVpELGVBQVUsbUJBQVNBLFFBQVFDLE9BQWpCLENBQVY7QUFKWTtBQUFBOztBQUFBO0FBQUEsV0FPTixvREFBMENELFFBQVFDLE9BQWxELENBUE07O0FBQUE7QUFXVkUsVUFYVSxHQVdGLENBWEU7QUFBQSxnQkFhaUJILE9BYmpCLEVBYU5JLFFBYk0sWUFhTkEsUUFiTSxFQWFLQyxPQWJMLFlBYUtBLE9BYkw7QUFlUkMsT0FmUSxHQWVILHVCQUFLUCxLQUFMLENBZkc7O0FBQUE7QUFBQSxVQWlCTixJQWpCTTtBQUFBO0FBQUE7QUFBQTs7QUFtQlRRLE1BbkJTLFdBbUJOQyxDQW5CTSxXQW1CSEMsQ0FuQkcsV0FtQkFDLENBbkJBLFdBbUJHQyxDQW5CSDtBQUFBOztBQXNCWkosU0FBSSx1QkFBTUQsRUFBTixDQUFKO0FBdEJZO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBLFdBeUJQLGlEQXpCTztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFB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TSxrQ0EwR2dDRixDQTFHaEM7QUEyR05HLGVBM0dNLEdBMkdLLEVBQUVWLE9BQVFBLEtBQVYsRUFBa0JXLEtBQU1YLFFBQVEsQ0FBaEMsRUEzR0w7QUFBQSxXQTRHTixnQ0FBdUJTLFFBQXZCLEVBQWdDYixLQUFoQyxFQUF3Q2MsVUFBeEMsQ0E1R007O0FBQUE7O0FBK0diLE9BQUVWLEtBQUY7O0FBL0dhOztBQWtIWlEsU0FBSSx1QkFBTUwsRUFBTixDQUFKO0FBbEhZO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBLFdBcUhQLGlEQXJITztBQUFBO0FBQUE7QUFBQTs7QUFBQSxtQ0FzSEosMkJBQWFGLFFBQWIsRUFBdUJHLENBQXZCLEVBQTBCQyxDQUExQixFQUE2QkMsQ0FBN0IsRUFBZ0NDLENBQWhDLENBdEhJOztBQUFBO0FBQUEsVUF1SFBMLE9BdkhPO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsWUF3SEpBLE9BeEhJOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBLFdBK0hSTSxJQUFJLElBQUosSUFBWUEsSUFBSSxJQS9IUjtBQUFBO0FBQUE7QUFBQTs7QUFnSU5DLGFBaElNLGtDQWdJZ0NELENBaEloQztBQWlJTkUsZUFqSU0sR0FpSUssRUFBRVYsT0FBUUEsS0FBVixFQUFrQlcsS0FBTVgsUUFBUSxDQUFoQyxFQWpJTDtBQUFBLFdBa0lOLGdDQUF1QlMsUUFBdkIsRUFBZ0NiLEtBQWhDLEVBQXdDYyxVQUF4QyxDQWxJTTs7QUFBQTtBQUFBLG1DQXFJTiwyQkFBYVQsUUFBYixFQUF1QkcsQ0FBdkIsRUFBMEJDLENBQTFCLEVBQTZCQyxDQUE3QixFQUFnQ0MsQ0FBaEMsRUFBbUNDLENBQW5DLENBcklNOztBQUFBOztBQXVJYixPQUFFUixLQUFGOztBQXZJYTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Il9kZWNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpdGVyICwgbmV4dCAsIFN0b3BJdGVyYXRpb24gfSBmcm9tICdAYXVyZW9vbXMvanMtaXRlcnRvb2xzJyA7XG5pbXBvcnQgeyBWYWx1ZUVycm9yIH0gZnJvbSAnQGF1cmVvb21zL2pzLWVycm9yJyA7XG5cbmltcG9ydCBieXRlNXRvY2hhcjggZnJvbSAnLi9ieXRlNXRvY2hhcjgnIDtcbmltcG9ydCBieXRlNHRvY2hhcjcgZnJvbSAnLi9ieXRlNHRvY2hhcjcnIDtcbmltcG9ydCBieXRlM3RvY2hhcjUgZnJvbSAnLi9ieXRlM3RvY2hhcjUnIDtcbmltcG9ydCBieXRlMnRvY2hhcjQgZnJvbSAnLi9ieXRlMnRvY2hhcjQnIDtcbmltcG9ydCBieXRlMXRvY2hhcjIgZnJvbSAnLi9ieXRlMXRvY2hhcjInIDtcblxuaW1wb3J0IEJhc2UzMkRlY29kZUVycm9yIGZyb20gJy4vQmFzZTMyRGVjb2RlRXJyb3InIDtcblxuaW1wb3J0IHZhcmlhbnRzIGZyb20gJy4vdmFyaWFudHMnIDtcbmltcG9ydCBERUZBVUxUX09QVElPTlMgZnJvbSAnLi9ERUZBVUxUX09QVElPTlMnIDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIF9kZWNvZGUgKCBieXRlcyAsIG9wdGlvbnMgPSBERUZBVUxUX09QVElPTlMgKSB7XG5cblx0aWYgKCBvcHRpb25zLnZhcmlhbnQgKSB7XG5cdFx0aWYgKCB2YXJpYW50cy5oYXNPd25Qcm9wZXJ0eShvcHRpb25zLnZhcmlhbnQpICkge1xuXHRcdFx0b3B0aW9ucyA9IHZhcmlhbnRzW29wdGlvbnMudmFyaWFudF0gO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRocm93IG5ldyBWYWx1ZUVycm9yKCBgdW5rbm93biBCYXNlMzIgdmFyaWFudCAke29wdGlvbnMudmFyaWFudH1gICkgO1xuXHRcdH1cblx0fVxuXG5cdGxldCBzdGFydCA9IDAgO1xuXG5cdGNvbnN0IHsgYWxwaGFiZXQgLCBwYWRkaW5nIH0gPSBvcHRpb25zIDtcblxuXHRjb25zdCBpdCA9IGl0ZXIoYnl0ZXMpIDtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRsZXQgYSwgYiwgYywgZCwgZTtcblxuXHRcdHRyeSB7XG5cdFx0XHRhID0gbmV4dCggaXQgKSA7XG5cdFx0fVxuXHRcdGNhdGNoICggZXJyICkge1xuXHRcdFx0aWYgKCBlcnIgaW5zdGFuY2VvZiBTdG9wSXRlcmF0aW9uICkgYnJlYWsgO1xuXHRcdFx0ZWxzZSB0aHJvdyBlcnIgO1xuXHRcdH1cblxuXHRcdGlmICggYSA8IDB4MDAgfHwgYSA+IDB4RkYgKSB7XG5cdFx0XHRjb25zdCByZWFzb24gPSBgYnl0ZSBvdXQgb2YgcmFuZ2UgMHgwMCA8PSAke2F9IDw9IDB4RkZgIDtcblx0XHRcdGNvbnN0IHBvc2l0aW9uID0geyBzdGFydCA6IHN0YXJ0ICwgZW5kIDogc3RhcnQgKyAxIH0gO1xuXHRcdFx0dGhyb3cgbmV3IEJhc2UzMkRlY29kZUVycm9yKCByZWFzb24gLCBieXRlcyAsIHBvc2l0aW9uICkgO1xuXHRcdH1cblxuXHRcdCsrc3RhcnQ7XG5cblx0XHR0cnkge1xuXHRcdFx0YiA9IG5leHQoIGl0ICkgO1xuXHRcdH1cblx0XHRjYXRjaCAoIGVyciApIHtcblx0XHRcdGlmICggZXJyIGluc3RhbmNlb2YgU3RvcEl0ZXJhdGlvbiApIHtcblx0XHRcdFx0eWllbGQqIGJ5dGUxdG9jaGFyMihhbHBoYWJldCwgYSk7XG5cdFx0XHRcdGlmIChwYWRkaW5nKSB7XG5cdFx0XHRcdFx0eWllbGQgcGFkZGluZztcblx0XHRcdFx0XHR5aWVsZCBwYWRkaW5nO1xuXHRcdFx0XHRcdHlpZWxkIHBhZGRpbmc7XG5cdFx0XHRcdFx0eWllbGQgcGFkZGluZztcblx0XHRcdFx0XHR5aWVsZCBwYWRkaW5nO1xuXHRcdFx0XHRcdHlpZWxkIHBhZGRpbmc7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHRocm93IGVyciA7XG5cdFx0fVxuXG5cdFx0aWYgKCBiIDwgMHgwMCB8fCBiID4gMHhGRiApIHtcblx0XHRcdGNvbnN0IHJlYXNvbiA9IGBieXRlIG91dCBvZiByYW5nZSAweDAwIDw9ICR7Yn0gPD0gMHhGRmAgO1xuXHRcdFx0Y29uc3QgcG9zaXRpb24gPSB7IHN0YXJ0IDogc3RhcnQgLCBlbmQgOiBzdGFydCArIDEgfSA7XG5cdFx0XHR0aHJvdyBuZXcgQmFzZTMyRGVjb2RlRXJyb3IoIHJlYXNvbiAsIGJ5dGVzICwgcG9zaXRpb24gKSA7XG5cdFx0fVxuXG5cdFx0KytzdGFydDtcblxuXHRcdHRyeSB7XG5cdFx0XHRjID0gbmV4dCggaXQgKSA7XG5cdFx0fVxuXHRcdGNhdGNoICggZXJyICkge1xuXHRcdFx0aWYgKCBlcnIgaW5zdGFuY2VvZiBTdG9wSXRlcmF0aW9uICkge1xuXHRcdFx0XHR5aWVsZCogYnl0ZTJ0b2NoYXI0KGFscGhhYmV0LCBhLCBiKTtcblx0XHRcdFx0aWYgKHBhZGRpbmcpIHtcblx0XHRcdFx0XHR5aWVsZCBwYWRkaW5nO1xuXHRcdFx0XHRcdHlpZWxkIHBhZGRpbmc7XG5cdFx0XHRcdFx0eWllbGQgcGFkZGluZztcblx0XHRcdFx0XHR5aWVsZCBwYWRkaW5nO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB0aHJvdyBlcnIgO1xuXHRcdH1cblxuXHRcdGlmICggYyA8IDB4MDAgfHwgYyA+IDB4RkYgKSB7XG5cdFx0XHRjb25zdCByZWFzb24gPSBgYnl0ZSBvdXQgb2YgcmFuZ2UgMHgwMCA8PSAke2N9IDw9IDB4RkZgIDtcblx0XHRcdGNvbnN0IHBvc2l0aW9uID0geyBzdGFydCA6IHN0YXJ0ICwgZW5kIDogc3RhcnQgKyAxIH0gO1xuXHRcdFx0dGhyb3cgbmV3IEJhc2UzMkRlY29kZUVycm9yKCByZWFzb24gLCBieXRlcyAsIHBvc2l0aW9uICkgO1xuXHRcdH1cblxuXHRcdCsrc3RhcnQ7XG5cblx0XHR0cnkge1xuXHRcdFx0ZCA9IG5leHQoIGl0ICkgO1xuXHRcdH1cblx0XHRjYXRjaCAoIGVyciApIHtcblx0XHRcdGlmICggZXJyIGluc3RhbmNlb2YgU3RvcEl0ZXJhdGlvbiApIHtcblx0XHRcdFx0eWllbGQqIGJ5dGUzdG9jaGFyNShhbHBoYWJldCwgYSwgYiwgYyk7XG5cdFx0XHRcdGlmIChwYWRkaW5nKSB7XG5cdFx0XHRcdFx0eWllbGQgcGFkZGluZztcblx0XHRcdFx0XHR5aWVsZCBwYWRkaW5nO1xuXHRcdFx0XHRcdHlpZWxkIHBhZGRpbmc7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHRocm93IGVyciA7XG5cdFx0fVxuXG5cdFx0aWYgKCBkIDwgMHgwMCB8fCBkID4gMHhGRiApIHtcblx0XHRcdGNvbnN0IHJlYXNvbiA9IGBieXRlIG91dCBvZiByYW5nZSAweDAwIDw9ICR7ZH0gPD0gMHhGRmAgO1xuXHRcdFx0Y29uc3QgcG9zaXRpb24gPSB7IHN0YXJ0IDogc3RhcnQgLCBlbmQgOiBzdGFydCArIDEgfSA7XG5cdFx0XHR0aHJvdyBuZXcgQmFzZTMyRGVjb2RlRXJyb3IoIHJlYXNvbiAsIGJ5dGVzICwgcG9zaXRpb24gKSA7XG5cdFx0fVxuXG5cdFx0KytzdGFydDtcblxuXHRcdHRyeSB7XG5cdFx0XHRlID0gbmV4dCggaXQgKSA7XG5cdFx0fVxuXHRcdGNhdGNoICggZXJyICkge1xuXHRcdFx0aWYgKCBlcnIgaW5zdGFuY2VvZiBTdG9wSXRlcmF0aW9uICkge1xuXHRcdFx0XHR5aWVsZCogYnl0ZTR0b2NoYXI3KGFscGhhYmV0LCBhLCBiLCBjLCBkKTtcblx0XHRcdFx0aWYgKHBhZGRpbmcpIHtcblx0XHRcdFx0XHR5aWVsZCBwYWRkaW5nO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB0aHJvdyBlcnIgO1xuXHRcdH1cblxuXHRcdGlmICggZSA8IDB4MDAgfHwgZSA+IDB4RkYgKSB7XG5cdFx0XHRjb25zdCByZWFzb24gPSBgYnl0ZSBvdXQgb2YgcmFuZ2UgMHgwMCA8PSAke2V9IDw9IDB4RkZgIDtcblx0XHRcdGNvbnN0IHBvc2l0aW9uID0geyBzdGFydCA6IHN0YXJ0ICwgZW5kIDogc3RhcnQgKyAxIH0gO1xuXHRcdFx0dGhyb3cgbmV3IEJhc2UzMkRlY29kZUVycm9yKCByZWFzb24gLCBieXRlcyAsIHBvc2l0aW9uICkgO1xuXHRcdH1cblxuXHRcdHlpZWxkKiBieXRlNXRvY2hhcjgoYWxwaGFiZXQsIGEsIGIsIGMsIGQsIGUpO1xuXG5cdFx0KytzdGFydDtcblxuXHR9XG5cbn1cbiJdfQ==