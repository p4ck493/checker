import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('iphone singel', () => {

    it.each(dataForGoodTesting)('is.iphone: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.iphone()).toBe(true);
    });

    it.each(dataForBadTesting)('is.iphone: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.iphone()).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.iphone: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(!is.iphone()).toBe(false);
    });

    it.each(dataForBadTesting)('!is.iphone: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(!is.iphone()).toBe(true);
    });

});

