import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('int singel', () => {


    it.each(dataForGoodTesting)('is.int: Should true for $value', ({value}) => {
        expect(is.int(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.int: Should false for $value', ({value}) => {
        expect(is.int(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.int: Should false for $value', ({value}) => {
        expect(!is.int(value)).toBe(false);
    });

    it.each(dataForBadTesting)('!is.int: Should true for $value', ({value}) => {
        expect(!is.int(value)).toBe(true);
    });

});
