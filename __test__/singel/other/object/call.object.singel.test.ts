import {is} from '../../../../dist';
import {dataForBadTesting, dataForGoodTesting} from './fixtures';

describe('object singel: call', () => {


    it.each(dataForGoodTesting)('is.object: Should true for $value', ({value}) => {
        expect(is.object.call({}, value)).toBe(true);
    });

    it.each(dataForBadTesting)('is.object: Should false for $value', ({value}) => {
        expect(is.object.call({}, value)).toBe(false);
    });

    it.each(dataForGoodTesting)('!is.object: Should false for $value', ({value}) => {
        expect(!is.object.call({}, value)).toBe(false);
    });

    it.each(dataForBadTesting)('!is.object: Should true for $value', ({value}) => {
        expect(!is.object.call({}, value)).toBe(true);
    });

});
