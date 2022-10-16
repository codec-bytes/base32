export default function* byte3tochar5(alphabet, a, b, c) {
	// A1 a2 a3 a4 a5 | a6 a7 a8 b1 b2 | b3 b4 b5 b6 b7 | b8 c1 c2 c3 c4 | c5 c6 c7 c8 0
	yield alphabet[a >> 3];
	yield alphabet[(31 & (a << 2)) | (b >> 6)];
	yield alphabet[31 & (b >> 1)];
	yield alphabet[(31 & (b << 4)) | (c >> 4)];
	yield alphabet[31 & (c << 1)];
}
