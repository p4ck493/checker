import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('snakeCase singel', () => {

    it.each(dataForGoodTesting)('is.snakeCase: Should true for $value', ({value}) => {
        expect(is.snakeCase(value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.snakeCase: Should false for $value', ({value}) => {
        expect(is.snakeCase(value)).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.snakeCase: Should false for $value', ({value}) => {
        expect(!is.snakeCase(value)).toBe(false);
    });

    it.each(dataForBadTesting)('!is.snakeCase: Should true for $value', ({value}) => {
        expect(!is.snakeCase(value)).toBe(true);
    });

});
