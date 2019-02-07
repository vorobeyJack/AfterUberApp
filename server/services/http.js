const axios = require('axios');

const {SERVER_TOKEN} = require('../constants');

/**
 * @type {{executeRequest: (function(*, *=, *): *)}}
 */
module.exports = {
    /**
     *
     * @param url
     * @param method
     * @param data
     * @returns {*}
     */
    executeRequest: (url, method = 'GET', data) => {
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
    }
};
