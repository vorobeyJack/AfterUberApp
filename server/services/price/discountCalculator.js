/**
 *
 * @type {{getPriceWithDiscount: (function(*=, *=): number)}}
 */
module.exports = {
    /**
     *
     * @param price
     * @param discountPercent
     * @returns {number|null}
     */
    getPriceWithDiscount: (price, discountPercent = 0.2) => {
        if (null !== price) {
            return (parseFloat(price) * (1 - discountPercent)).toFixed(2);
        }

        return null;
    }
};
