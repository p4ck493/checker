import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('androidPhone singel', () => {

    it.each(dataForGoodTesting)('is.androidPhone: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.androidPhone()).toBe(true);
    });

    it.each(dataForBadTesting)('is.androidPhone: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.androidPhone()).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.androidPhone: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(!is.androidPhone()).toBe(false);
    });

    it.each(dataForBadTesting)('!is.androidPhone: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(!is.androidPhone()).toBe(true);
    });

});

