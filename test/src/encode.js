import test from 'ava' ;
import ascii from '@aureooms/js-codec-ascii' ;
import { ValueError , NotImplementedError } from '@aureooms/js-error' ;
import { CodecError } from '@aureooms/js-codec' ;
import { range } from '@aureooms/js-itertools' ;

import { encode , Base32EncodeError , byte2pair } from '../../src' ;

function success ( t , string , options , expected ) {

	const bytes = encode( string , options ) ;

	t.deepEqual( bytes , expected ) ;

}

success.title = ( _ , string , options , expected ) => `encode '${string}' should succeed` ;

function from_ascii ( t , string , options , expected ) {
	const bytes = ascii.encode( expected ) ;
	return success( t , string , options , bytes ) ;
}

from_ascii.title = success.title ;

function failure ( t , string , options , ExpectedError , position ) {

	t.throws( ( ) => encode( string , options ) , ExpectedError ) ;

	if ( position ) {
		t.throws( ( ) => encode( string , options ) , CodecError ) ;
		t.throws( ( ) => encode( string , options ) , ( error ) => error.encoding === 'base32' ) ;
		t.throws( ( ) => encode( string , options ) , ( error ) => error.object === string ) ;
		t.throws( ( ) => encode( string , options ) , ( error ) => error.position.start === position.start ) ;
		t.throws( ( ) => encode( string , options ) , ( error ) => error.position.end === position.end ) ;
	}

}

failure.title = ( _ , string , options , expected ) => `encode '${string}' should fail` ;

test( from_ascii , ''         , undefined , ''      ) ;
test( from_ascii , 'OQ======' , undefined , 't'     ) ;
test( from_ascii , 'ORSQ====' , undefined , 'te'    ) ;
test( from_ascii , 'ORSXG===' , undefined , 'tes'   ) ;
test( from_ascii , 'ORSXG5A=' , undefined , 'test'  ) ;
test( from_ascii , 'ORSXG5BB' , undefined , 'test!' ) ;

test( from_ascii , 'IE======' , undefined , 'A'     ) ;
test( from_ascii , 'IFBA====' , undefined , 'AB'    ) ;
test( from_ascii , 'IFBEG===' , undefined , 'ABC'   ) ;
test( from_ascii , 'IFBEGRA=' , undefined , 'ABCD'  ) ;
test( from_ascii , 'IFBEGRCF' , undefined , 'ABCDE' ) ;

test(
	from_ascii ,
	'KRUGS4ZAORSXQ5BAO5UWY3BAMJSSAZLOMNXWIZLEEBUW4IDCMFZWKMZSEBQW4ZBAORUGK3RAMRSWG33EMVSCAYTBMNVSAYLHMFUW4===' ,
	undefined ,
	'This text will be encoded in base32 and then decoded back again' ,
) ;

test( failure , '' , { variant : '?' } , ValueError ) ;

test( failure , 'OR======' , undefined , Base32EncodeError , { start : 1 , end : 2 } ) ;
test( failure , 'ORSX====' , undefined , Base32EncodeError , { start : 3 , end : 4 } ) ;
test( failure , 'ORSXH===' , undefined , Base32EncodeError , { start : 4 , end : 5 } ) ;
test( failure , 'ORSXG5B=' , undefined , Base32EncodeError , { start : 6 , end : 7 } ) ;

test(
	failure ,
	{
		[Symbol.iterator] : function ( ) {
			return {
				next : function () { throw new NotImplementedError() ; }
			} ;
		}
	} ,
	undefined ,
	NotImplementedError ,
) ;

// padding at wrong position
test( failure , '========' , undefined , Base32EncodeError , { start : 0 , end : 1 } ) ;

// incorrect padding
test( failure , 'AA=?' , undefined , Base32EncodeError , { start : 3 , end : 4 } ) ;
test( failure , 'AA==A' , undefined , Base32EncodeError , { start : 4 , end : 5 } ) ;
test( failure , 'AA===*' , undefined , Base32EncodeError , { start : 5 , end : 6 } ) ;
test( failure , 'AA====8' , undefined , Base32EncodeError , { start : 6 , end : 7 } ) ;
test( failure , 'AA=====&' , undefined , Base32EncodeError , { start : 7 , end : 8 } ) ;

test( failure , 'AAAA=?' , undefined , Base32EncodeError , { start : 5 , end : 6 } ) ;
test( failure , 'AAAA==A' , undefined , Base32EncodeError , { start : 6 , end : 7 } ) ;
test( failure , 'AAAA===*' , undefined , Base32EncodeError , { start : 7 , end : 8 } ) ;


// unterminated padding
test( failure , 'AA' , undefined , Base32EncodeError , { start : 0 , end : 2 } ) ;
test( failure , 'AAAA' , undefined , Base32EncodeError , { start : 0 , end : 4 } ) ;
test( failure , 'AAAAA' , undefined , Base32EncodeError , { start : 0 , end : 5 } ) ;
test( failure , 'AAAAAAA' , undefined , Base32EncodeError , { start : 0 , end : 7 } ) ;

