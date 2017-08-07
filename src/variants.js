import { enumerate } from '@aureooms/js-itertools' ;

import { object , reflect } from '@aureooms/js-mapping' ;

const variants = {

	// standard ``base32''
	'RFC4648' : {
		'alphabet' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567' ,
		'padding' : '=' ,
	} ,

	// also RFC4648 (used by NSEC3)
	// ``encoded data maintains its sort order when the encoded data is compared bit-wise''
	'base32hex' : {
		'alphabet' : '0123456789ABCDEFGHIJKLMNOPQRSTUV' ,
		'padding' : '=' ,
	} ,

	// ``easier for human use and more compact''
	'z-base-32' : {
		'alphabet' : 'ybndrfg8ejkmcpqxot1uwisza345h769' ,
		'padding' : false ,
	} ,

	// It excludes the letters I, L, and O to avoid confusion with digits. It
	// also excludes the letter U to reduce the likelihood of accidental
	// obscenity.
	// See http://www.crockford.com/wrmg/base32.html
	'crockford' : {
		'alphabet' : '0123456789ABCDEFGHJKMNPQRSTVWXYZ' ,
		'padding' : false ,
		'index' : {
			'0' : 0,
			'o' : 0,
			'O' : 0,
			'1' : 1,
			'i' : 1,
			'I' : 1,
			'l' : 1,
			'L' : 1,
			'2' : 2,
			'3' : 3,
			'4' : 4,
			'5' : 5,
			'6' : 6,
			'7' : 7,
			'8' : 8,
			'9' : 9,
			'a' : 10,
			'A' : 10,
			'b' : 11,
			'B' : 11,
			'c' : 12,
			'C' : 12,
			'd' : 13,
			'D' : 13,
			'e' : 14,
			'E' : 14,
			'f' : 15,
			'F' : 15,
			'g' : 16,
			'G' : 16,
			'h' : 17,
			'H' : 17,
			'j' : 18,
			'J' : 18,
			'k' : 19,
			'K' : 19,
			'm' : 20,
			'M' : 20,
			'n' : 21,
			'N' : 21,
			'p' : 22,
			'P' : 22,
			'q' : 23,
			'Q' : 23,
			'r' : 24,
			'R' : 24,
			's' : 25,
			'S' : 25,
			't' : 26,
			'T' : 26,
			'v' : 27,
			'V' : 27,
			'w' : 28,
			'W' : 28,
			'x' : 29,
			'X' : 29,
			'y' : 30,
			'Y' : 30,
			'z' : 31,
			'Z' : 31,
		} ,
	} ,

} ;

for ( const variant in variants ) {
	if ( variants[variant].index ) continue ;
	variants[variant].index = object( reflect( enumerate( variants[variant].alphabet ) ) ) ;
}

variants['default'] = variants['base32'] = variants['RFC3548'] = variants['RFC4648'] ;
variants['RFC2938'] = variants['base32hex'] ;
variants['Crockford'] = variants['crockford'] ;

export default variants ;
