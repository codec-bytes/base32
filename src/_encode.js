import { iter , next , StopIteration , enumerate } from '@aureooms/js-itertools' ;
import { object , reflect } from '@aureooms/js-mapping' ;
import { ValueError } from '@aureooms/js-error' ;

import char8tobyte5 from './char8tobyte5' ;
import char7tobyte4 from './char7tobyte4' ;
import char5tobyte3 from './char5tobyte3' ;
import char4tobyte2 from './char4tobyte2' ;
import char2tobyte1 from './char2tobyte1' ;

import Base32EncodeError from './Base32EncodeError' ;

import variants from './variants' ;
import DEFAULT_OPTIONS from './DEFAULT_OPTIONS' ;

export default function* _encode ( string , options = DEFAULT_OPTIONS ) {

	if ( options.variant ) {
		if ( variants.hasOwnProperty(options.variant) ) {
			options = variants[options.variant] ;
		}
		else {
			throw new ValueError( `unknown Base32 variant ${options.variant}` ) ;
		}
	}

	let start = 0 ;

	const index = options.index || object( reflect( enumerate( options.alphabet ) ) ) ;
	const padding = options.padding ;

	const it = iter(string) ;

	while ( true ) {

		let digits = [] ;

		let stop = 0

		do {

			try {
				digits.push( next( it ) ) ;
			}
			catch ( err ) {
				if ( err instanceof StopIteration ) break ;
				else throw err ;
			}

		} while ( ++stop < 8 ) ;

		if ( stop === 0 ) break ;

		if ( padding ) {

			if ( stop === 2 || stop === 4 || stop === 5 || stop === 7 ) {
				const reason = `missing padding after ${digits.join('')}` ;
				const position = { start : start , end : start + stop } ;
				throw new Base32EncodeError( reason , string , position ) ;
			}

			stop = digits.indexOf(padding) ;
			stop = stop === -1 ? digits.length : stop ;
			if ( stop === 0 || stop === 1 || stop === 3 || stop === 6 ) {
				const reason = `padding at wrong position in ${digits.join('')}` ;
				const position = { start : start + stop , end : start + stop + 1 } ;
				throw new Base32EncodeError( reason , string , position ) ;
			}
			for ( let i = stop + 1 ; i < digits.length ; ++i ) {
				if ( digits[i] !== padding ) {
					const reason = `incorrect padding end in ${digits.join('')}` ;
					const position = { start : start + i , end : start + i + 1 } ;
					throw new Base32EncodeError( reason , string , position ) ;
				}
			}

			if ( digits.length !== 8 ) {
				const reason = `unterminated padding in ${digits.join('')}` ;
				const position = { start : start + stop , end : start + digits.length } ;
				throw new Base32EncodeError( reason , string , position ) ;
			}

		}

		const mask = [ 0 , 7 , 0 , 15 , 1 , 0 , 3 ] ;

		for ( let i = 0 ; i < stop ; ++i ) {

			const digit = digits[i] ;

			if ( !index.hasOwnProperty(digit) ) {
				const reason = `not in alphabet ${digit}` ;
				const position = { start : start + i , end : start + i + 1 } ;
				throw new Base32EncodeError( reason , string , position ) ;
			}

			else if ( i + 1 === stop && index[digit] & mask[i] ) {
				const reason = `trailing bits in ${digits.slice(0,i+1).join('')}, last digit should be ${options.alphabet[index[digit] & ~mask[i]]}` ;
				const position = { start : start + i , end : start + i + 1 } ;
				throw new Base32EncodeError( reason , string , position ) ;
			}

		}

		const [ a , b , c , d , e , f , g , h ] = digits ;
		let reason, position ;
		switch ( stop ) {
			case 8:
				yield* char8tobyte5(index, a, b, c, d, e, f, g, h) ;
				break;
			case 7:
				yield* char7tobyte4(index, a, b, c, d, e, f, g) ;
				break;
			case 6:
				reason = `unterminated byte ${a}${b}${c}${d}${e}${f}` ;
				position = { start : start , end : start + 6 } ;
				throw new Base32EncodeError( reason , string , position ) ;
			case 5:
				yield* char5tobyte3(index, a, b, c, d, e) ;
				break;
			case 4:
				yield* char4tobyte2(index, a, b, c, d) ;
				break;
			case 3:
				reason = `unterminated byte ${a}${b}${c}` ;
				position = { start : start , end : start + 3 } ;
				throw new Base32EncodeError( reason , string , position ) ;
			case 2:
				yield* char2tobyte1(index, a, b) ;
				break;
			case 1:
				reason = `unterminated byte ${a}` ;
				position = { start : start , end : start + 1 } ;
				throw new Base32EncodeError( reason , string , position ) ;
		}

		start += 8 ;

	}

}
