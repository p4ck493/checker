import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('[TODO] WeakMap singel: call', () => {


    // it.each(dataForGoodTesting)('is.WeakMap: Should true for $value', ({value}) => {
    //     expect(is.WeakMap.call({}, value)).toBe(true);
    // });
    //
    // it.each(dataForBadTesting)('is.WeakMap: Should false for $value', ({value}) => {
    //     expect(is.WeakMap.call({}, value)).toBe(false);
    // });
    //
    // it.each(dataForGoodTesting)('!is.WeakMap: Should false for $value', ({value}) => {
    //     expect(!is.WeakMap.call({}, value)).toBe(false);
    // });
    //
    // it.each(dataForBadTesting)('!is.WeakMap: Should true for $value', ({value}) => {
    //     expect(!is.WeakMap.call({}, value)).toBe(true);
    // });

    it('Empty', () => {
        expect(true).toBeTruthy();
    });

});
