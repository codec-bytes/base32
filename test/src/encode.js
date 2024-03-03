import test from 'ava';

import * as ascii from '@codec-bytes/ascii';
import {NotImplementedError} from '@failure-abstraction/error';

import {ValueError, CodecError} from './_fixtures.js';

import {encode, Base32EncodeError} from '#module';

function success(t, string, options, expected) {
	const bytes = encode(string, options);

	t.deepEqual(bytes, expected);
}

success.title = (title, string, options, expected) =>
	title ??
	`encode(${JSON.stringify(string)}, ${JSON.stringify(
		options,
	)})' == ${JSON.stringify(expected)}`;

function from_ascii(t, string, options, expected) {
	const bytes = ascii.encode(expected);
	return success(t, string, options, bytes);
}

from_ascii.title = success.title;

function failure(t, string, options, ExpectedError, position) {
	const error = t.throws(() => encode(string, options), {
		instanceOf: ExpectedError,
	});

	if (position) {
		t.true(error instanceof CodecError);
		t.is(error.encoding, 'base32');
		t.is(error.object, string);
		t.is(error.position.start, position.start);
		t.is(error.position.end, position.end);
	}
}

failure.title = (title, string, options, expected) =>
	title ??
	`encode(${JSON.stringify(string)}, ${JSON.stringify(options)})' fails with ${
		expected.name
	}`;

test(from_ascii, '', undefined, '');
test(from_ascii, 'OQ======', undefined, 't');
test(from_ascii, 'ORSQ====', undefined, 'te');
test(from_ascii, 'ORSXG===', undefined, 'tes');
test(from_ascii, 'ORSXG5A=', undefined, 'test');
test(from_ascii, 'ORSXG5BB', undefined, 'test!');

test(from_ascii, 'IE======', undefined, 'A');
test(from_ascii, 'IFBA====', undefined, 'AB');
test(from_ascii, 'IFBEG===', undefined, 'ABC');
test(from_ascii, 'IFBEGRA=', undefined, 'ABCD');
test(from_ascii, 'IFBEGRCF', undefined, 'ABCDE');

test(
	from_ascii,
	'KRUGS4ZAORSXQ5BAO5UWY3BAMJSSAZLOMNXWIZLEEBUW4IDCMFZWKMZSEBQW4ZBAORUGK3RAMRSWG33EMVSCAYTBMNVSAYLHMFUW4===',
	undefined,
	'This text will be encoded in base32 and then decoded back again',
);

test(failure, '', {variant: '?'}, ValueError);

test(failure, 'OR======', undefined, Base32EncodeError, {start: 1, end: 2});
test(failure, 'ORSX====', undefined, Base32EncodeError, {start: 3, end: 4});
test(failure, 'ORSXH===', undefined, Base32EncodeError, {start: 4, end: 5});
test(failure, 'ORSXG5B=', undefined, Base32EncodeError, {start: 6, end: 7});

test(
	failure,
	{
		[Symbol.iterator]() {
			return {
				next() {
					throw new NotImplementedError();
				},
			};
		},
	},
	undefined,
	NotImplementedError,
);

// Padding at wrong position
test(failure, '========', undefined, Base32EncodeError, {start: 0, end: 1});

// Incorrect padding
test(failure, 'AA=?', undefined, Base32EncodeError, {start: 3, end: 4});
test(failure, 'AA==A', undefined, Base32EncodeError, {start: 4, end: 5});
test(failure, 'AA===*', undefined, Base32EncodeError, {start: 5, end: 6});
test(failure, 'AA====8', undefined, Base32EncodeError, {start: 6, end: 7});
test(failure, 'AA=====&', undefined, Base32EncodeError, {start: 7, end: 8});

test(failure, 'AAAA=?', undefined, Base32EncodeError, {start: 5, end: 6});
test(failure, 'AAAA==A', undefined, Base32EncodeError, {start: 6, end: 7});
test(failure, 'AAAA===*', undefined, Base32EncodeError, {start: 7, end: 8});

// Unterminated padding
test(failure, 'AA', undefined, Base32EncodeError, {start: 0, end: 2});
test(failure, 'AAAA', undefined, Base32EncodeError, {start: 0, end: 4});
test(failure, 'AAAAA', undefined, Base32EncodeError, {start: 0, end: 5});
test(failure, 'AAAAAAA', undefined, Base32EncodeError, {start: 0, end: 7});

