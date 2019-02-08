import axios from 'axios';
import {SERVER_TOKEN} from '../../config/auth';

/**
 *
 * @param url
 * @param method
 * @param data
 * @returns {AxiosPromise}
 */
export const executeRequest = (url, method = 'GET', data) => {
    const headers = {
        'Authorization': `Token ${SERVER_TOKEN}`,
        'Accept-Language': 'en_US',
        'Content-Type': 'application/json',
    };

    return axios({
        method,
        url,
        data,
        headers
    });
};
