const {getHighPrice, getLowPrice} = require('./priceFetcher');
const {getPriceWithDiscount} = require('./discountCalculator');

/**
 *
 * @type {{getResponse: (function(*=): {data: {lowPrice: (number|*), highPrice: (number|*), currency}})}}
 */
module.exports = {
    /**
     *
     * @param prices
     * @returns {{lowPrice: (number|*), highPrice: (number|*), currency}}
     */
    getResponse: (prices) => {
        const highPrice = getHighPrice(prices);
        const lowPrice = getLowPrice(prices);
        const currency = lowPrice.currency_code;
        const resultHighPrice = getPriceWithDiscount(highPrice.price);
        const resultLowPrice = getPriceWithDiscount(lowPrice.price);

        return {
            lowPrice: resultLowPrice,
            highPrice: resultHighPrice,
            currency
        }
    }
};
