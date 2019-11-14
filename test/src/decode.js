import test from 'ava' ;
import ascii from '@aureooms/js-codec-ascii' ;
import { ValueError , NotImplementedError } from '@aureooms/js-error' ;
import { CodecError } from '@aureooms/js-codec' ;
import { range } from '@aureooms/js-itertools' ;

import { decode , Base32DecodeError , byte2pair } from '../../src' ;

function success ( t , bytes , options , expected ) {

	const string = decode( bytes , options ) ;

	t.deepEqual( string , expected ) ;

}

success.title = ( _ , bytes , options , expected ) => `decode '${bytes}' ${JSON.stringify(options)} should succeed` ;

function from_ascii ( t , string , options , expected ) {
	const bytes = ascii.encode( string ) ;
	return success( t , bytes , options , expected ) ;
}

from_ascii.title = success.title ;

function failure ( t , bytes , options , ExpectedError , position ) {

	t.throws( ( ) => decode( bytes , options ) , ExpectedError ) ;

	if ( position ) {
		t.throws( ( ) => decode( bytes , options ) , CodecError ) ;
		t.throws( ( ) => decode( bytes , options ) , ( error ) => error.encoding === 'base32' ) ;
		t.throws( ( ) => decode( bytes , options ) , ( error ) => error.object === bytes ) ;
		t.throws( ( ) => decode( bytes , options ) , ( error ) => error.position.start === position.start ) ;
		t.throws( ( ) => decode( bytes , options ) , ( error ) => error.position.end === position.end ) ;
	}

}

failure.title = ( _ , bytes , options , expected ) => `decode '${bytes}' ${JSON.stringify(options)} should fail` ;

test( from_ascii , ''      , undefined , ''         ) ;
test( from_ascii , 't'     , undefined , 'OQ======' ) ;
test( from_ascii , 'te'    , undefined , 'ORSQ====' ) ;
test( from_ascii , 'tes'   , undefined , 'ORSXG===' ) ;
test( from_ascii , 'test'  , undefined , 'ORSXG5A=' ) ;
test( from_ascii , 'test!' , undefined , 'ORSXG5BB' ) ;

test( from_ascii , 'A'     , undefined , 'IE======' ) ;
test( from_ascii , 'AB'    , undefined , 'IFBA====' ) ;
test( from_ascii , 'ABC'   , undefined , 'IFBEG===' ) ;
test( from_ascii , 'ABCD'  , undefined , 'IFBEGRA=' ) ;
test( from_ascii , 'ABCDE' , undefined , 'IFBEGRCF' ) ;

test(
	from_ascii ,
	'This text will be encoded in base32 and then decoded back again' ,
	undefined ,
	'KRUGS4ZAORSXQ5BAO5UWY3BAMJSSAZLOMNXWIZLEEBUW4IDCMFZWKMZSEBQW4ZBAORUGK3RAMRSWG33EMVSCAYTBMNVSAYLHMFUW4===' ,
) ;

test( failure , [] , { variant : '?' } , ValueError ) ;

test( failure , [ 1024 ] , undefined , Base32DecodeError , { start : 0 , end : 1 } ) ;
test( failure , [ 0x00 , 1024 ] , undefined , Base32DecodeError , { start : 1 , end : 2 } ) ;
test( failure , [ 0x00 , 0x00 , 1024 ] , undefined , Base32DecodeError , { start : 2 , end : 3 } ) ;
test( failure , [ 0x00 , 0x00 , 0x00 , 1024 ] , undefined , Base32DecodeError , { start : 3 , end : 4 } ) ;
test( failure , [ 0x00 , 0x00 , 0x00 , 0x00 , 1024 ] , undefined , Base32DecodeError , { start : 4 , end : 5 } ) ;

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

// base32hex
test( from_ascii , 'Hello' , { variant : 'base32hex' } , '91IMOR3F' ) ;

// base32c
test( from_ascii, 'Hello', { variant : 'base32c' } , 'D5MQSV7J' );

// base32cc
test( from_ascii, 'Hello', { variant : 'base32cc' } , 'd5MqsV7j' ); // check-bits: 0110 0110

// readme
test( from_ascii , 'Hello!' , undefined , 'JBSWY3DPEE======' ) ;
test( from_ascii , 'Hello!' , { variant : 'base32hex' } , '91IMOR3F44======' ) ;
test( from_ascii , 'Hello!' , { variant : 'z-base-32' } , 'jb1sa5dxrr' ) ;
test( from_ascii , 'Hello!' , { variant : 'crockford' } , '91JPRV3F44' ) ;
test( from_ascii , 'Hello!' , { alphabet : 'BCDEFGHIJKLMNOPQRSTUVWXYZ234567A' , padding : '.' } , 'KCTXZ4EQFF......' ) ;
