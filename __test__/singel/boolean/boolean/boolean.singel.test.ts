import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('boolean singel', () => {


    it.each(dataForGoodTesting)('is.boolean: Should true for $value', ({value}) => {
        expect(is.boolean(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.boolean: Should false for $value', ({value}) => {
        expect(is.boolean(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.boolean: Should false for $value', ({value}) => {
        expect(!is.boolean(value)).toBe(false);
    });

    it.each(dataForBadTesting)('!is.boolean: Should true for $value', ({value}) => {
        expect(!is.boolean(value)).toBe(true);
    });

});