test( failure , 'AA=' , undefined , Base32EncodeError , { start : 0 , end : 3 } ) ;
test( failure , 'AA==' , undefined , Base32EncodeError , { start : 0 , end : 4 } ) ;
test( failure , 'AA===' , undefined , Base32EncodeError , { start : 0 , end : 5 } ) ;
test( failure , 'AA====' , undefined , Base32EncodeError , { start : 0 , end : 6 } ) ;
test( failure , 'AA=====' , undefined , Base32EncodeError , { start : 0 , end : 7 } ) ;

test( failure , 'AAAA=' , undefined , Base32EncodeError , { start : 0 , end : 5 } ) ;
test( failure , 'AAAA==' , undefined , Base32EncodeError , { start : 0 , end : 6 } ) ;
test( failure , 'AAAA===' , undefined , Base32EncodeError , { start : 0 , end : 7 } ) ;

test( failure , 'AAAAA=' , undefined , Base32EncodeError , { start : 0 , end : 6 } ) ;
test( failure , 'AAAAA==' , undefined , Base32EncodeError , { start : 0 , end : 7 } ) ;

// not in alphabet ${digit}
test( failure , 'Z=======' , { variant : 'base32hex'} , Base32EncodeError , { start : 0 , end : 1 } ) ;
test( failure , '0Z======' , { variant : 'base32hex'} , Base32EncodeError , { start : 1 , end : 2 } ) ;
test( failure , '00Z=====' , { variant : 'base32hex'} , Base32EncodeError , { start : 2 , end : 3 } ) ;
test( failure , '000Z====' , { variant : 'base32hex'} , Base32EncodeError , { start : 3 , end : 4 } ) ;
test( failure , '0000Z===' , { variant : 'base32hex'} , Base32EncodeError , { start : 4 , end : 5 } ) ;
test( failure , '00000Z==' , { variant : 'base32hex'} , Base32EncodeError , { start : 5 , end : 6 } ) ;
test( failure , '000000Z=' , { variant : 'base32hex'} , Base32EncodeError , { start : 6 , end : 7 } ) ;
test( failure , '0000000Z' , { variant : 'base32hex'} , Base32EncodeError , { start : 7 , end : 8 } ) ;

// unterminated byte sequence
test( failure , 'A' , undefined , Base32EncodeError , { start : 0 , end : 1 } ) ;
test( failure , 'A=' , undefined , Base32EncodeError , { start : 0 , end : 1 } ) ;
test( failure , 'A==' , undefined , Base32EncodeError , { start : 0 , end : 1 } ) ;
test( failure , 'A===' , undefined , Base32EncodeError , { start : 0 , end : 1 } ) ;
test( failure , 'A====' , undefined , Base32EncodeError , { start : 0 , end : 1 } ) ;
test( failure , 'A=====' , undefined , Base32EncodeError , { start : 0 , end : 1 } ) ;
test( failure , 'A======' , undefined , Base32EncodeError , { start : 0 , end : 1 } ) ;
test( failure , 'A=======' , undefined , Base32EncodeError , { start : 0 , end : 1 } ) ;
test( failure , 'AAA' , undefined , Base32EncodeError , { start : 0 , end : 3 } ) ;
test( failure , 'AAA=' , undefined , Base32EncodeError , { start : 0 , end : 3 } ) ;
test( failure , 'AAA==' , undefined , Base32EncodeError , { start : 0 , end : 3 } ) ;
test( failure , 'AAA===' , undefined , Base32EncodeError , { start : 0 , end : 3 } ) ;
test( failure , 'AAA====' , undefined , Base32EncodeError , { start : 0 , end : 3 } ) ;
test( failure , 'AAA=====' , undefined , Base32EncodeError , { start : 0 , end : 3 } ) ;
test( failure , 'AAAAAA=' , undefined , Base32EncodeError , { start : 0 , end : 6 } ) ;
test( failure , 'AAAAAA==' , undefined , Base32EncodeError , { start : 0 , end : 6 } ) ;
test( failure , 'AAAAAA=?' , undefined , Base32EncodeError , { start : 0 , end : 6 } ) ;

test( failure , 'BBBBBBBBA=======' , undefined , Base32EncodeError , { start : 8 , end : 9 } ) ;
test( failure , 'BBBBBBBBAAA=====' , undefined , Base32EncodeError , { start : 8 , end : 11 } ) ;
test( failure , 'BBBBBBBBAAAAAA==' , undefined , Base32EncodeError , { start : 8 , end : 14 } ) ;

// input continues after padding
test( failure , 'AA=======' , undefined , Base32EncodeError , { start : 8 , end : 9 } ) ;
test( failure , 'AA======A' , undefined , Base32EncodeError , { start : 8 , end : 9 } ) ;
test( failure , 'AA======?' , undefined , Base32EncodeError , { start : 8 , end : 9 } ) ;

// variants
test( from_ascii , '91IMOR3F' , { variant : 'base32hex' } , 'Hello' ) ;
