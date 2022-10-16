import { EncodeError } from '@codec-bytes/error' ;

export default class Base32EncodeError extends EncodeError {

	constructor ( reason , object , position ) {
		super( 'base32' , reason , object , position ) ;
	}

}

