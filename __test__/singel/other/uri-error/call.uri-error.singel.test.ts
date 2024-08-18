import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('[TODO] URIError singel: call', () => {


    // it.each(dataForGoodTesting)('is.URIError: Should true for $value', ({value}) => {
    //     expect(is.URIError.call({}, value)).toBe(true);
    // });
    //
    // it.each(dataForBadTesting)('is.URIError: Should false for $value', ({value}) => {
    //     expect(is.URIError.call({}, value)).toBe(false);
    // });
    //
    // it.each(dataForGoodTesting)('!is.URIError: Should false for $value', ({value}) => {
    //     expect(!is.URIError.call({}, value)).toBe(false);
    // });
    //
    // it.each(dataForBadTesting)('!is.URIError: Should true for $value', ({value}) => {
    //     expect(!is.URIError.call({}, value)).toBe(true);
    // });

    it('Empty', () => {
        expect(true).toBeTruthy();
    });

});
