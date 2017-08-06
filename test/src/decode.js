import test from 'ava' ;
import ascii from '@aureooms/js-codec-ascii' ;
import { ValueError } from '@aureooms/js-error' ;
import { CodecError } from '@aureooms/js-codec' ;
import { range } from '@aureooms/js-itertools' ;

import { decode , Base32DecodeError , byte2pair } from '../../src' ;

function success ( t , bytes , options , expected ) {

	const string = decode( bytes , options ) ;

	t.deepEqual( string , expected ) ;

}

success.title = ( _ , bytes , options , expected ) => `decode '${bytes}' ${JSON.stringify(options)} succeed` ;

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

test( from_ascii , 'test' , undefined , 'ORSXG5A=' ) ;
