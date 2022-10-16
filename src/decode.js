import _decode from './_decode.js';
import DEFAULT_OPTIONS from './DEFAULT_OPTIONS.js';

export default function decode(bytes, options = DEFAULT_OPTIONS) {
	return [..._decode(bytes, options)].join('');
}
