/**
 *
 * @type {{getHighPrice: (function(*, *=): {price, currency_code}), getLowPrice: (function(*, *=): {price, currency_code})}}
 */
module.exports = {
    /**
     *
     * @param pricesList
     * @param localizedDisplayName
     * @returns {{price, currency_code}}
     */
    getHighPrice: (pricesList, localizedDisplayName = 'UberXL') => {
        const {high_estimate, currency_code} = pricesList.find(({localized_display_name}) =>
            localized_display_name === localizedDisplayName
        );

        return {
            price: high_estimate,
            currency_code
        }
    },

    /**
     *
     * @param pricesList
     * @param localizedDisplayName
     * @returns {{price, currency_code}}
     */
    getLowPrice: (pricesList, localizedDisplayName = 'UberXL') => {
        const {low_estimate, currency_code} = pricesList.find(({localized_display_name}) =>
            localized_display_name === localizedDisplayName
        );

        return {
            price: low_estimate,
            currency_code
        }
    }
};
