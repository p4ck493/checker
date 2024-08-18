import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';


describe('mobile singel: apply', () => {

    it.each(dataForGoodTesting)('is.mobile: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.mobile.apply({}, [])).toBe(true);
    });

    it.each(dataForBadTesting)('is.mobile: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.mobile.apply({}, [])).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.mobile: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(!is.mobile.apply({}, [])).toBe(false);
    });

    it.each(dataForBadTesting)('!is.mobile: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(!is.mobile.apply({}, [])).toBe(true);
    });

});
