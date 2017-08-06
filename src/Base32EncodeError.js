import { EncodeError } from '@aureooms/js-codec' ;

export default class Base32EncodeError extends EncodeError {

	constructor ( reason , object , position ) {
		super( 'base32' , reason , object , position ) ;
	}

}

