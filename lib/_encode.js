'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _encode;

var _jsItertools = require('@aureooms/js-itertools');

var _jsMapping = require('@aureooms/js-mapping');

var _jsError = require('@aureooms/js-error');

var _char8tobyte = require('./char8tobyte5');

var _char8tobyte2 = _interopRequireDefault(_char8tobyte);

var _char7tobyte = require('./char7tobyte4');

var _char7tobyte2 = _interopRequireDefault(_char7tobyte);

var _char5tobyte = require('./char5tobyte3');

var _char5tobyte2 = _interopRequireDefault(_char5tobyte);

var _char4tobyte = require('./char4tobyte2');

var _char4tobyte2 = _interopRequireDefault(_char4tobyte);

var _char2tobyte = require('./char2tobyte1');

var _char2tobyte2 = _interopRequireDefault(_char2tobyte);

var _Base32EncodeError = require('./Base32EncodeError');

var _Base32EncodeError2 = _interopRequireDefault(_Base32EncodeError);

var _variants = require('./variants');

var _variants2 = _interopRequireDefault(_variants);

var _DEFAULT_OPTIONS = require('./DEFAULT_OPTIONS');

var _DEFAULT_OPTIONS2 = _interopRequireDefault(_DEFAULT_OPTIONS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [_encode].map(regeneratorRuntime.mark);

function _encode(string) {
	var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _DEFAULT_OPTIONS2.default;

	var start, index, padding, it, digits, stop, _reason, _position, _reason2, _position2, i, _reason3, _position3, _reason4, _position4, mask, _i, digit, _reason5, _position5, _reason6, _position6, a, b, c, d, e, f, g, h, reason, position;

	return regeneratorRuntime.wrap(function _encode$(_context) {
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
					index = options.index || (0, _jsMapping.object)((0, _jsMapping.reflect)((0, _jsItertools.enumerate)(options.alphabet)));
					padding = options.padding;
					it = (0, _jsItertools.iter)(string);

				case 10:
					if (!true) {
						_context.next = 95;
						break;
					}

					digits = [];
					stop = 0;

				case 13:
					_context.prev = 13;

					digits.push((0, _jsItertools.next)(it));
					_context.next = 24;
					break;

				case 17:
					_context.prev = 17;
					_context.t0 = _context['catch'](13);

					if (!(_context.t0 instanceof _jsItertools.StopIteration)) {
						_context.next = 23;
						break;
					}

					return _context.abrupt('break', 25);

				case 23:
					throw _context.t0;

				case 24:
					if (++stop < 8) {
						_context.next = 13;
						break;
					}

				case 25:
					if (!(stop === 0)) {
						_context.next = 27;
						break;
					}

					return _context.abrupt('break', 95);

				case 27:
					if (!padding) {
						_context.next = 51;
						break;
					}

					if (!(stop === 2 || stop === 4 || stop === 5 || stop === 7)) {
						_context.next = 32;
						break;
					}

					_reason = 'missing padding after ' + digits.join('');
					_position = { start: start, end: start + stop };
					throw new _Base32EncodeError2.default(_reason, string, _position);

				case 32:

					stop = digits.indexOf(padding);
					stop = stop === -1 ? digits.length : stop;

					if (!(stop === 0 || stop === 1 || stop === 3 || stop === 6)) {
						_context.next = 38;
						break;
					}

					_reason2 = 'padding at wrong position in ' + digits.join('');
					_position2 = { start: start + stop, end: start + stop + 1 };
					throw new _Base32EncodeError2.default(_reason2, string, _position2);

				case 38:
					i = stop + 1;

				case 39:
					if (!(i < digits.length)) {
						_context.next = 47;
						break;
					}

					if (!(digits[i] !== padding)) {
						_context.next = 44;
						break;
					}

					_reason3 = 'incorrect padding end in ' + digits.join('');
					_position3 = { start: start + i, end: start + i + 1 };
					throw new _Base32EncodeError2.default(_reason3, string, _position3);

				case 44:
					++i;
					_context.next = 39;
					break;

				case 47:
					if (!(digits.length !== 8)) {
						_context.next = 51;
						break;
					}

					_reason4 = 'unterminated padding in ' + digits.join('');
					_position4 = { start: start + stop, end: start + digits.length };
					throw new _Base32EncodeError2.default(_reason4, string, _position4);

				case 51:
					mask = [0, 3, 0, 15, 1, 0, 7, 0];
					_i = 0;

				case 53:
					if (!(_i < stop)) {
						_context.next = 68;
						break;
					}

					digit = digits[_i];

					if (index.hasOwnProperty(digit)) {
						_context.next = 61;
						break;
					}

					_reason5 = 'not in alphabet ' + digit;
					_position5 = { start: start + _i, end: start + _i + 1 };
					throw new _Base32EncodeError2.default(_reason5, string, _position5);

				case 61:
					if (!(_i + 1 === stop && index[digit] & mask[_i])) {
						_context.next = 65;
						break;
					}

					_reason6 = 'trailing bits in ' + digits.slice(0, _i + 1).join('') + ', last digit should be ' + options.alphabet[index[digit] & ~mask[_i]];
					_position6 = { start: start + _i, end: start + _i + 1 };
					throw new _Base32EncodeError2.default(_reason6, string, _position6);

				case 65:
					++_i;
					_context.next = 53;
					break;

				case 68:
					a = digits[0], b = digits[1], c = digits[2], d = digits[3], e = digits[4], f = digits[5], g = digits[6], h = digits[7];
					reason = void 0, position = void 0;
					_context.t1 = stop;
					_context.next = _context.t1 === 8 ? 73 : _context.t1 === 7 ? 75 : _context.t1 === 6 ? 77 : _context.t1 === 5 ? 80 : _context.t1 === 4 ? 82 : _context.t1 === 3 ? 84 : _context.t1 === 2 ? 87 : _context.t1 === 1 ? 89 : 92;
					break;

				case 73:
					return _context.delegateYield((0, _char8tobyte2.default)(index, a, b, c, d, e, f, g, h), 't2', 74);

				case 74:
					return _context.abrupt('break', 92);

				case 75:
					return _context.delegateYield((0, _char7tobyte2.default)(index, a, b, c, d, e, f, g), 't3', 76);

				case 76:
					return _context.abrupt('break', 92);

				case 77:
					reason = 'unterminated byte ' + a + b + c + d + e + f;
					position = { start: start, end: start + 6 };
					throw new _Base32EncodeError2.default(reason, string, position);

				case 80:
					return _context.delegateYield((0, _char5tobyte2.default)(index, a, b, c, d, e), 't4', 81);

				case 81:
					return _context.abrupt('break', 92);

				case 82:
					return _context.delegateYield((0, _char4tobyte2.default)(index, a, b, c, d), 't5', 83);

				case 83:
					return _context.abrupt('break', 92);

				case 84:
					reason = 'unterminated byte ' + a + b + c;
					position = { start: start, end: start + 3 };
					throw new _Base32EncodeError2.default(reason, string, position);

				case 87:
					return _context.delegateYield((0, _char2tobyte2.default)(index, a, b), 't6', 88);

				case 88:
					return _context.abrupt('break', 92);

				case 89:
					reason = 'unterminated byte ' + a;
					position = { start: start, end: start + 1 };
					throw new _Base32EncodeError2.default(reason, string, position);

				case 92:

					start += 8;

					_context.next = 10;
					break;

				case 95:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this, [[13, 17]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fZW5jb2RlLmpzIl0sIm5hbWVzIjpbIl9lbmNvZGUiLCJzdHJpbmciLCJvcHRpb25zIiwidmFyaWFudCIsImhhc093blByb3BlcnR5Iiwic3RhcnQiLCJpbmRleCIsImFscGhhYmV0IiwicGFkZGluZyIsIml0IiwiZGlnaXRzIiwic3RvcCIsInB1c2giLCJyZWFzb24iLCJqb2luIiwicG9zaXRpb24iLCJlbmQiLCJpbmRleE9mIiwibGVuZ3RoIiwiaSIsIm1hc2siLCJkaWdpdCIsInNsaWNlIiwiYSIsImIiLCJjIiwiZCIsImUiLCJmIiwiZyIsImgiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQWV5QkEsTzs7QUFmekI7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7O2VBRXlCQSxPOztBQUFWLFNBQVVBLE9BQVYsQ0FBb0JDLE1BQXBCO0FBQUEsS0FBNkJDLE9BQTdCOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFFVEEsUUFBUUMsT0FGQztBQUFBO0FBQUE7QUFBQTs7QUFBQSxVQUdSLG1CQUFTQyxjQUFULENBQXdCRixRQUFRQyxPQUFoQyxDQUhRO0FBQUE7QUFBQTtBQUFBOztBQUlaRCxlQUFVLG1CQUFTQSxRQUFRQyxPQUFqQixDQUFWO0FBSlk7QUFBQTs7QUFBQTtBQUFBLFdBT04sb0RBQTBDRCxRQUFRQyxPQUFsRCxDQVBNOztBQUFBO0FBV1ZFLFVBWFUsR0FXRixDQVhFO0FBYVJDLFVBYlEsR0FhQUosUUFBUUksS0FBUixJQUFpQix1QkFBUSx3QkFBUyw0QkFBV0osUUFBUUssUUFBbkIsQ0FBVCxDQUFSLENBYmpCO0FBY1JDLFlBZFEsR0FjRU4sUUFBUU0sT0FkVjtBQWdCUkMsT0FoQlEsR0FnQkgsdUJBQUtSLE1BQUwsQ0FoQkc7O0FBQUE7QUFBQSxVQWtCTixJQWxCTTtBQUFBO0FBQUE7QUFBQTs7QUFvQlRTLFdBcEJTLEdBb0JB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LHFDQUE4QlUsQ0FBOUIsR0FBa0NDLENBQWxDLEdBQXNDQyxDQUF0QztBQUNBVixnQkFBVyxFQUFFVixPQUFRQSxLQUFWLEVBQWtCVyxLQUFNWCxRQUFRLENBQWhDLEVBQVg7QUFwSFcsV0FxSEwsZ0NBQXVCUSxNQUF2QixFQUFnQ1osTUFBaEMsRUFBeUNjLFFBQXpDLENBckhLOztBQUFBO0FBQUEsbUNBdUhKLDJCQUFhVCxLQUFiLEVBQW9CaUIsQ0FBcEIsRUFBdUJDLENBQXZCLENBdkhJOztBQUFBO0FBQUE7O0FBQUE7QUEwSFhYLHFDQUE4QlUsQ0FBOUI7QUFDQVIsZ0JBQVcsRUFBRVYsT0FBUUEsS0FBVixFQUFrQlcsS0FBTVgsUUFBUSxDQUFoQyxFQUFYO0FBM0hXLFdBNEhMLGdDQUF1QlEsTUFBdkIsRUFBZ0NaLE1BQWhDLEVBQXlDYyxRQUF6QyxDQTVISzs7QUFBQTs7QUErSGJWLGNBQVMsQ0FBVDs7QUEvSGE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJfZW5jb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXRlciAsIG5leHQgLCBTdG9wSXRlcmF0aW9uICwgZW51bWVyYXRlIH0gZnJvbSAnQGF1cmVvb21zL2pzLWl0ZXJ0b29scycgO1xuaW1wb3J0IHsgb2JqZWN0ICwgcmVmbGVjdCB9IGZyb20gJ0BhdXJlb29tcy9qcy1tYXBwaW5nJyA7XG5pbXBvcnQgeyBWYWx1ZUVycm9yIH0gZnJvbSAnQGF1cmVvb21zL2pzLWVycm9yJyA7XG5cbmltcG9ydCBjaGFyOHRvYnl0ZTUgZnJvbSAnLi9jaGFyOHRvYnl0ZTUnIDtcbmltcG9ydCBjaGFyN3RvYnl0ZTQgZnJvbSAnLi9jaGFyN3RvYnl0ZTQnIDtcbmltcG9ydCBjaGFyNXRvYnl0ZTMgZnJvbSAnLi9jaGFyNXRvYnl0ZTMnIDtcbmltcG9ydCBjaGFyNHRvYnl0ZTIgZnJvbSAnLi9jaGFyNHRvYnl0ZTInIDtcbmltcG9ydCBjaGFyMnRvYnl0ZTEgZnJvbSAnLi9jaGFyMnRvYnl0ZTEnIDtcblxuaW1wb3J0IEJhc2UzMkVuY29kZUVycm9yIGZyb20gJy4vQmFzZTMyRW5jb2RlRXJyb3InIDtcblxuaW1wb3J0IHZhcmlhbnRzIGZyb20gJy4vdmFyaWFudHMnIDtcbmltcG9ydCBERUZBVUxUX09QVElPTlMgZnJvbSAnLi9ERUZBVUxUX09QVElPTlMnIDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIF9lbmNvZGUgKCBzdHJpbmcgLCBvcHRpb25zID0gREVGQVVMVF9PUFRJT05TICkge1xuXG5cdGlmICggb3B0aW9ucy52YXJpYW50ICkge1xuXHRcdGlmICggdmFyaWFudHMuaGFzT3duUHJvcGVydHkob3B0aW9ucy52YXJpYW50KSApIHtcblx0XHRcdG9wdGlvbnMgPSB2YXJpYW50c1tvcHRpb25zLnZhcmlhbnRdIDtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgVmFsdWVFcnJvciggYHVua25vd24gQmFzZTMyIHZhcmlhbnQgJHtvcHRpb25zLnZhcmlhbnR9YCApIDtcblx0XHR9XG5cdH1cblxuXHRsZXQgc3RhcnQgPSAwIDtcblxuXHRjb25zdCBpbmRleCA9IG9wdGlvbnMuaW5kZXggfHwgb2JqZWN0KCByZWZsZWN0KCBlbnVtZXJhdGUoIG9wdGlvbnMuYWxwaGFiZXQgKSApICkgO1xuXHRjb25zdCBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nIDtcblxuXHRjb25zdCBpdCA9IGl0ZXIoc3RyaW5nKSA7XG5cblx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0bGV0IGRpZ2l0cyA9IFtdIDtcblxuXHRcdGxldCBzdG9wID0gMFxuXG5cdFx0ZG8ge1xuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRkaWdpdHMucHVzaCggbmV4dCggaXQgKSApIDtcblx0XHRcdH1cblx0XHRcdGNhdGNoICggZXJyICkge1xuXHRcdFx0XHRpZiAoIGVyciBpbnN0YW5jZW9mIFN0b3BJdGVyYXRpb24gKSBicmVhayA7XG5cdFx0XHRcdGVsc2UgdGhyb3cgZXJyIDtcblx0XHRcdH1cblxuXHRcdH0gd2hpbGUgKCArK3N0b3AgPCA4ICkgO1xuXG5cdFx0aWYgKCBzdG9wID09PSAwICkgYnJlYWsgO1xuXG5cdFx0aWYgKCBwYWRkaW5nICkge1xuXG5cdFx0XHRpZiAoIHN0b3AgPT09IDIgfHwgc3RvcCA9PT0gNCB8fCBzdG9wID09PSA1IHx8IHN0b3AgPT09IDcgKSB7XG5cdFx0XHRcdGNvbnN0IHJlYXNvbiA9IGBtaXNzaW5nIHBhZGRpbmcgYWZ0ZXIgJHtkaWdpdHMuam9pbignJyl9YCA7XG5cdFx0XHRcdGNvbnN0IHBvc2l0aW9uID0geyBzdGFydCA6IHN0YXJ0ICwgZW5kIDogc3RhcnQgKyBzdG9wIH0gO1xuXHRcdFx0XHR0aHJvdyBuZXcgQmFzZTMyRW5jb2RlRXJyb3IoIHJlYXNvbiAsIHN0cmluZyAsIHBvc2l0aW9uICkgO1xuXHRcdFx0fVxuXG5cdFx0XHRzdG9wID0gZGlnaXRzLmluZGV4T2YocGFkZGluZykgO1xuXHRcdFx0c3RvcCA9IHN0b3AgPT09IC0xID8gZGlnaXRzLmxlbmd0aCA6IHN0b3AgO1xuXHRcdFx0aWYgKCBzdG9wID09PSAwIHx8IHN0b3AgPT09IDEgfHwgc3RvcCA9PT0gMyB8fCBzdG9wID09PSA2ICkge1xuXHRcdFx0XHRjb25zdCByZWFzb24gPSBgcGFkZGluZyBhdCB3cm9uZyBwb3NpdGlvbiBpbiAke2RpZ2l0cy5qb2luKCcnKX1gIDtcblx0XHRcdFx0Y29uc3QgcG9zaXRpb24gPSB7IHN0YXJ0IDogc3RhcnQgKyBzdG9wICwgZW5kIDogc3RhcnQgKyBzdG9wICsgMSB9IDtcblx0XHRcdFx0dGhyb3cgbmV3IEJhc2UzMkVuY29kZUVycm9yKCByZWFzb24gLCBzdHJpbmcgLCBwb3NpdGlvbiApIDtcblx0XHRcdH1cblx0XHRcdGZvciAoIGxldCBpID0gc3RvcCArIDEgOyBpIDwgZGlnaXRzLmxlbmd0aCA7ICsraSApIHtcblx0XHRcdFx0aWYgKCBkaWdpdHNbaV0gIT09IHBhZGRpbmcgKSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVhc29uID0gYGluY29ycmVjdCBwYWRkaW5nIGVuZCBpbiAke2RpZ2l0cy5qb2luKCcnKX1gIDtcblx0XHRcdFx0XHRjb25zdCBwb3NpdGlvbiA9IHsgc3RhcnQgOiBzdGFydCArIGkgLCBlbmQgOiBzdGFydCArIGkgKyAxIH0gO1xuXHRcdFx0XHRcdHRocm93IG5ldyBCYXNlMzJFbmNvZGVFcnJvciggcmVhc29uICwgc3RyaW5nICwgcG9zaXRpb24gKSA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBkaWdpdHMubGVuZ3RoICE9PSA4ICkge1xuXHRcdFx0XHRjb25zdCByZWFzb24gPSBgdW50ZXJtaW5hdGVkIHBhZGRpbmcgaW4gJHtkaWdpdHMuam9pbignJyl9YCA7XG5cdFx0XHRcdGNvbnN0IHBvc2l0aW9uID0geyBzdGFydCA6IHN0YXJ0ICsgc3RvcCAsIGVuZCA6IHN0YXJ0ICsgZGlnaXRzLmxlbmd0aCB9IDtcblx0XHRcdFx0dGhyb3cgbmV3IEJhc2UzMkVuY29kZUVycm9yKCByZWFzb24gLCBzdHJpbmcgLCBwb3NpdGlvbiApIDtcblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGNvbnN0IG1hc2sgPSBbIDAgLCAzICwgMCAsIDE1ICwgMSAsIDAgLCA3ICwgMCBdIDtcblxuXHRcdGZvciAoIGxldCBpID0gMCA7IGkgPCBzdG9wIDsgKytpICkge1xuXG5cdFx0XHRjb25zdCBkaWdpdCA9IGRpZ2l0c1tpXSA7XG5cblx0XHRcdGlmICggIWluZGV4Lmhhc093blByb3BlcnR5KGRpZ2l0KSApIHtcblx0XHRcdFx0Y29uc3QgcmVhc29uID0gYG5vdCBpbiBhbHBoYWJldCAke2RpZ2l0fWAgO1xuXHRcdFx0XHRjb25zdCBwb3NpdGlvbiA9IHsgc3RhcnQgOiBzdGFydCArIGkgLCBlbmQgOiBzdGFydCArIGkgKyAxIH0gO1xuXHRcdFx0XHR0aHJvdyBuZXcgQmFzZTMyRW5jb2RlRXJyb3IoIHJlYXNvbiAsIHN0cmluZyAsIHBvc2l0aW9uICkgO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBhMSBhMiBhMyBhNCBhNSBiMSBiMiBiM1xuXHRcdFx0Ly8gYjQgYjUgYzEgYzIgYzMgYzQgYzUgZDFcblx0XHRcdC8vIGQyIGQzIGQ0IGQ1IGUxIGUyIGUzIGU0XG5cdFx0XHQvLyBlNSBmMSBmMiBmMyBmNCBmNSBnMSBnMlxuXHRcdFx0Ly8gZzMgZzQgZzUgaDEgaDIgaDMgaDQgaDVcblxuXHRcdFx0ZWxzZSBpZiAoIGkgKyAxID09PSBzdG9wICYmICggaW5kZXhbZGlnaXRdICYgbWFza1tpXSApICkge1xuXHRcdFx0XHRjb25zdCByZWFzb24gPSBgdHJhaWxpbmcgYml0cyBpbiAke2RpZ2l0cy5zbGljZSgwLGkrMSkuam9pbignJyl9LCBsYXN0IGRpZ2l0IHNob3VsZCBiZSAke29wdGlvbnMuYWxwaGFiZXRbaW5kZXhbZGlnaXRdICYgfm1hc2tbaV1dfWAgO1xuXHRcdFx0XHRjb25zdCBwb3NpdGlvbiA9IHsgc3RhcnQgOiBzdGFydCArIGkgLCBlbmQgOiBzdGFydCArIGkgKyAxIH0gO1xuXHRcdFx0XHR0aHJvdyBuZXcgQmFzZTMyRW5jb2RlRXJyb3IoIHJlYXNvbiAsIHN0cmluZyAsIHBvc2l0aW9uICkgO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0Y29uc3QgWyBhICwgYiAsIGMgLCBkICwgZSAsIGYgLCBnICwgaCBdID0gZGlnaXRzIDtcblx0XHRsZXQgcmVhc29uLCBwb3NpdGlvbiA7XG5cdFx0c3dpdGNoICggc3RvcCApIHtcblx0XHRcdGNhc2UgODpcblx0XHRcdFx0eWllbGQqIGNoYXI4dG9ieXRlNShpbmRleCwgYSwgYiwgYywgZCwgZSwgZiwgZywgaCkgO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNzpcblx0XHRcdFx0eWllbGQqIGNoYXI3dG9ieXRlNChpbmRleCwgYSwgYiwgYywgZCwgZSwgZiwgZykgO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNjpcblx0XHRcdFx0cmVhc29uID0gYHVudGVybWluYXRlZCBieXRlICR7YX0ke2J9JHtjfSR7ZH0ke2V9JHtmfWAgO1xuXHRcdFx0XHRwb3NpdGlvbiA9IHsgc3RhcnQgOiBzdGFydCAsIGVuZCA6IHN0YXJ0ICsgNiB9IDtcblx0XHRcdFx0dGhyb3cgbmV3IEJhc2UzMkVuY29kZUVycm9yKCByZWFzb24gLCBzdHJpbmcgLCBwb3NpdGlvbiApIDtcblx0XHRcdGNhc2UgNTpcblx0XHRcdFx0eWllbGQqIGNoYXI1dG9ieXRlMyhpbmRleCwgYSwgYiwgYywgZCwgZSkgO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNDpcblx0XHRcdFx0eWllbGQqIGNoYXI0dG9ieXRlMihpbmRleCwgYSwgYiwgYywgZCkgO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0cmVhc29uID0gYHVudGVybWluYXRlZCBieXRlICR7YX0ke2J9JHtjfWAgO1xuXHRcdFx0XHRwb3NpdGlvbiA9IHsgc3RhcnQgOiBzdGFydCAsIGVuZCA6IHN0YXJ0ICsgMyB9IDtcblx0XHRcdFx0dGhyb3cgbmV3IEJhc2UzMkVuY29kZUVycm9yKCByZWFzb24gLCBzdHJpbmcgLCBwb3NpdGlvbiApIDtcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0eWllbGQqIGNoYXIydG9ieXRlMShpbmRleCwgYSwgYikgO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0cmVhc29uID0gYHVudGVybWluYXRlZCBieXRlICR7YX1gIDtcblx0XHRcdFx0cG9zaXRpb24gPSB7IHN0YXJ0IDogc3RhcnQgLCBlbmQgOiBzdGFydCArIDEgfSA7XG5cdFx0XHRcdHRocm93IG5ldyBCYXNlMzJFbmNvZGVFcnJvciggcmVhc29uICwgc3RyaW5nICwgcG9zaXRpb24gKSA7XG5cdFx0fVxuXG5cdFx0c3RhcnQgKz0gOCA7XG5cblx0fVxuXG59XG4iXX0=