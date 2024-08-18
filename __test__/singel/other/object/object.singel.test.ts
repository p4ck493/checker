import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('object singel', () => {


    it.each(dataForGoodTesting)('is.object: Should true for $value', ({value}) => {
        expect(is.object(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.object: Should false for $value', ({value}) => {
        expect(is.object(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.object: Should false for $value', ({value}) => {
        expect(!is.object(value)).toBe(false);
    });

    it.each(dataForBadTesting)('!is.object: Should true for $value', ({value}) => {
        expect(!is.object(value)).toBe(true);
    });

});
