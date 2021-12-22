import {asyncIteratorToArray} from '@async-iterable-iterator/async-iterator-to-array';

export const asyncIterableToArray = async (asyncIterable) => {
	const asyncIterator = asyncIterable[Symbol.asyncIterator]();
	return asyncIteratorToArray(asyncIterator);
};
