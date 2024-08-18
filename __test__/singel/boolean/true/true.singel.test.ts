import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('true singel', () => {

    it.each(dataForGoodTesting)('is.true: Should true for $value', ({value}) => {
        expect(is.true(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.true: Should false for $value', ({value}) => {
        expect(is.true(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.true: Should false for $value', ({value}) => {
        expect(!is.true(value)).toBe(false);
    });

    it.each(dataForBadTesting)('!is.true: Should true for $value', ({value}) => {
        expect(!is.true(value)).toBe(true);
    });

});
