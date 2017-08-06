"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = byte5tochar8;

var _marked = [byte5tochar8].map(regeneratorRuntime.mark);

function byte5tochar8(alphabet, a, b, c, d, e) {
	return regeneratorRuntime.wrap(function byte5tochar8$(_context) {
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
					return alphabet[31 & b << 4 | c >> 4];

				case 8:
					_context.next = 10;
					return alphabet[31 & c << 1 | d >> 7];

				case 10:
					_context.next = 12;
					return alphabet[31 & d >> 2];

				case 12:
					_context.next = 14;
					return alphabet[31 & d << 3 | e >> 5];

				case 14:
					_context.next = 16;
					return alphabet[31 & e];

				case 16:
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ieXRlNXRvY2hhcjguanMiXSwibmFtZXMiOlsiYnl0ZTV0b2NoYXI4IiwiYWxwaGFiZXQiLCJhIiwiYiIsImMiLCJkIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBQXlCQSxZOztlQUFBQSxZOztBQUFWLFNBQVVBLFlBQVYsQ0FBeUJDLFFBQXpCLEVBQW9DQyxDQUFwQyxFQUF3Q0MsQ0FBeEMsRUFBNENDLENBQTVDLEVBQWdEQyxDQUFoRCxFQUFvREMsQ0FBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFFUkwsU0FBZUMsS0FBSyxDQUFwQixDQUZROztBQUFBO0FBQUE7QUFBQSxZQUdSRCxTQUFVLEtBQUtDLEtBQUssQ0FBVixHQUFjQyxLQUFLLENBQTdCLENBSFE7O0FBQUE7QUFBQTtBQUFBLFlBSVJGLFNBQVUsS0FBY0UsS0FBSyxDQUE3QixDQUpROztBQUFBO0FBQUE7QUFBQSxZQUtSRixTQUFVLEtBQWNFLEtBQUssQ0FBbkIsR0FBdUJDLEtBQUssQ0FBdEMsQ0FMUTs7QUFBQTtBQUFBO0FBQUEsWUFNUkgsU0FBVSxLQUF1QkcsS0FBSyxDQUE1QixHQUFnQ0MsS0FBSyxDQUEvQyxDQU5ROztBQUFBO0FBQUE7QUFBQSxZQU9SSixTQUFVLEtBQWdDSSxLQUFLLENBQS9DLENBUFE7O0FBQUE7QUFBQTtBQUFBLFlBUVJKLFNBQVUsS0FBZ0NJLEtBQUssQ0FBckMsR0FBeUNDLEtBQUssQ0FBeEQsQ0FSUTs7QUFBQTtBQUFBO0FBQUEsWUFTUkwsU0FBVSxLQUF5Q0ssQ0FBbkQsQ0FUUTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJieXRlNXRvY2hhcjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogYnl0ZTV0b2NoYXI4ICggYWxwaGFiZXQgLCBhICwgYiAsIGMgLCBkICwgZSApIHtcblx0Ly8gYTEgYTIgYTMgYTQgYTUgfCBhNiBhNyBhOCBiMSBiMiB8IGIzIGI0IGI1IGI2IGI3IHwgYjggYzEgYzIgYzMgYzQgfCBjNSBjNiBjNyBjOCBkMSB8IGQyIGQzIGQ0IGQ1IGQ2IHwgZDcgZDggZTEgZTIgZTMgfCBlNCBlNSBlNiBlNyBlOFxuXHR5aWVsZCBhbHBoYWJldFsgICAgICBhID4+IDMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSA7XG5cdHlpZWxkIGFscGhhYmV0WyAzMSAmIGEgPDwgMiB8IGIgPj4gNiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdIDtcblx0eWllbGQgYWxwaGFiZXRbIDMxICYgICAgICAgICAgYiA+PiAxICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gO1xuXHR5aWVsZCBhbHBoYWJldFsgMzEgJiAgICAgICAgICBiIDw8IDQgfCBjID4+IDQgICAgICAgICAgICAgICAgICAgXSA7XG5cdHlpZWxkIGFscGhhYmV0WyAzMSAmICAgICAgICAgICAgICAgICAgIGMgPDwgMSB8IGQgPj4gNyAgICAgICAgICBdIDtcblx0eWllbGQgYWxwaGFiZXRbIDMxICYgICAgICAgICAgICAgICAgICAgICAgICAgICAgZCA+PiAyICAgICAgICAgIF0gO1xuXHR5aWVsZCBhbHBoYWJldFsgMzEgJiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkIDw8IDMgfCBlID4+IDUgXSA7XG5cdHlpZWxkIGFscGhhYmV0WyAzMSAmICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgICAgICBdIDtcbn1cbiJdfQ==