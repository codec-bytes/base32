import _decode from './_decode' ;
import DEFAULT_OPTIONS from './DEFAULT_OPTIONS' ;

export default function decode ( bytes , options = DEFAULT_OPTIONS ) {

	return [ ..._decode(bytes, options) ].join('') ;

}
