import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('kebabCase singel', () => {

    it.each(dataForGoodTesting)('is.kebabCase: Should true for $value', ({value}) => {
        expect(is.kebabCase(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.kebabCase: Should false for $value', ({value}) => {
        expect(is.kebabCase(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.kebabCase: Should false for $value', ({value}) => {
        expect(!is.kebabCase(value)).toBe(false);
    });

    it.each(dataForBadTesting)('!is.kebabCase: Should true for $value', ({value}) => {
        expect(!is.kebabCase(value)).toBe(true);
    });

});
