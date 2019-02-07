const {getPriceWithDiscount} = require('./discountCalculator');
const {getNameWithPrefix} = require('./serviceNamePrefixAdder');

/**
 *
 * @type {{getResponse: (function(*=): {data: {lowPrice: (number|*), highPrice: (number|*), currency}})}}
 */
module.exports = {
    /**
     *
     * @param prices
     * @returns {Array}
     */
    getListWithDiscount: (prices) => {
        return prices.map(price => ({
            ...price,
            display_name: getNameWithPrefix(price.display_name),
            low_estimate: getPriceWithDiscount(price.low_estimate),
            high_estimate: getPriceWithDiscount(price.high_estimate),
        }));
    }
};
