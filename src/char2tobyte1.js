export default function* char2tobyte1(index, a, b) {
	// A1 a2 a3 a4 a5 b1 b2 b3
	yield (index[a] << 3) | (index[b] >> 2);
}
