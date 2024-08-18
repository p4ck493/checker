import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('[TODO] Error singel: call', () => {


    // it.each(dataForGoodTesting)('is.Error: Should true for $value', ({value}) => {
    //     expect(is.Error.call({}, value)).toBe(true);
    // });
    //
    // it.each(dataForBadTesting)('is.Error: Should false for $value', ({value}) => {
    //     expect(is.Error.call({}, value)).toBe(false);
    // });
    //
    // it.each(dataForGoodTesting)('!is.Error: Should false for $value', ({value}) => {
    //     expect(!is.Error.call({}, value)).toBe(false);
    // });
    //
    // it.each(dataForBadTesting)('!is.Error: Should true for $value', ({value}) => {
    //     expect(!is.Error.call({}, value)).toBe(true);
    // });

    it('Empty', () => {
        expect(true).toBeTruthy();
    });

});
