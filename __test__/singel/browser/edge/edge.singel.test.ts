import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('edge singel', () => {

    it.each(dataForGoodTesting)('is.edge: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.edge()).toBe(true);
    });

    it.each(dataForBadTesting)('is.edge: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(is.edge()).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.edge: Should false for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(!is.edge()).toBe(false);
    });

    it.each(dataForBadTesting)('!is.edge: Should true for $value', ({value}) => {
        IsConfig.state.userAgent = value;
        expect(!is.edge()).toBe(true);
    });

});

