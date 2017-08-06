"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = byte2tochar4;

var _marked = [byte2tochar4].map(regeneratorRuntime.mark);

function byte2tochar4(alphabet, a, b) {
	return regeneratorRuntime.wrap(function byte2tochar4$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return alphabet[a >> 3];

				case 2:
					_context.next = 4;
					return alphabet[31 & a << 2 | b >> 6];

				case 4:
					_context.next = 6;
					return alphabet[31 & b >> 1];

				case 6:
					_context.next = 8;
					return alphabet[31 & b << 4];

				case 8:
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ieXRlMnRvY2hhcjQuanMiXSwibmFtZXMiOlsiYnl0ZTJ0b2NoYXI0IiwiYWxwaGFiZXQiLCJhIiwiYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBQXlCQSxZOztlQUFBQSxZOztBQUFWLFNBQVVBLFlBQVYsQ0FBeUJDLFFBQXpCLEVBQW9DQyxDQUFwQyxFQUF3Q0MsQ0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFFUkYsU0FBZUMsS0FBSyxDQUFwQixDQUZROztBQUFBO0FBQUE7QUFBQSxZQUdSRCxTQUFVLEtBQUtDLEtBQUssQ0FBVixHQUFjQyxLQUFLLENBQTdCLENBSFE7O0FBQUE7QUFBQTtBQUFBLFlBSVJGLFNBQVUsS0FBY0UsS0FBSyxDQUE3QixDQUpROztBQUFBO0FBQUE7QUFBQSxZQUtSRixTQUFVLEtBQWNFLEtBQUssQ0FBN0IsQ0FMUTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJieXRlMnRvY2hhcjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogYnl0ZTJ0b2NoYXI0ICggYWxwaGFiZXQgLCBhICwgYiApIHtcblx0Ly8gYTEgYTIgYTMgYTQgYTUgfCBhNiBhNyBhOCBiMSBiMiB8IGIzIGI0IGI1IGI2IGI3IHwgYjggMCAwIDAgMFxuXHR5aWVsZCBhbHBoYWJldFsgICAgICBhID4+IDMgICAgICAgICAgXSA7XG5cdHlpZWxkIGFscGhhYmV0WyAzMSAmIGEgPDwgMiB8IGIgPj4gNiBdIDtcblx0eWllbGQgYWxwaGFiZXRbIDMxICYgICAgICAgICAgYiA+PiAxIF0gO1xuXHR5aWVsZCBhbHBoYWJldFsgMzEgJiAgICAgICAgICBiIDw8IDQgXSA7XG59XG4iXX0=