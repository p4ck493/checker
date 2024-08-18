import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('[TODO] Error singel', () => {


    // it.each(dataForGoodTesting)('is.Error: Should true for $value', ({value}) => {
    //     expect(is.Error(value)).toBe(true);
    // });
    //
    // it.each(dataForBadTesting)('is.Error: Should false for $value', ({value}) => {
    //     expect(is.Error(value)).toBe(false);
    // });
    //
    // it.each(dataForGoodTesting)('!is.Error: Should false for $value', ({value}) => {
    //     expect(!is.Error(value)).toBe(false);
    // });
    //
    // it.each(dataForBadTesting)('!is.Error: Should true for $value', ({value}) => {
    //     expect(!is.Error(value)).toBe(true);
    // });

    it('Empty', () => {
        expect(true).toBeTruthy();
    });

});
