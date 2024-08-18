import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('[TODO] ReferenceError singel: call', () => {

    // it.each(dataForGoodTesting)('is.ReferenceError: Should true for $value', ({value}) => {
    //     expect(is.ReferenceError.call({}, value)).toBe(true);
    // });
    //
    // it.each(dataForBadTesting)('is.ReferenceError: Should false for $value', ({value}) => {
    //     expect(is.ReferenceError.call({}, value)).toBe(false);
    // });
    //
    // it.each(dataForGoodTesting)('!is.ReferenceError: Should false for $value', ({value}) => {
    //     expect(!is.ReferenceError.call({}, value)).toBe(false);
    // });
    //
    // it.each(dataForBadTesting)('!is.ReferenceError: Should true for $value', ({value}) => {
    //     expect(!is.ReferenceError.call({}, value)).toBe(true);
    // });

    it('Empty', () => {
        expect(true).toBeTruthy();
    });

});
