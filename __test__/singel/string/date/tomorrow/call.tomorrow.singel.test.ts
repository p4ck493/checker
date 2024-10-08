import {is} from '../../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('tomorrow singel: call', () => {

    it.each(dataForGoodTesting)('is.tomorrow: Should true for $value', ({value}) => {
        expect(is.tomorrow.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.tomorrow: Should false for $value', ({value}) => {
        expect(is.tomorrow.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.tomorrow: Should false for $value', ({value}) => {
        expect(!is.tomorrow.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('!is.tomorrow: Should true for $value', ({value}) => {
        expect(!is.tomorrow.call({}, value)).toBe(true);
    });

});
