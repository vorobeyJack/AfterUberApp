import {executeRequest} from '../services/http';
import {getListWithDiscount} from '../services/price/withDiscountDataFormatter';
import {BASE_UBER_API_URL} from '../constants';

export const getPrice = (req, res) => {
    const {
        start_latitude,
        start_longitude,
        end_latitude,
        end_longitude
    } = req.query;

    executeRequest(
        `${BASE_UBER_API_URL}/estimates/price?start_latitude=${start_latitude}&start_longitude=${start_longitude}&end_latitude=${end_latitude}&end_longitude=${end_longitude}`)
        .then(({data: {prices}}) => {
            res.send({
                data: getListWithDiscount(prices),
                code: 200
            });
        })
        .catch(({response: {status, data}}) => {
            res.status(status).send({
                code: status,
                message: data
            });
        });
};
