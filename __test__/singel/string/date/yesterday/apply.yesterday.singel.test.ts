import {is} from '../../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('yesterday singel: apply', () => {

    it.each(dataForGoodTesting)('is.yesterday: Should true for $value', ({value}) => {
        expect(is.yesterday.apply({}, [value])).toBe(true);
    });

    it.each(dataForBadTesting)('is.yesterday: Should false for $value', ({value}) => {
        expect(is.yesterday.apply({}, [value])).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.yesterday: Should false for $value', ({value}) => {
        expect(!is.yesterday.apply({}, [value])).toBe(false);
    });

    it.each(dataForBadTesting)('!is.yesterday: Should true for $value', ({value}) => {
        expect(!is.yesterday.apply({}, [value])).toBe(true);
    });

});
