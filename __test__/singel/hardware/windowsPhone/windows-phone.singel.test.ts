import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('windowsPhone singel', () => {

    it.each(dataForGoodTesting)('is.windowsPhone: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.windowsPhone()).toBe(true);
    });

    it.each(dataForBadTesting)('is.windowsPhone: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.windowsPhone()).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.windowsPhone: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(!is.windowsPhone()).toBe(false);
    });

    it.each(dataForBadTesting)('!is.windowsPhone: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(!is.windowsPhone()).toBe(true);
    });

});

