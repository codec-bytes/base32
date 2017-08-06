"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = char7tobyte4;

var _marked = [char7tobyte4].map(regeneratorRuntime.mark);

function char7tobyte4(index, a, b, c, d, e, f, g) {
	return regeneratorRuntime.wrap(function char7tobyte4$(_context) {
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
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGFyN3RvYnl0ZTQuanMiXSwibmFtZXMiOlsiY2hhcjd0b2J5dGU0IiwiaW5kZXgiLCJhIiwiYiIsImMiLCJkIiwiZSIsImYiLCJnIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFBeUJBLFk7O2VBQUFBLFk7O0FBQVYsU0FBVUEsWUFBVixDQUF5QkMsS0FBekIsRUFBaUNDLENBQWpDLEVBQXFDQyxDQUFyQyxFQUF5Q0MsQ0FBekMsRUFBNkNDLENBQTdDLEVBQWlEQyxDQUFqRCxFQUFxREMsQ0FBckQsRUFBeURDLENBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTURQLE1BQU1DLENBQU4sS0FBWSxDQUFaLEdBQWdCRCxNQUFNRSxDQUFOLEtBQVksQ0FOM0I7O0FBQUE7QUFBQTtBQUFBLFlBT1IsT0FBT0YsTUFBTUUsQ0FBTixLQUFZLENBQW5CLEdBQXVCRixNQUFNRyxDQUFOLEtBQVksQ0FBbkMsR0FBdUNILE1BQU1JLENBQU4sS0FBWSxDQVAzQzs7QUFBQTtBQUFBO0FBQUEsWUFRUixPQUFPSixNQUFNSSxDQUFOLEtBQVksQ0FBbkIsR0FBdUJKLE1BQU1LLENBQU4sS0FBWSxDQVIzQjs7QUFBQTtBQUFBO0FBQUEsWUFTUixPQUFPTCxNQUFNSyxDQUFOLEtBQVksQ0FBbkIsR0FBdUJMLE1BQU1NLENBQU4sS0FBWSxDQUFuQyxHQUF1Q04sTUFBTU8sQ0FBTixLQUFZLENBVDNDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNoYXI3dG9ieXRlNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBjaGFyN3RvYnl0ZTQgKCBpbmRleCAsIGEgLCBiICwgYyAsIGQgLCBlICwgZiAsIGcgKSB7XG5cblx0Ly8gYTEgYTIgYTMgYTQgYTUgYjEgYjIgYjNcblx0Ly8gYjQgYjUgYzEgYzIgYzMgYzQgYzUgZDFcblx0Ly8gZDIgZDMgZDQgZDUgZTEgZTIgZTMgZTRcblx0Ly8gZTUgZjEgZjIgZjMgZjQgZjUgZzEgZzJcblx0eWllbGQgICAgICAgIGluZGV4W2FdIDw8IDMgfCBpbmRleFtiXSA+PiAyIDtcblx0eWllbGQgMHhGRiAmIGluZGV4W2JdIDw8IDYgfCBpbmRleFtjXSA8PCAxIHwgaW5kZXhbZF0gPj4gNCA7XG5cdHlpZWxkIDB4RkYgJiBpbmRleFtkXSA8PCA0IHwgaW5kZXhbZV0gPj4gMSA7XG5cdHlpZWxkIDB4RkYgJiBpbmRleFtlXSA8PCA3IHwgaW5kZXhbZl0gPDwgMiB8IGluZGV4W2ddID4+IDMgO1xuXG59XG4iXX0=