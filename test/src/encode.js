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
