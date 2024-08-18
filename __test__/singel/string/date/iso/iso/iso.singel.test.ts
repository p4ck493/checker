import {is} from '../../../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('iso singel', () => {

    it.each(dataForGoodTesting)('is.iso: Should true for $value', ({value}) => {
        expect(is.iso(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.iso: Should false for $value', ({value}) => {
        expect(is.iso(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.iso: Should false for $value', ({value}) => {
        expect(!is.iso(value)).toBe(false);
    });

    it.each(dataForBadTesting)('!is.iso: Should true for $value', ({value}) => {
        expect(!is.iso(value)).toBe(true);
    });

});
