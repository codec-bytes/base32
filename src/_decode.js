import {ValueError} from '@failure-abstraction/error';
import {iter} from '@iterable-iterator/iter';
import {next, StopIteration} from '@iterable-iterator/next';

import Base32DecodeError from './Base32DecodeError.js';
import DEFAULT_OPTIONS from './DEFAULT_OPTIONS.js';
import byte1tochar2 from './byte1tochar2.js';
import byte2tochar4 from './byte2tochar4.js';
import byte3tochar5 from './byte3tochar5.js';
import byte4tochar7 from './byte4tochar7.js';
import byte5tochar8 from './byte5tochar8.js';
import variants from './variants.js';

export default function* _decode(bytes, options = DEFAULT_OPTIONS) {
	if (options.variant) {
		if (Object.hasOwn(variants, options.variant)) {
			options = variants[options.variant];
		} else {
			throw new ValueError(`unknown Base32 variant ${options.variant}`);
		}
	}

	let start = 0;

	const {alphabet, padding} = options;

	const it = iter(bytes);

	while (true) {
		let a;
		let b;
		let c;
		let d;
		let e;

		try {
			a = next(it);
		} catch (error) {
			if (error instanceof StopIteration) break;
			else throw error;
		}

		if (a < 0x00 || a > 0xff) {
			const reason = `byte out of range 0x00 <= ${a} <= 0xFF`;
			const position = {start, end: start + 1};
			throw new Base32DecodeError(reason, bytes, position);
		}

		++start;

		try {
			b = next(it);
		} catch (error) {
			if (error instanceof StopIteration) {
				yield* byte1tochar2(alphabet, a);
				if (padding) {
					yield padding;
					yield padding;
					yield padding;
					yield padding;
					yield padding;
					yield padding;
				}

				break;
			} else throw error;
		}

		if (b < 0x00 || b > 0xff) {
			const reason = `byte out of range 0x00 <= ${b} <= 0xFF`;
			const position = {start, end: start + 1};
			throw new Base32DecodeError(reason, bytes, position);
		}

		++start;

		try {
			c = next(it);
		} catch (error) {
			if (error instanceof StopIteration) {
				yield* byte2tochar4(alphabet, a, b);
				if (padding) {
					yield padding;
					yield padding;
					yield padding;
					yield padding;
				}

				break;
			} else throw error;
		}

		if (c < 0x00 || c > 0xff) {
			const reason = `byte out of range 0x00 <= ${c} <= 0xFF`;
			const position = {start, end: start + 1};
			throw new Base32DecodeError(reason, bytes, position);
		}

		++start;

		try {
			d = next(it);
		} catch (error) {
			if (error instanceof StopIteration) {
				yield* byte3tochar5(alphabet, a, b, c);
				if (padding) {
					yield padding;
					yield padding;
					yield padding;
				}

				break;
			} else throw error;
		}

		if (d < 0x00 || d > 0xff) {
			const reason = `byte out of range 0x00 <= ${d} <= 0xFF`;
			const position = {start, end: start + 1};
			throw new Base32DecodeError(reason, bytes, position);
		}

		++start;

		try {
			e = next(it);
		} catch (error) {
			if (error instanceof StopIteration) {
				yield* byte4tochar7(alphabet, a, b, c, d);
				if (padding) {
					yield padding;
				}

				break;
			} else throw error;
		}

		if (e < 0x00 || e > 0xff) {
			const reason = `byte out of range 0x00 <= ${e} <= 0xFF`;
			const position = {start, end: start + 1};
			throw new Base32DecodeError(reason, bytes, position);
		}

		yield* byte5tochar8(alphabet, a, b, c, d, e);

		++start;
	}
}
