import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('[TODO] SyntaxError singel: call', () => {


    // it.each(dataForGoodTesting)('is.SyntaxError: Should true for $value', ({value}) => {
    //     expect(is.SyntaxError.call({}, value)).toBe(true);
    // });
    //
    // it.each(dataForBadTesting)('is.SyntaxError: Should false for $value', ({value}) => {
    //     expect(is.SyntaxError.call({}, value)).toBe(false);
    // });
    //
    // it.each(dataForGoodTesting)('!is.SyntaxError: Should false for $value', ({value}) => {
    //     expect(!is.SyntaxError.call({}, value)).toBe(false);
    // });
    //
    // it.each(dataForBadTesting)('!is.SyntaxError: Should true for $value', ({value}) => {
    //     expect(!is.SyntaxError.call({}, value)).toBe(true);
    // });

    it('Empty', () => {
        expect(true).toBeTruthy();
    });

});
