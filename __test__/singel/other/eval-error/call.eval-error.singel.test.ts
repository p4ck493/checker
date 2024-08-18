import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('[TODO] EvalError singel: call', () => {


    // it.each(dataForGoodTesting)('is.EvalError: Should true for $value', ({value}) => {
    //     expect(is.EvalError.call({}, value)).toBe(true);
    // });
    //
    // it.each(dataForBadTesting)('is.EvalError: Should false for $value', ({value}) => {
    //     expect(is.EvalError.call({}, value)).toBe(false);
    // });
    //
    // it.each(dataForGoodTesting)('!is.EvalError: Should false for $value', ({value}) => {
    //     expect(!is.EvalError.call({}, value)).toBe(false);
    // });
    //
    // it.each(dataForBadTesting)('!is.EvalError: Should true for $value', ({value}) => {
    //     expect(!is.EvalError.call({}, value)).toBe(true);
    // });

    it('Empty', () => {
        expect(true).toBeTruthy();
    });

});
