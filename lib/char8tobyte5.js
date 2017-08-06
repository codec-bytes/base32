"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = char8tobyte5;

var _marked = [char8tobyte5].map(regeneratorRuntime.mark);

function char8tobyte5(index, a, b, c, d, e, f, g, h) {
	return regeneratorRuntime.wrap(function char8tobyte5$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return index[a] << 3 | index[b] >> 2;

				case 2:
					_context.next = 4;
					return 0xFF & index[b] << 6 | index[c] << 1 | index[d] >> 4;

				case 4:
					_context.next = 6;
					return 0xFF & index[d] << 4 | index[e] >> 1;

				case 6:
					_context.next = 8;
					return 0xFF & index[e] << 7 | index[f] << 2 | index[g] >> 3;

				case 8:
					_context.next = 10;
					return 0xFF & index[g] << 5 | index[h];

				case 10:
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGFyOHRvYnl0ZTUuanMiXSwibmFtZXMiOlsiY2hhcjh0b2J5dGU1IiwiaW5kZXgiLCJhIiwiYiIsImMiLCJkIiwiZSIsImYiLCJnIiwiaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBQXlCQSxZOztlQUFBQSxZOztBQUFWLFNBQVVBLFlBQVYsQ0FBeUJDLEtBQXpCLEVBQWlDQyxDQUFqQyxFQUFxQ0MsQ0FBckMsRUFBeUNDLENBQXpDLEVBQTZDQyxDQUE3QyxFQUFpREMsQ0FBakQsRUFBcURDLENBQXJELEVBQXlEQyxDQUF6RCxFQUE2REMsQ0FBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFPRFIsTUFBTUMsQ0FBTixLQUFZLENBQVosR0FBZ0JELE1BQU1FLENBQU4sS0FBWSxDQVAzQjs7QUFBQTtBQUFBO0FBQUEsWUFRUixPQUFPRixNQUFNRSxDQUFOLEtBQVksQ0FBbkIsR0FBdUJGLE1BQU1HLENBQU4sS0FBWSxDQUFuQyxHQUF1Q0gsTUFBTUksQ0FBTixLQUFZLENBUjNDOztBQUFBO0FBQUE7QUFBQSxZQVNSLE9BQU9KLE1BQU1JLENBQU4sS0FBWSxDQUFuQixHQUF1QkosTUFBTUssQ0FBTixLQUFZLENBVDNCOztBQUFBO0FBQUE7QUFBQSxZQVVSLE9BQU9MLE1BQU1LLENBQU4sS0FBWSxDQUFuQixHQUF1QkwsTUFBTU0sQ0FBTixLQUFZLENBQW5DLEdBQXVDTixNQUFNTyxDQUFOLEtBQVksQ0FWM0M7O0FBQUE7QUFBQTtBQUFBLFlBV1IsT0FBT1AsTUFBTU8sQ0FBTixLQUFZLENBQW5CLEdBQXVCUCxNQUFNUSxDQUFOLENBWGY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiY2hhcjh0b2J5dGU1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGNoYXI4dG9ieXRlNSAoIGluZGV4ICwgYSAsIGIgLCBjICwgZCAsIGUgLCBmICwgZyAsIGggKSB7XG5cblx0Ly8gYTEgYTIgYTMgYTQgYTUgYjEgYjIgYjNcblx0Ly8gYjQgYjUgYzEgYzIgYzMgYzQgYzUgZDFcblx0Ly8gZDIgZDMgZDQgZDUgZTEgZTIgZTMgZTRcblx0Ly8gZTUgZjEgZjIgZjMgZjQgZjUgZzEgZzJcblx0Ly8gZzMgZzQgZzUgaDEgaDIgaDMgaDQgaDVcblx0eWllbGQgICAgICAgIGluZGV4W2FdIDw8IDMgfCBpbmRleFtiXSA+PiAyIDtcblx0eWllbGQgMHhGRiAmIGluZGV4W2JdIDw8IDYgfCBpbmRleFtjXSA8PCAxIHwgaW5kZXhbZF0gPj4gNCA7XG5cdHlpZWxkIDB4RkYgJiBpbmRleFtkXSA8PCA0IHwgaW5kZXhbZV0gPj4gMSA7XG5cdHlpZWxkIDB4RkYgJiBpbmRleFtlXSA8PCA3IHwgaW5kZXhbZl0gPDwgMiB8IGluZGV4W2ddID4+IDMgO1xuXHR5aWVsZCAweEZGICYgaW5kZXhbZ10gPDwgNSB8IGluZGV4W2hdIDtcblxufVxuIl19