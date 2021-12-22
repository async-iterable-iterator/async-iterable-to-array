import test from 'ava';

import {asyncIterableToArray} from '../../src/index.js';

const asyncify = async function* (array) {
	// eslint-disable-next-line no-await-in-loop
	for (const x of array) yield await x;
};

const macro = async (t, expected) => {
	const asyncIterable = asyncify(expected);
	const actual = await asyncIterableToArray(asyncIterable);
	t.deepEqual(actual, expected);
};

macro.title = (title, expected) => title ?? JSON.stringify(expected);

test(macro, [1, 2, 3]);
test(macro, [1, Math.random(), 3]);
test(macro, [1, Math.random(), 3]);
