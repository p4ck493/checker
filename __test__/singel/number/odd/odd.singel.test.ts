import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('odd singel', () => {


    it.each(dataForGoodTesting)('is.odd: Should true for $value', ({value}) => {
        expect(is.odd(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.odd: Should false for $value', ({value}) => {
        expect(is.odd(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.odd: Should false for $value', ({value}) => {
        expect(!is.odd(value)).toBe(false);
    });

    it.each(dataForBadTesting)('!is.odd: Should true for $value', ({value}) => {
        expect(!is.odd(value)).toBe(true);
    });

});
