import axios from 'axios';
import {UBER_SERVER_TOKEN} from '../config/auth';

/**
 *
 * @param url
 * @param method
 * @param data
 * @returns {AxiosPromise}
 */
export const executeRequest = (url, method = 'GET', data) => {
    const headers = {
        'Authorization': `Token ${UBER_SERVER_TOKEN}`,
        'Accept-Language': 'en_US',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    };

    return axios({
        method,
        url,
        data,
        headers
    });
};
