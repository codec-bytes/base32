import DEFAULT_OPTIONS from './DEFAULT_OPTIONS.js';
import _encode from './_encode.js';

export default function encode(bytes, options = DEFAULT_OPTIONS) {
	return [..._encode(bytes, options)];
}
