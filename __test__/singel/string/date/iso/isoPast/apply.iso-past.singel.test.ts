import {is} from '../../../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('isoPast singel: apply', () => {

    it.each(dataForGoodTesting)('is.isoPast: Should true for $value', ({value}) => {
        expect(is.isoPast.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.isoPast: Should false for $value', ({value}) => {
        expect(is.isoPast.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.isoPast: Should false for $value', ({value}) => {
        expect(!is.isoPast.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('!is.isoPast: Should true for $value', ({value}) => {
        expect(!is.isoPast.apply({}, [value])).toBe(true);
    });

});
