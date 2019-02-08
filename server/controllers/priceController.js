import {executeRequest} from '../services/http';
import {getListWithDiscount} from '../services/price/withDiscountDataFormatter';
import {BASE_UBER_API_URL} from '../constants';

export const getPrice = (req, res) => {
    executeRequest(
        `${BASE_UBER_API_URL}/estimates/price?start_latitude=37.7752315&start_longitude=-122.418075&end_latitude=37.7752415&end_longitude=-122.518075`,
    )
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
