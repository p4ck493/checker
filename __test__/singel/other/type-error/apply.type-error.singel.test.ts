import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('[TODO] TypeError singel: apply', () => {

    // it.each(dataForGoodTesting)('is.TypeError: Should true for $value', ({value}) => {
    //     expect(is.TypeError.apply({}, [value])).toBe(true);
    // });
    //
    // it.each(dataForBadTesting)('is.TypeError: Should false for $value', ({value}) => {
    //     expect(is.TypeError.apply({}, [value])).toBe(false);
    // });
    //
    // it.each(dataForGoodTesting)('!is.TypeError: Should false for $value', ({value}) => {
    //     expect(!is.TypeError.apply({}, [value])).toBe(false);
    // });
    //
    // it.each(dataForBadTesting)('!is.TypeError: Should true for $value', ({value}) => {
    //     expect(!is.TypeError.apply({}, [value])).toBe(true);
    // });

    it('Empty', () => {
        expect(true).toBeTruthy();
    });

});
