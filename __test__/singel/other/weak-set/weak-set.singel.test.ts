import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('[TODO] WeakSet singel', () => {


    // it.each(dataForGoodTesting)('is.WeakSet: Should true for $value', ({value}) => {
    //     expect(is.WeakSet(value)).toBe(true);
    // });
    //
    // it.each(dataForBadTesting)('is.WeakSet: Should false for $value', ({value}) => {
    //     expect(is.WeakSet(value)).toBe(false);
    // });
    //
    // it.each(dataForGoodTesting)('!is.WeakSet: Should false for $value', ({value}) => {
    //     expect(!is.WeakSet(value)).toBe(false);
    // });
    //
    // it.each(dataForBadTesting)('!is.WeakSet: Should true for $value', ({value}) => {
    //     expect(!is.WeakSet(value)).toBe(true);
    // });

    it('Empty', () => {
        expect(true).toBeTruthy();
    });

});
