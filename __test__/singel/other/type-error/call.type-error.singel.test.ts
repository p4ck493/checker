import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('[TODO] TypeError singel: call', () => {


    // it.each(dataForGoodTesting)('is.TypeError: Should true for $value', ({value}) => {
    //     expect(is.TypeError.call({}, value)).toBe(true);
    // });
    //
    // it.each(dataForBadTesting)('is.TypeError: Should false for $value', ({value}) => {
    //     expect(is.TypeError.call({}, value)).toBe(false);
    // });
    //
    // it.each(dataForGoodTesting)('!is.TypeError: Should false for $value', ({value}) => {
    //     expect(!is.TypeError.call({}, value)).toBe(false);
    // });
    //
    // it.each(dataForBadTesting)('!is.TypeError: Should true for $value', ({value}) => {
    //     expect(!is.TypeError.call({}, value)).toBe(true);
    // });

    it('Empty', () => {
        expect(true).toBeTruthy();
    });

});
