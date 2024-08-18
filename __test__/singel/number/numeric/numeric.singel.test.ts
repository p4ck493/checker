import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('numeric singel', () => {


    it.each(dataForGoodTesting)('is.numeric: Should true for $value', ({value}) => {
        expect(is.numeric(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.numeric: Should false for $value', ({value}) => {
        expect(is.numeric(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.numeric: Should false for $value', ({value}) => {
        expect(!is.numeric(value)).toBe(false);
    });

    it.each(dataForBadTesting)('!is.numeric: Should true for $value', ({value}) => {
        expect(!is.numeric(value)).toBe(true);
    });

});
