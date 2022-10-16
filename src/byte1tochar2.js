export default function* byte1tochar2(alphabet, a) {
	// A1 a2 a3 a4 a5 | a6 a7 a8 0 0
	yield alphabet[a >> 3];
	yield alphabet[31 & (a << 2)];
}
