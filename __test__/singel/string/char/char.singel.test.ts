import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('char singel', () => {

    it.each(dataForGoodTesting)('is.char: Should true for $value', ({value}) => {
        expect(is.char(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.char: Should false for $value', ({value}) => {
        expect(is.char(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.char: Should false for $value', ({value}) => {
        expect(!is.char(value)).toBe(false);
    });

    it.each(dataForBadTesting)('!is.char: Should true for $value', ({value}) => {
        expect(!is.char(value)).toBe(true);
    });

});
