import { DecodeError } from '@codec-bytes/error' ;

export default class Base32DecodeError extends DecodeError {

	constructor ( reason , object , position ) {
		super( 'base32' , reason , object , position ) ;
	}

}
