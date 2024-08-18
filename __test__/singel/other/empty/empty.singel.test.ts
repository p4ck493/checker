import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('empty singel', () => {

    it.each(dataForGoodTesting)('is.empty: Should true for $value', ({value}) => {
        expect(is.empty(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.empty: Should false for $value', ({value}) => {
        expect(is.empty(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.empty: Should false for $value', ({value}) => {
        expect(!is.empty(value)).toBe(false);
    });

    it.each(dataForBadTesting)('!is.empty: Should true for $value', ({value}) => {
        expect(!is.empty(value)).toBe(true);
    });

});
