export default function* byte5tochar8(alphabet, a, b, c, d, e) {
	// A1 a2 a3 a4 a5 | a6 a7 a8 b1 b2 | b3 b4 b5 b6 b7 | b8 c1 c2 c3 c4 | c5 c6 c7 c8 d1 | d2 d3 d4 d5 d6 | d7 d8 e1 e2 e3 | e4 e5 e6 e7 e8
	yield alphabet[a >> 3];
	yield alphabet[(31 & (a << 2)) | (b >> 6)];
	yield alphabet[31 & (b >> 1)];
	yield alphabet[(31 & (b << 4)) | (c >> 4)];
	yield alphabet[(31 & (c << 1)) | (d >> 7)];
	yield alphabet[31 & (d >> 2)];
	yield alphabet[(31 & (d << 3)) | (e >> 5)];
	yield alphabet[31 & e];
}
