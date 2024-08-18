import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('space singel: call', () => {

    it.each(dataForGoodTesting)('is.space: Should true for $value', ({value}) => {
        expect(is.space.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.space: Should false for $value', ({value}) => {
        expect(is.space.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.space: Should false for $value', ({value}) => {
        expect(!is.space.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('!is.space: Should true for $value', ({value}) => {
        expect(!is.space.call({}, value)).toBe(true);
    });

});
