import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('false singel', () => {


    it.each(dataForGoodTesting)('is.false: Should true for $value', ({value}) => {
        expect(is.false(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.false: Should false for $value', ({value}) => {
        expect(is.false(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.false: Should false for $value', ({value}) => {
        expect(!is.false(value)).toBe(false);
    });

    it.each(dataForBadTesting)('!is.false: Should true for $value', ({value}) => {
        expect(!is.false(value)).toBe(true);
    });

});
