import _encode from './_encode' ;
import DEFAULT_OPTIONS from './DEFAULT_OPTIONS' ;

export default function encode ( bytes , options = DEFAULT_OPTIONS ) {

	return [ ..._encode(bytes, options) ] ;

}
