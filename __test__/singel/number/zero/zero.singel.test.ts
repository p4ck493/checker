import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('Zero singel', () => {

    it.each(dataForGoodTesting)('is.zero: Should true for $value', ({value}) => {
        expect(is.zero(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.zero: Should false for $value', ({value}) => {
        expect(is.zero(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.zero: Should false for $value', ({value}) => {
        expect(!is.zero(value)).toBe(false);
    });

    it.each(dataForBadTesting)('!is.zero: Should true for $value', ({value}) => {
        expect(!is.zero(value)).toBe(true);
    });

});
