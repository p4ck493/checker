import {is} from '../../../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('iso singel: apply', () => {

    it.each(dataForGoodTesting)('is.iso: Should true for $value', ({value}) => {
        expect(is.iso.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.iso: Should false for $value', ({value}) => {
        expect(is.iso.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.iso: Should false for $value', ({value}) => {
        expect(!is.iso.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('!is.iso: Should true for $value', ({value}) => {
        expect(!is.iso.apply({}, [value])).toBe(true);
    });

});
