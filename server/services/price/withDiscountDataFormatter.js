import {getPriceWithDiscount} from './discountCalculator';
import {getNameWithPrefix} from './serviceNamePrefixAdder';

/**
 *
 * @param prices
 * @returns {Array}
 */
export const getListWithDiscount = prices => {
    return prices.map(price => ({
        ...price,
        display_name: getNameWithPrefix(price.display_name),
        low_estimate: price.low_estimate,
        high_estimate: price.high_estimate,
        estimate: `${getPriceWithDiscount(price.low_estimate)} - ${getPriceWithDiscount(price.high_estimate)}`
    }));
};
