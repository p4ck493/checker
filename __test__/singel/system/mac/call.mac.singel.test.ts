import {is, IsConfig} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('mac singel: call', () => {

    it.each(dataForGoodTesting)('is.mac: Should true for $value', ({value}) => {
        IsConfig.state.platform = value;
        expect(is.mac.call({})).toBe(true);
    });

    it.each(dataForBadTesting)('is.mac: Should false for $value', ({value}) => {
        IsConfig.state.platform = value;
        expect(is.mac.call({})).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.mac: Should false for $value', ({value}) => {
        IsConfig.state.platform = value;
        expect(!is.mac.call({})).toBe(false);
    });

    it.each(dataForBadTesting)('!is.mac: Should true for $value', ({value}) => {
        IsConfig.state.platform = value;
        expect(!is.mac.call({})).toBe(true);
    });

});
