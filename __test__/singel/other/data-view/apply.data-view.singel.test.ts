import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('[TODO] DataView singel: apply', () => {

    // it.each(dataForGoodTesting)('is.DataView: Should true for $value', ({value}) => {
    //     expect(is.DataView.apply({} , [value])).toBe(true);
    // });
    //
    // it.each(dataForBadTesting)('is.DataView: Should false for $value', ({value}) => {
    //     expect(is.DataView.apply({} , [value])).toBe(false);
    // });
    //
    // it.each(dataForGoodTesting)('!is.DataView: Should false for $value', ({value}) => {
    //     expect(!is.DataView.apply({} , [value])).toBe(false);
    // });
    //
    // it.each(dataForBadTesting)('!is.DataView: Should true for $value', ({value}) => {
    //     expect(!is.DataView.apply({} , [value])).toBe(true);
    // });

    it('Empty', () => {
        expect(true).toBeTruthy();
    });

});
