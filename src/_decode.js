import {iter} from '@iterable-iterator/iter';
import {next, StopIteration} from '@iterable-iterator/next';
import { ValueError } from '@failure-abstraction/error' ;

import byte5tochar8 from './byte5tochar8' ;
import byte4tochar7 from './byte4tochar7' ;
import byte3tochar5 from './byte3tochar5' ;
import byte2tochar4 from './byte2tochar4' ;
import byte1tochar2 from './byte1tochar2' ;

import Base32DecodeError from './Base32DecodeError' ;

import variants from './variants' ;
import DEFAULT_OPTIONS from './DEFAULT_OPTIONS' ;

export default function* _decode ( bytes , options = DEFAULT_OPTIONS ) {

	if ( options.variant ) {
		if ( variants.hasOwnProperty(options.variant) ) {
			options = variants[options.variant] ;
		}
		else {
			throw new ValueError( `unknown Base32 variant ${options.variant}` ) ;
		}
	}

	let start = 0 ;

	const { alphabet , padding } = options ;

	const it = iter(bytes) ;

	while ( true ) {

		let a, b, c, d, e;

		try {
			a = next( it ) ;
		}
		catch ( err ) {
			if ( err instanceof StopIteration ) break ;
			else throw err ;
		}

		if ( a < 0x00 || a > 0xFF ) {
			const reason = `byte out of range 0x00 <= ${a} <= 0xFF` ;
			const position = { start : start , end : start + 1 } ;
			throw new Base32DecodeError( reason , bytes , position ) ;
		}

		++start;

		try {
			b = next( it ) ;
		}
		catch ( err ) {
			if ( err instanceof StopIteration ) {
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
			}
			else throw err ;
		}

		if ( b < 0x00 || b > 0xFF ) {
			const reason = `byte out of range 0x00 <= ${b} <= 0xFF` ;
			const position = { start : start , end : start + 1 } ;
			throw new Base32DecodeError( reason , bytes , position ) ;
		}

		++start;

		try {
			c = next( it ) ;
		}
		catch ( err ) {
			if ( err instanceof StopIteration ) {
				yield* byte2tochar4(alphabet, a, b);
				if (padding) {
					yield padding;
					yield padding;
					yield padding;
					yield padding;
				}
				break;
			}
			else throw err ;
		}

		if ( c < 0x00 || c > 0xFF ) {
			const reason = `byte out of range 0x00 <= ${c} <= 0xFF` ;
			const position = { start : start , end : start + 1 } ;
			throw new Base32DecodeError( reason , bytes , position ) ;
		}

		++start;

		try {
			d = next( it ) ;
		}
		catch ( err ) {
			if ( err instanceof StopIteration ) {
				yield* byte3tochar5(alphabet, a, b, c);
				if (padding) {
					yield padding;
					yield padding;
					yield padding;
				}
				break;
			}
			else throw err ;
		}

		if ( d < 0x00 || d > 0xFF ) {
			const reason = `byte out of range 0x00 <= ${d} <= 0xFF` ;
			const position = { start : start , end : start + 1 } ;
			throw new Base32DecodeError( reason , bytes , position ) ;
		}

		++start;

		try {
			e = next( it ) ;
		}
		catch ( err ) {
			if ( err instanceof StopIteration ) {
				yield* byte4tochar7(alphabet, a, b, c, d);
				if (padding) {
					yield padding;
				}
				break;
			}
			else throw err ;
		}

		if ( e < 0x00 || e > 0xFF ) {
			const reason = `byte out of range 0x00 <= ${e} <= 0xFF` ;
			const position = { start : start , end : start + 1 } ;
			throw new Base32DecodeError( reason , bytes , position ) ;
		}

		yield* byte5tochar8(alphabet, a, b, c, d, e);

		++start;

	}

}
