import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('truthy singel: apply', () => {

    it.each(dataForGoodTesting)('is.truthy: Should true for $value', ({value}) => {
        expect(is.truthy.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.truthy: Should false for $value', ({value}) => {
        expect(is.truthy.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.truthy: Should false for $value', ({value}) => {
        expect(!is.truthy.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('!is.truthy: Should true for $value', ({value}) => {
        expect(!is.truthy.apply({}, [value])).toBe(true);
    });

});
