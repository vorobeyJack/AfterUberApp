/**
 *
 * @type {{getPriceWithDiscount: (function(*=, *=): number)}}
 */
module.exports = {
    /**
     *
     * @param price
     * @param discountPercent
     * @returns {number}
     */
    getPriceWithDiscount: (price, discountPercent = 0.2) => {
        return (parseFloat(price) * (1 - discountPercent)).toFixed(2);
    }
};
