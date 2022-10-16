export default function* char7tobyte4(index, a, b, c, d, e, f, g) {
	// A1 a2 a3 a4 a5 b1 b2 b3
	// b4 b5 c1 c2 c3 c4 c5 d1
	// d2 d3 d4 d5 e1 e2 e3 e4
	// e5 f1 f2 f3 f4 f5 g1 g2
	yield (index[a] << 3) | (index[b] >> 2);
	yield (0xff & (index[b] << 6)) | (index[c] << 1) | (index[d] >> 4);
	yield (0xff & (index[d] << 4)) | (index[e] >> 1);
	yield (0xff & (index[e] << 7)) | (index[f] << 2) | (index[g] >> 3);
}
