import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('onlySpace singel: apply', () => {

    it.each(dataForGoodTesting)('is.onlySpace: Should true for $value', ({value}) => {
        expect(is.onlySpace.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.onlySpace: Should false for $value', ({value}) => {
        expect(is.onlySpace.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.onlySpace: Should false for $value', ({value}) => {
        expect(!is.onlySpace.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('!is.onlySpace: Should true for $value', ({value}) => {
        expect(!is.onlySpace.apply({}, [value])).toBe(true);
    });

});
