import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('pascalCase singel', () => {

    it.each(dataForGoodTesting)('is.pascalCase: Should true for $value', ({value}) => {
        expect(is.pascalCase(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.pascalCase: Should false for $value', ({value}) => {
        expect(is.pascalCase(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.pascalCase: Should false for $value', ({value}) => {
        expect(!is.pascalCase(value)).toBe(false);
    });

    it.each(dataForBadTesting)('!is.pascalCase: Should true for $value', ({value}) => {
        expect(!is.pascalCase(value)).toBe(true);
    });

});
