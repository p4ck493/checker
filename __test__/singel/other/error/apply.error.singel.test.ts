import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('[TODO] Error singel: apply', () => {

    // it.each(dataForGoodTesting)('is.Error: Should true for $value', ({value}) => {
    //     expect(is.Error.apply({}, [value])).toBe(true);
    // });
    //
    // it.each(dataForBadTesting)('is.Error: Should false for $value', ({value}) => {
    //     expect(is.Error.apply({}, [value])).toBe(false);
    // });
    //
    // it.each(dataForGoodTesting)('!is.Error: Should false for $value', ({value}) => {
    //     expect(!is.Error.apply({}, [value])).toBe(false);
    // });
    //
    // it.each(dataForBadTesting)('!is.Error: Should true for $value', ({value}) => {
    //     expect(!is.Error.apply({}, [value])).toBe(true);
    // });

    it('Empty', () => {
        expect(true).toBeTruthy();
    });

});
