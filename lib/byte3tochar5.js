"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = byte3tochar5;

var _marked = [byte3tochar5].map(regeneratorRuntime.mark);

function byte3tochar5(alphabet, a, b, c) {
	return regeneratorRuntime.wrap(function byte3tochar5$(_context) {
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
					return alphabet[31 & c << 1];

				case 10:
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ieXRlM3RvY2hhcjUuanMiXSwibmFtZXMiOlsiYnl0ZTN0b2NoYXI1IiwiYWxwaGFiZXQiLCJhIiwiYiIsImMiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUF5QkEsWTs7ZUFBQUEsWTs7QUFBVixTQUFVQSxZQUFWLENBQXlCQyxRQUF6QixFQUFvQ0MsQ0FBcEMsRUFBd0NDLENBQXhDLEVBQTRDQyxDQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUVSSCxTQUFlQyxLQUFLLENBQXBCLENBRlE7O0FBQUE7QUFBQTtBQUFBLFlBR1JELFNBQVUsS0FBS0MsS0FBSyxDQUFWLEdBQWNDLEtBQUssQ0FBN0IsQ0FIUTs7QUFBQTtBQUFBO0FBQUEsWUFJUkYsU0FBVSxLQUFjRSxLQUFLLENBQTdCLENBSlE7O0FBQUE7QUFBQTtBQUFBLFlBS1JGLFNBQVUsS0FBY0UsS0FBSyxDQUFuQixHQUF1QkMsS0FBSyxDQUF0QyxDQUxROztBQUFBO0FBQUE7QUFBQSxZQU1SSCxTQUFVLEtBQXVCRyxLQUFLLENBQXRDLENBTlE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiYnl0ZTN0b2NoYXI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGJ5dGUzdG9jaGFyNSAoIGFscGhhYmV0ICwgYSAsIGIgLCBjICkge1xuXHQvLyBhMSBhMiBhMyBhNCBhNSB8IGE2IGE3IGE4IGIxIGIyIHwgYjMgYjQgYjUgYjYgYjcgfCBiOCBjMSBjMiBjMyBjNCB8IGM1IGM2IGM3IGM4IDBcblx0eWllbGQgYWxwaGFiZXRbICAgICAgYSA+PiAzICAgICAgICAgICAgICAgICAgIF0gO1xuXHR5aWVsZCBhbHBoYWJldFsgMzEgJiBhIDw8IDIgfCBiID4+IDYgICAgICAgICAgXSA7XG5cdHlpZWxkIGFscGhhYmV0WyAzMSAmICAgICAgICAgIGIgPj4gMSAgICAgICAgICBdIDtcblx0eWllbGQgYWxwaGFiZXRbIDMxICYgICAgICAgICAgYiA8PCA0IHwgYyA+PiA0IF0gO1xuXHR5aWVsZCBhbHBoYWJldFsgMzEgJiAgICAgICAgICAgICAgICAgICBjIDw8IDEgXSA7XG59XG4iXX0=