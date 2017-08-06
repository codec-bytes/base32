"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = byte4tochar7;

var _marked = [byte4tochar7].map(regeneratorRuntime.mark);

function byte4tochar7(alphabet, a, b, c, d) {
	return regeneratorRuntime.wrap(function byte4tochar7$(_context) {
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
					return alphabet[31 & d << 3];

				case 14:
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ieXRlNHRvY2hhcjcuanMiXSwibmFtZXMiOlsiYnl0ZTR0b2NoYXI3IiwiYWxwaGFiZXQiLCJhIiwiYiIsImMiLCJkIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFBeUJBLFk7O2VBQUFBLFk7O0FBQVYsU0FBVUEsWUFBVixDQUF5QkMsUUFBekIsRUFBb0NDLENBQXBDLEVBQXdDQyxDQUF4QyxFQUE0Q0MsQ0FBNUMsRUFBZ0RDLENBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRVJKLFNBQWVDLEtBQUssQ0FBcEIsQ0FGUTs7QUFBQTtBQUFBO0FBQUEsWUFHUkQsU0FBVSxLQUFLQyxLQUFLLENBQVYsR0FBY0MsS0FBSyxDQUE3QixDQUhROztBQUFBO0FBQUE7QUFBQSxZQUlSRixTQUFVLEtBQWNFLEtBQUssQ0FBN0IsQ0FKUTs7QUFBQTtBQUFBO0FBQUEsWUFLUkYsU0FBVSxLQUFjRSxLQUFLLENBQW5CLEdBQXVCQyxLQUFLLENBQXRDLENBTFE7O0FBQUE7QUFBQTtBQUFBLFlBTVJILFNBQVUsS0FBdUJHLEtBQUssQ0FBNUIsR0FBZ0NDLEtBQUssQ0FBL0MsQ0FOUTs7QUFBQTtBQUFBO0FBQUEsWUFPUkosU0FBVSxLQUFnQ0ksS0FBSyxDQUEvQyxDQVBROztBQUFBO0FBQUE7QUFBQSxZQVFSSixTQUFVLEtBQWdDSSxLQUFLLENBQS9DLENBUlE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiYnl0ZTR0b2NoYXI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGJ5dGU0dG9jaGFyNyAoIGFscGhhYmV0ICwgYSAsIGIgLCBjICwgZCApIHtcblx0Ly8gYTEgYTIgYTMgYTQgYTUgfCBhNiBhNyBhOCBiMSBiMiB8IGIzIGI0IGI1IGI2IGI3IHwgYjggYzEgYzIgYzMgYzQgfCBjNSBjNiBjNyBjOCBkMSB8IGQyIGQzIGQ0IGQ1IGQ2IHwgZDcgZDggMCAwIDBcblx0eWllbGQgYWxwaGFiZXRbICAgICAgYSA+PiAzICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gO1xuXHR5aWVsZCBhbHBoYWJldFsgMzEgJiBhIDw8IDIgfCBiID4+IDYgICAgICAgICAgICAgICAgICAgXSA7XG5cdHlpZWxkIGFscGhhYmV0WyAzMSAmICAgICAgICAgIGIgPj4gMSAgICAgICAgICAgICAgICAgICBdIDtcblx0eWllbGQgYWxwaGFiZXRbIDMxICYgICAgICAgICAgYiA8PCA0IHwgYyA+PiA0ICAgICAgICAgIF0gO1xuXHR5aWVsZCBhbHBoYWJldFsgMzEgJiAgICAgICAgICAgICAgICAgICBjIDw8IDEgfCBkID4+IDcgXSA7XG5cdHlpZWxkIGFscGhhYmV0WyAzMSAmICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQgPj4gMiBdIDtcblx0eWllbGQgYWxwaGFiZXRbIDMxICYgICAgICAgICAgICAgICAgICAgICAgICAgICAgZCA8PCAzIF0gO1xufVxuIl19