test(failure, 'AA=', undefined, Base32EncodeError, {start: 0, end: 3});
test(failure, 'AA==', undefined, Base32EncodeError, {start: 0, end: 4});
test(failure, 'AA===', undefined, Base32EncodeError, {start: 0, end: 5});
test(failure, 'AA====', undefined, Base32EncodeError, {start: 0, end: 6});
test(failure, 'AA=====', undefined, Base32EncodeError, {start: 0, end: 7});

test(failure, 'AAAA=', undefined, Base32EncodeError, {start: 0, end: 5});
test(failure, 'AAAA==', undefined, Base32EncodeError, {start: 0, end: 6});
test(failure, 'AAAA===', undefined, Base32EncodeError, {start: 0, end: 7});

test(failure, 'AAAAA=', undefined, Base32EncodeError, {start: 0, end: 6});
test(failure, 'AAAAA==', undefined, Base32EncodeError, {start: 0, end: 7});

// Not in alphabet ${digit}
test(failure, 'Z=======', {variant: 'base32hex'}, Base32EncodeError, {
	start: 0,
	end: 1,
});
test(failure, '0Z======', {variant: 'base32hex'}, Base32EncodeError, {
	start: 1,
	end: 2,
});
test(failure, '00Z=====', {variant: 'base32hex'}, Base32EncodeError, {
	start: 2,
	end: 3,
});
test(failure, '000Z====', {variant: 'base32hex'}, Base32EncodeError, {
	start: 3,
	end: 4,
});
test(failure, '0000Z===', {variant: 'base32hex'}, Base32EncodeError, {
	start: 4,
	end: 5,
});
test(failure, '00000Z==', {variant: 'base32hex'}, Base32EncodeError, {
	start: 5,
	end: 6,
});
test(failure, '000000Z=', {variant: 'base32hex'}, Base32EncodeError, {
	start: 6,
	end: 7,
});
test(failure, '0000000Z', {variant: 'base32hex'}, Base32EncodeError, {
	start: 7,
	end: 8,
});

// Unterminated byte sequence
test(failure, 'A', undefined, Base32EncodeError, {start: 0, end: 1});
test(failure, 'A=', undefined, Base32EncodeError, {start: 0, end: 1});
test(failure, 'A==', undefined, Base32EncodeError, {start: 0, end: 1});
test(failure, 'A===', undefined, Base32EncodeError, {start: 0, end: 1});
test(failure, 'A====', undefined, Base32EncodeError, {start: 0, end: 1});
test(failure, 'A=====', undefined, Base32EncodeError, {start: 0, end: 1});
test(failure, 'A======', undefined, Base32EncodeError, {start: 0, end: 1});
test(failure, 'A=======', undefined, Base32EncodeError, {start: 0, end: 1});
test(failure, 'AAA', undefined, Base32EncodeError, {start: 0, end: 3});
test(failure, 'AAA=', undefined, Base32EncodeError, {start: 0, end: 3});
test(failure, 'AAA==', undefined, Base32EncodeError, {start: 0, end: 3});
test(failure, 'AAA===', undefined, Base32EncodeError, {start: 0, end: 3});
test(failure, 'AAA====', undefined, Base32EncodeError, {start: 0, end: 3});
test(failure, 'AAA=====', undefined, Base32EncodeError, {start: 0, end: 3});
test(failure, 'AAAAAA=', undefined, Base32EncodeError, {start: 0, end: 6});
test(failure, 'AAAAAA==', undefined, Base32EncodeError, {start: 0, end: 6});
test(failure, 'AAAAAA=?', undefined, Base32EncodeError, {start: 0, end: 6});

test(failure, 'BBBBBBBBA=======', undefined, Base32EncodeError, {
	start: 8,
	end: 9,
});
test(failure, 'BBBBBBBBAAA=====', undefined, Base32EncodeError, {
	start: 8,
	end: 11,
});
test(failure, 'BBBBBBBBAAAAAA==', undefined, Base32EncodeError, {
	start: 8,
	end: 14,
});

// Input continues after padding
test(failure, 'AA=======', undefined, Base32EncodeError, {start: 8, end: 9});
test(failure, 'AA======A', undefined, Base32EncodeError, {start: 8, end: 9});
test(failure, 'AA======?', undefined, Base32EncodeError, {start: 8, end: 9});

// Variants
test(from_ascii, '91IMOR3F', {variant: 'base32hex'}, 'Hello');
