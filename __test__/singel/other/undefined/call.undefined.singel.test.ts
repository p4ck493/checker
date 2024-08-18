import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('undefined singel: call', () => {


    it.each(dataForGoodTesting)('is.undefined: Should true for $value', ({value}) => {
        expect(is.undefined.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.undefined: Should false for $value', ({value}) => {
        expect(is.undefined.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.undefined: Should false for $value', ({value}) => {
        expect(!is.undefined.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('!is.undefined: Should true for $value', ({value}) => {
        expect(!is.undefined.call({}, value)).toBe(true);
    });

});
