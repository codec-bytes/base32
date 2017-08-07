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

	var start, index, padding, it, digits, stop, _reason, _position, i, _reason2, _position2, _reason3, _position3, mask, _i, digit, _reason4, _position4, _reason5, _position5, a, b, c, d, e, f, g, h, reason, position, extra;

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
						_context.next = 113;
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

					return _context.abrupt('break', 113);

				case 27:
					if (!padding) {
						_context.next = 50;
						break;
					}

					stop = digits.indexOf(padding);
					stop = stop === -1 ? digits.length : stop;

					if (!(stop === 0)) {
						_context.next = 36;
						break;
					}

					_reason = 'padding at wrong position in ' + digits.join('');
					_position = { start: start + stop, end: start + stop + 1 };
					throw new _Base32EncodeError2.default(_reason, string, _position);

				case 36:
					if (!(stop === 2 || stop === 4 || stop === 5 || stop === 7)) {
						_context.next = 50;
						break;
					}

					i = stop + 1;

				case 38:
					if (!(i < digits.length)) {
						_context.next = 46;
						break;
					}

					if (!(digits[i] !== padding)) {
						_context.next = 43;
						break;
					}

					_reason2 = 'incorrect padding end in ' + digits.join('');
					_position2 = { start: start + i, end: start + i + 1 };
					throw new _Base32EncodeError2.default(_reason2, string, _position2);

				case 43:
					++i;
					_context.next = 38;
					break;

				case 46:
					if (!(digits.length !== 8)) {
						_context.next = 50;
						break;
					}

					_reason3 = 'missing padding in ' + digits.join('');
					_position3 = { start: start, end: start + digits.length };
					throw new _Base32EncodeError2.default(_reason3, string, _position3);

				case 50:
					mask = [0, 3, 0, 15, 1, 0, 7, 0];
					_i = 0;

				case 52:
					if (!(_i < stop)) {
						_context.next = 67;
						break;
					}

					digit = digits[_i];

					if (index.hasOwnProperty(digit)) {
						_context.next = 60;
						break;
					}

					_reason4 = 'not in alphabet ' + digit;
					_position4 = { start: start + _i, end: start + _i + 1 };
					throw new _Base32EncodeError2.default(_reason4, string, _position4);

				case 60:
					if (!(_i + 1 === stop && index[digit] & mask[_i])) {
						_context.next = 64;
						break;
					}

					_reason5 = 'trailing bits in ' + digits.slice(0, _i + 1).join('') + ', last digit should be ' + options.alphabet[index[digit] & ~mask[_i]];
					_position5 = { start: start + _i, end: start + _i + 1 };
					throw new _Base32EncodeError2.default(_reason5, string, _position5);

				case 64:
					++_i;
					_context.next = 52;
					break;

				case 67:
					a = digits[0], b = digits[1], c = digits[2], d = digits[3], e = digits[4], f = digits[5], g = digits[6], h = digits[7];
					reason = void 0, position = void 0;
					_context.t1 = stop;
					_context.next = _context.t1 === 8 ? 72 : _context.t1 === 7 ? 75 : _context.t1 === 6 ? 77 : _context.t1 === 5 ? 80 : _context.t1 === 4 ? 82 : _context.t1 === 3 ? 84 : _context.t1 === 2 ? 87 : _context.t1 === 1 ? 89 : 92;
					break;

				case 72:
					return _context.delegateYield((0, _char8tobyte2.default)(index, a, b, c, d, e, f, g, h), 't2', 73);

				case 73:
					start += 8;
					return _context.abrupt('continue', 10);

				case 75:
					return _context.delegateYield((0, _char7tobyte2.default)(index, a, b, c, d, e, f, g), 't3', 76);

				case 76:
					return _context.abrupt('break', 92);

				case 77:
					reason = 'unterminated byte sequence ' + a + b + c + d + e + f;
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
					reason = 'unterminated byte sequence ' + a + b + c;
					position = { start: start, end: start + 3 };
					throw new _Base32EncodeError2.default(reason, string, position);

				case 87:
					return _context.delegateYield((0, _char2tobyte2.default)(index, a, b), 't6', 88);

				case 88:
					return _context.abrupt('break', 92);

				case 89:
					reason = 'unterminated byte sequence ' + a;
					position = { start: start, end: start + 1 };
					throw new _Base32EncodeError2.default(reason, string, position);

				case 92:
					if (!padding) {
						_context.next = 110;
						break;
					}

					extra = void 0;
					_context.prev = 94;

					extra = (0, _jsItertools.next)(it);
					_context.next = 105;
					break;

				case 98:
					_context.prev = 98;
					_context.t7 = _context['catch'](94);

					if (!(_context.t7 instanceof _jsItertools.StopIteration)) {
						_context.next = 104;
						break;
					}

					return _context.abrupt('break', 113);

				case 104:
					throw _context.t7;

				case 105:

					reason = 'input continues after padding ' + extra;
					position = { start: start + 8, end: start + 9 };

					throw new _Base32EncodeError2.default(reason, string, position);

				case 110:
					return _context.abrupt('break', 113);

				case 111:
					_context.next = 10;
					break;

				case 113:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this, [[13, 17], [94, 98]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fZW5jb2RlLmpzIl0sIm5hbWVzIjpbIl9lbmNvZGUiLCJzdHJpbmciLCJvcHRpb25zIiwidmFyaWFudCIsImhhc093blByb3BlcnR5Iiwic3RhcnQiLCJpbmRleCIsImFscGhhYmV0IiwicGFkZGluZyIsIml0IiwiZGlnaXRzIiwic3RvcCIsInB1c2giLCJpbmRleE9mIiwibGVuZ3RoIiwicmVhc29uIiwiam9pbiIsInBvc2l0aW9uIiwiZW5kIiwiaSIsIm1hc2siLCJkaWdpdCIsInNsaWNlIiwiYSIsImIiLCJjIiwiZCIsImUiLCJmIiwiZyIsImgiLCJleHRyYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBZXlCQSxPOztBQWZ6Qjs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7ZUFFeUJBLE87O0FBQVYsU0FBVUEsT0FBVixDQUFvQkMsTUFBcEI7QUFBQSxLQUE2QkMsT0FBN0I7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUVUQSxRQUFRQyxPQUZDO0FBQUE7QUFBQTtBQUFBOztBQUFBLFVBR1IsbUJBQVNDLGNBQVQsQ0FBd0JGLFFBQVFDLE9BQWhDLENBSFE7QUFBQTtBQUFBO0FBQUE7O0FBSVpELGVBQVUsbUJBQVNBLFFBQVFDLE9BQWpCLENBQVY7QUFKWTtBQUFBOztBQUFBO0FBQUEsV0FPTixvREFBMENELFFBQVFDLE9BQWxELENBUE07O0FBQUE7QUFXVkUsVUFYVSxHQVdGLENBWEU7QUFhUkMsVUFiUSxHQWFBSixRQUFRSSxLQUFSLElBQWlCLHVCQUFRLHdCQUFTLDRCQUFXSixRQUFRSyxRQUFuQixDQUFULENBQVIsQ0FiakI7QUFjUkMsWUFkUSxHQWNFTixRQUFRTSxPQWRWO0FBZ0JSQyxPQWhCUSxHQWdCSCx1QkFBS1IsTUFBTCxDQWhCRzs7QUFBQTtBQUFBLFVBa0JOLElBbEJNO0FBQUE7QUFBQTtBQUFBOztBQW9CVFMsV0Fw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QUF2QixDQXBISTs7QUFBQTtBQUFBOztBQUFBO0FBdUhYVCw4Q0FBdUNRLENBQXZDO0FBQ0FOLGdCQUFXLEVBQUVaLE9BQVFBLEtBQVYsRUFBa0JhLEtBQU1iLFFBQVEsQ0FBaEMsRUFBWDtBQXhIVyxXQXlITCxnQ0FBdUJVLE1BQXZCLEVBQWdDZCxNQUFoQyxFQUF5Q2dCLFFBQXpDLENBekhLOztBQUFBO0FBQUEsVUE0SFJULE9BNUhRO0FBQUE7QUFBQTtBQUFBOztBQThIUnVCLFVBOUhRO0FBQUE7O0FBaUlYQSxhQUFRLHVCQUFNdEIsRUFBTixDQUFSO0FBaklXO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBLFdBb0lOLGlEQXBJTTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQXdJWk0saURBQTBDZ0IsS0FBMUM7QUFDQWQsZ0JBQVcsRUFBRVosT0FBUUEsUUFBUSxDQUFsQixFQUFzQmEsS0FBTWIsUUFBUSxDQUFwQyxFQUFYOztBQXpJWSxXQTJJTixnQ0FBdUJVLE1BQXZCLEVBQWdDZCxNQUFoQyxFQUF5Q2dCLFFBQXpDLENBM0lNOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Il9lbmNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpdGVyICwgbmV4dCAsIFN0b3BJdGVyYXRpb24gLCBlbnVtZXJhdGUgfSBmcm9tICdAYXVyZW9vbXMvanMtaXRlcnRvb2xzJyA7XG5pbXBvcnQgeyBvYmplY3QgLCByZWZsZWN0IH0gZnJvbSAnQGF1cmVvb21zL2pzLW1hcHBpbmcnIDtcbmltcG9ydCB7IFZhbHVlRXJyb3IgfSBmcm9tICdAYXVyZW9vbXMvanMtZXJyb3InIDtcblxuaW1wb3J0IGNoYXI4dG9ieXRlNSBmcm9tICcuL2NoYXI4dG9ieXRlNScgO1xuaW1wb3J0IGNoYXI3dG9ieXRlNCBmcm9tICcuL2NoYXI3dG9ieXRlNCcgO1xuaW1wb3J0IGNoYXI1dG9ieXRlMyBmcm9tICcuL2NoYXI1dG9ieXRlMycgO1xuaW1wb3J0IGNoYXI0dG9ieXRlMiBmcm9tICcuL2NoYXI0dG9ieXRlMicgO1xuaW1wb3J0IGNoYXIydG9ieXRlMSBmcm9tICcuL2NoYXIydG9ieXRlMScgO1xuXG5pbXBvcnQgQmFzZTMyRW5jb2RlRXJyb3IgZnJvbSAnLi9CYXNlMzJFbmNvZGVFcnJvcicgO1xuXG5pbXBvcnQgdmFyaWFudHMgZnJvbSAnLi92YXJpYW50cycgO1xuaW1wb3J0IERFRkFVTFRfT1BUSU9OUyBmcm9tICcuL0RFRkFVTFRfT1BUSU9OUycgO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogX2VuY29kZSAoIHN0cmluZyAsIG9wdGlvbnMgPSBERUZBVUxUX09QVElPTlMgKSB7XG5cblx0aWYgKCBvcHRpb25zLnZhcmlhbnQgKSB7XG5cdFx0aWYgKCB2YXJpYW50cy5oYXNPd25Qcm9wZXJ0eShvcHRpb25zLnZhcmlhbnQpICkge1xuXHRcdFx0b3B0aW9ucyA9IHZhcmlhbnRzW29wdGlvbnMudmFyaWFudF0gO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRocm93IG5ldyBWYWx1ZUVycm9yKCBgdW5rbm93biBCYXNlMzIgdmFyaWFudCAke29wdGlvbnMudmFyaWFudH1gICkgO1xuXHRcdH1cblx0fVxuXG5cdGxldCBzdGFydCA9IDAgO1xuXG5cdGNvbnN0IGluZGV4ID0gb3B0aW9ucy5pbmRleCB8fCBvYmplY3QoIHJlZmxlY3QoIGVudW1lcmF0ZSggb3B0aW9ucy5hbHBoYWJldCApICkgKSA7XG5cdGNvbnN0IHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcgO1xuXG5cdGNvbnN0IGl0ID0gaXRlcihzdHJpbmcpIDtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRsZXQgZGlnaXRzID0gW10gO1xuXG5cdFx0bGV0IHN0b3AgPSAwXG5cblx0XHRkbyB7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGRpZ2l0cy5wdXNoKCBuZXh0KCBpdCApICkgO1xuXHRcdFx0fVxuXHRcdFx0Y2F0Y2ggKCBlcnIgKSB7XG5cdFx0XHRcdGlmICggZXJyIGluc3RhbmNlb2YgU3RvcEl0ZXJhdGlvbiApIGJyZWFrIDtcblx0XHRcdFx0ZWxzZSB0aHJvdyBlcnIgO1xuXHRcdFx0fVxuXG5cdFx0fSB3aGlsZSAoICsrc3RvcCA8IDggKSA7XG5cblx0XHRpZiAoIHN0b3AgPT09IDAgKSBicmVhayA7XG5cblx0XHRpZiAoIHBhZGRpbmcgKSB7XG5cblx0XHRcdHN0b3AgPSBkaWdpdHMuaW5kZXhPZihwYWRkaW5nKSA7XG5cdFx0XHRzdG9wID0gc3RvcCA9PT0gLTEgPyBkaWdpdHMubGVuZ3RoIDogc3RvcCA7XG5cdFx0XHRpZiAoIHN0b3AgPT09IDAgKSB7XG5cdFx0XHRcdGNvbnN0IHJlYXNvbiA9IGBwYWRkaW5nIGF0IHdyb25nIHBvc2l0aW9uIGluICR7ZGlnaXRzLmpvaW4oJycpfWAgO1xuXHRcdFx0XHRjb25zdCBwb3NpdGlvbiA9IHsgc3RhcnQgOiBzdGFydCArIHN0b3AgLCBlbmQgOiBzdGFydCArIHN0b3AgKyAxIH0gO1xuXHRcdFx0XHR0aHJvdyBuZXcgQmFzZTMyRW5jb2RlRXJyb3IoIHJlYXNvbiAsIHN0cmluZyAsIHBvc2l0aW9uICkgO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoIHN0b3AgPT09IDIgfHwgc3RvcCA9PT0gNCB8fCBzdG9wID09PSA1IHx8IHN0b3AgPT09IDcgKSB7XG5cdFx0XHRcdGZvciAoIGxldCBpID0gc3RvcCArIDEgOyBpIDwgZGlnaXRzLmxlbmd0aCA7ICsraSApIHtcblx0XHRcdFx0XHRpZiAoIGRpZ2l0c1tpXSAhPT0gcGFkZGluZyApIHtcblx0XHRcdFx0XHRcdGNvbnN0IHJlYXNvbiA9IGBpbmNvcnJlY3QgcGFkZGluZyBlbmQgaW4gJHtkaWdpdHMuam9pbignJyl9YCA7XG5cdFx0XHRcdFx0XHRjb25zdCBwb3NpdGlvbiA9IHsgc3RhcnQgOiBzdGFydCArIGkgLCBlbmQgOiBzdGFydCArIGkgKyAxIH0gO1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEJhc2UzMkVuY29kZUVycm9yKCByZWFzb24gLCBzdHJpbmcgLCBwb3NpdGlvbiApIDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIGRpZ2l0cy5sZW5ndGggIT09IDggKSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVhc29uID0gYG1pc3NpbmcgcGFkZGluZyBpbiAke2RpZ2l0cy5qb2luKCcnKX1gIDtcblx0XHRcdFx0XHRjb25zdCBwb3NpdGlvbiA9IHsgc3RhcnQgOiBzdGFydCAsIGVuZCA6IHN0YXJ0ICsgZGlnaXRzLmxlbmd0aCB9IDtcblx0XHRcdFx0XHR0aHJvdyBuZXcgQmFzZTMyRW5jb2RlRXJyb3IoIHJlYXNvbiAsIHN0cmluZyAsIHBvc2l0aW9uICkgO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRjb25zdCBtYXNrID0gWyAwICwgMyAsIDAgLCAxNSAsIDEgLCAwICwgNyAsIDAgXSA7XG5cblx0XHRmb3IgKCBsZXQgaSA9IDAgOyBpIDwgc3RvcCA7ICsraSApIHtcblxuXHRcdFx0Y29uc3QgZGlnaXQgPSBkaWdpdHNbaV0gO1xuXG5cdFx0XHRpZiAoICFpbmRleC5oYXNPd25Qcm9wZXJ0eShkaWdpdCkgKSB7XG5cdFx0XHRcdGNvbnN0IHJlYXNvbiA9IGBub3QgaW4gYWxwaGFiZXQgJHtkaWdpdH1gIDtcblx0XHRcdFx0Y29uc3QgcG9zaXRpb24gPSB7IHN0YXJ0IDogc3RhcnQgKyBpICwgZW5kIDogc3RhcnQgKyBpICsgMSB9IDtcblx0XHRcdFx0dGhyb3cgbmV3IEJhc2UzMkVuY29kZUVycm9yKCByZWFzb24gLCBzdHJpbmcgLCBwb3NpdGlvbiApIDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gYTEgYTIgYTMgYTQgYTUgYjEgYjIgYjNcblx0XHRcdC8vIGI0IGI1IGMxIGMyIGMzIGM0IGM1IGQxXG5cdFx0XHQvLyBkMiBkMyBkNCBkNSBlMSBlMiBlMyBlNFxuXHRcdFx0Ly8gZTUgZjEgZjIgZjMgZjQgZjUgZzEgZzJcblx0XHRcdC8vIGczIGc0IGc1IGgxIGgyIGgzIGg0IGg1XG5cblx0XHRcdGVsc2UgaWYgKCBpICsgMSA9PT0gc3RvcCAmJiAoIGluZGV4W2RpZ2l0XSAmIG1hc2tbaV0gKSApIHtcblx0XHRcdFx0Y29uc3QgcmVhc29uID0gYHRyYWlsaW5nIGJpdHMgaW4gJHtkaWdpdHMuc2xpY2UoMCxpKzEpLmpvaW4oJycpfSwgbGFzdCBkaWdpdCBzaG91bGQgYmUgJHtvcHRpb25zLmFscGhhYmV0W2luZGV4W2RpZ2l0XSAmIH5tYXNrW2ldXX1gIDtcblx0XHRcdFx0Y29uc3QgcG9zaXRpb24gPSB7IHN0YXJ0IDogc3RhcnQgKyBpICwgZW5kIDogc3RhcnQgKyBpICsgMSB9IDtcblx0XHRcdFx0dGhyb3cgbmV3IEJhc2UzMkVuY29kZUVycm9yKCByZWFzb24gLCBzdHJpbmcgLCBwb3NpdGlvbiApIDtcblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGNvbnN0IFsgYSAsIGIgLCBjICwgZCAsIGUgLCBmICwgZyAsIGggXSA9IGRpZ2l0cyA7XG5cdFx0bGV0IHJlYXNvbiwgcG9zaXRpb24gO1xuXHRcdHN3aXRjaCAoIHN0b3AgKSB7XG5cdFx0XHRjYXNlIDg6XG5cdFx0XHRcdHlpZWxkKiBjaGFyOHRvYnl0ZTUoaW5kZXgsIGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgpIDtcblx0XHRcdFx0c3RhcnQgKz0gOCA7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0Y2FzZSA3OlxuXHRcdFx0XHR5aWVsZCogY2hhcjd0b2J5dGU0KGluZGV4LCBhLCBiLCBjLCBkLCBlLCBmLCBnKSA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA2OlxuXHRcdFx0XHRyZWFzb24gPSBgdW50ZXJtaW5hdGVkIGJ5dGUgc2VxdWVuY2UgJHthfSR7Yn0ke2N9JHtkfSR7ZX0ke2Z9YCA7XG5cdFx0XHRcdHBvc2l0aW9uID0geyBzdGFydCA6IHN0YXJ0ICwgZW5kIDogc3RhcnQgKyA2IH0gO1xuXHRcdFx0XHR0aHJvdyBuZXcgQmFzZTMyRW5jb2RlRXJyb3IoIHJlYXNvbiAsIHN0cmluZyAsIHBvc2l0aW9uICkgO1xuXHRcdFx0Y2FzZSA1OlxuXHRcdFx0XHR5aWVsZCogY2hhcjV0b2J5dGUzKGluZGV4LCBhLCBiLCBjLCBkLCBlKSA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA0OlxuXHRcdFx0XHR5aWVsZCogY2hhcjR0b2J5dGUyKGluZGV4LCBhLCBiLCBjLCBkKSA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRyZWFzb24gPSBgdW50ZXJtaW5hdGVkIGJ5dGUgc2VxdWVuY2UgJHthfSR7Yn0ke2N9YCA7XG5cdFx0XHRcdHBvc2l0aW9uID0geyBzdGFydCA6IHN0YXJ0ICwgZW5kIDogc3RhcnQgKyAzIH0gO1xuXHRcdFx0XHR0aHJvdyBuZXcgQmFzZTMyRW5jb2RlRXJyb3IoIHJlYXNvbiAsIHN0cmluZyAsIHBvc2l0aW9uICkgO1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR5aWVsZCogY2hhcjJ0b2J5dGUxKGluZGV4LCBhLCBiKSA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRyZWFzb24gPSBgdW50ZXJtaW5hdGVkIGJ5dGUgc2VxdWVuY2UgJHthfWAgO1xuXHRcdFx0XHRwb3NpdGlvbiA9IHsgc3RhcnQgOiBzdGFydCAsIGVuZCA6IHN0YXJ0ICsgMSB9IDtcblx0XHRcdFx0dGhyb3cgbmV3IEJhc2UzMkVuY29kZUVycm9yKCByZWFzb24gLCBzdHJpbmcgLCBwb3NpdGlvbiApIDtcblx0XHR9XG5cblx0XHRpZiAoIHBhZGRpbmcgKSB7XG5cblx0XHRcdGxldCBleHRyYSA7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGV4dHJhID0gbmV4dCggaXQgKSA7XG5cdFx0XHR9XG5cdFx0XHRjYXRjaCAoIGVyciApIHtcblx0XHRcdFx0aWYgKCBlcnIgaW5zdGFuY2VvZiBTdG9wSXRlcmF0aW9uICkgYnJlYWsgO1xuXHRcdFx0XHRlbHNlIHRocm93IGVyciA7XG5cdFx0XHR9XG5cblx0XHRcdHJlYXNvbiA9IGBpbnB1dCBjb250aW51ZXMgYWZ0ZXIgcGFkZGluZyAke2V4dHJhfWAgO1xuXHRcdFx0cG9zaXRpb24gPSB7IHN0YXJ0IDogc3RhcnQgKyA4ICwgZW5kIDogc3RhcnQgKyA5IH0gO1xuXG5cdFx0XHR0aHJvdyBuZXcgQmFzZTMyRW5jb2RlRXJyb3IoIHJlYXNvbiAsIHN0cmluZyAsIHBvc2l0aW9uICkgO1xuXG5cdFx0fVxuXG5cdFx0ZWxzZSBicmVhayA7XG5cblx0fVxuXG59XG4iXX0=