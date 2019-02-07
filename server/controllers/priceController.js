const http = require('../services/http');
const {BASE_UBER_API_URL} = require('../constants');
const {getResponse} = require('../services/price/resultPriceDataFormatter');

/**
 *
 * @type {{getPrice: module.exports.getPrice}}
 */
module.exports = {
    getPrice: (req, res) => {
        http.executeRequest(
            `${BASE_UBER_API_URL}/estimates/price?start_latitude=37.7752315&start_longitude=-122.418075&end_latitude=37.7752415&end_longitude=-122.518075`,
        )
            .then(({data: {prices}}) => {
                res.send({
                    data: getResponse(prices),
                    code: 200
                });
            })
            .catch(({response: {status, data}}) => {
                res.status(status).send({
                    code: status,
                    message: data
                });
            });
    }
};
