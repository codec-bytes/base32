"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = char4tobyte2;

var _marked = [char4tobyte2].map(regeneratorRuntime.mark);

function char4tobyte2(index, a, b, c, d) {
	return regeneratorRuntime.wrap(function char4tobyte2$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return index[a] << 3 | index[b] >> 2;

				case 2:
					_context.next = 4;
					return 0xFF & index[b] << 6 | index[c] << 1 | index[d] >> 4;

				case 4:
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGFyNHRvYnl0ZTIuanMiXSwibmFtZXMiOlsiY2hhcjR0b2J5dGUyIiwiaW5kZXgiLCJhIiwiYiIsImMiLCJkIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFBeUJBLFk7O2VBQUFBLFk7O0FBQVYsU0FBVUEsWUFBVixDQUF5QkMsS0FBekIsRUFBaUNDLENBQWpDLEVBQXFDQyxDQUFyQyxFQUF5Q0MsQ0FBekMsRUFBNkNDLENBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSURKLE1BQU1DLENBQU4sS0FBWSxDQUFaLEdBQWdCRCxNQUFNRSxDQUFOLEtBQVksQ0FKM0I7O0FBQUE7QUFBQTtBQUFBLFlBS1IsT0FBT0YsTUFBTUUsQ0FBTixLQUFZLENBQW5CLEdBQXVCRixNQUFNRyxDQUFOLEtBQVksQ0FBbkMsR0FBdUNILE1BQU1JLENBQU4sS0FBWSxDQUwzQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJjaGFyNHRvYnl0ZTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogY2hhcjR0b2J5dGUyICggaW5kZXggLCBhICwgYiAsIGMgLCBkICkge1xuXG5cdC8vIGExIGEyIGEzIGE0IGE1IGIxIGIyIGIzXG5cdC8vIGI0IGI1IGMxIGMyIGMzIGM0IGM1IGQxXG5cdHlpZWxkICAgICAgICBpbmRleFthXSA8PCAzIHwgaW5kZXhbYl0gPj4gMiA7XG5cdHlpZWxkIDB4RkYgJiBpbmRleFtiXSA8PCA2IHwgaW5kZXhbY10gPDwgMSB8IGluZGV4W2RdID4+IDQgO1xuXG59XG4iXX0=