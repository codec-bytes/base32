export default function* char4tobyte2(index, a, b, c, d) {
	// A1 a2 a3 a4 a5 b1 b2 b3
	// b4 b5 c1 c2 c3 c4 c5 d1
	yield (index[a] << 3) | (index[b] >> 2);
	yield (0xff & (index[b] << 6)) | (index[c] << 1) | (index[d] >> 4);
}
