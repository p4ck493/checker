import {is} from '../../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('tomorrow singel', () => {

    it.each(dataForGoodTesting)('is.tomorrow: Should true for $value', ({value}) => {
        expect(is.tomorrow(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.tomorrow: Should false for $value', ({value}) => {
        expect(is.tomorrow(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.tomorrow: Should false for $value', ({value}) => {
        expect(!is.tomorrow(value)).toBe(false);
    });

    it.each(dataForBadTesting)('!is.tomorrow: Should true for $value', ({value}) => {
        expect(!is.tomorrow(value)).toBe(true);
    });

});
