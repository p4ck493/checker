import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('onlySpace singel', () => {

    it.each(dataForGoodTesting)('is.onlySpace: Should true for $value', ({value}) => {
        expect(is.onlySpace(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.onlySpace: Should false for $value', ({value}) => {
        expect(is.onlySpace(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.onlySpace: Should false for $value', ({value}) => {
        expect(!is.onlySpace(value)).toBe(false);
    });

    it.each(dataForBadTesting)('!is.onlySpace: Should true for $value', ({value}) => {
        expect(!is.onlySpace(value)).toBe(true);
    });

});
