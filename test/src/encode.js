import test from 'ava' ;
import ascii from '@aureooms/js-codec-ascii' ;
import { ValueError } from '@aureooms/js-error' ;
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

test( from_ascii , 'ORSXG5A=' , undefined , 'test' ) ;
