"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = char5tobyte3;

var _marked = [char5tobyte3].map(regeneratorRuntime.mark);

function char5tobyte3(index, a, b, c, d, e) {
	return regeneratorRuntime.wrap(function char5tobyte3$(_context) {
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
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGFyNXRvYnl0ZTMuanMiXSwibmFtZXMiOlsiY2hhcjV0b2J5dGUzIiwiaW5kZXgiLCJhIiwiYiIsImMiLCJkIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBQXlCQSxZOztlQUFBQSxZOztBQUFWLFNBQVVBLFlBQVYsQ0FBeUJDLEtBQXpCLEVBQWlDQyxDQUFqQyxFQUFxQ0MsQ0FBckMsRUFBeUNDLENBQXpDLEVBQTZDQyxDQUE3QyxFQUFpREMsQ0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFLREwsTUFBTUMsQ0FBTixLQUFZLENBQVosR0FBZ0JELE1BQU1FLENBQU4sS0FBWSxDQUwzQjs7QUFBQTtBQUFBO0FBQUEsWUFNUixPQUFPRixNQUFNRSxDQUFOLEtBQVksQ0FBbkIsR0FBdUJGLE1BQU1HLENBQU4sS0FBWSxDQUFuQyxHQUF1Q0gsTUFBTUksQ0FBTixLQUFZLENBTjNDOztBQUFBO0FBQUE7QUFBQSxZQU9SLE9BQU9KLE1BQU1JLENBQU4sS0FBWSxDQUFuQixHQUF1QkosTUFBTUssQ0FBTixLQUFZLENBUDNCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNoYXI1dG9ieXRlMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBjaGFyNXRvYnl0ZTMgKCBpbmRleCAsIGEgLCBiICwgYyAsIGQgLCBlICkge1xuXG5cdC8vIGExIGEyIGEzIGE0IGE1IGIxIGIyIGIzXG5cdC8vIGI0IGI1IGMxIGMyIGMzIGM0IGM1IGQxXG5cdC8vIGQyIGQzIGQ0IGQ1IGUxIGUyIGUzIGU0XG5cdHlpZWxkICAgICAgICBpbmRleFthXSA8PCAzIHwgaW5kZXhbYl0gPj4gMiA7XG5cdHlpZWxkIDB4RkYgJiBpbmRleFtiXSA8PCA2IHwgaW5kZXhbY10gPDwgMSB8IGluZGV4W2RdID4+IDQgO1xuXHR5aWVsZCAweEZGICYgaW5kZXhbZF0gPDwgNCB8IGluZGV4W2VdID4+IDEgO1xuXG59XG4iXX0=