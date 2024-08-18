import {is} from '../../../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('isoFuture singel: call', () => {

    it.each(dataForGoodTesting)('is.isoFuture: Should true for $value', ({value}) => {
        expect(is.isoFuture.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.isoFuture: Should false for $value', ({value}) => {
        expect(is.isoFuture.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.isoFuture: Should false for $value', ({value}) => {
        expect(!is.isoFuture.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('!is.isoFuture: Should true for $value', ({value}) => {
        expect(!is.isoFuture.call({}, value)).toBe(true);
    });

});
