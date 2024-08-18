import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('space singel: apply', () => {

    it.each(dataForGoodTesting)('is.space: Should true for $value', ({value}) => {
        expect(is.space.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.space: Should false for $value', ({value}) => {
        expect(is.space.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.space: Should false for $value', ({value}) => {
        expect(!is.space.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('!is.space: Should true for $value', ({value}) => {
        expect(!is.space.apply({}, [value])).toBe(true);
    });

});
