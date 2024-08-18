import {is} from '../../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('yesterday singel', () => {

    it.each(dataForGoodTesting)('is.yesterday: Should true for $value', ({value}) => {
        expect(is.yesterday(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.yesterday: Should false for $value', ({value}) => {
        expect(is.yesterday(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.yesterday: Should false for $value', ({value}) => {
        expect(!is.yesterday(value)).toBe(false);
    });

    it.each(dataForBadTesting)('!is.yesterday: Should true for $value', ({value}) => {
        expect(!is.yesterday(value)).toBe(true);
    });

});
