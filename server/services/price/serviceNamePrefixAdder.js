const {DISPLAY_NAME_PREFIX} = require('../../constants');

/**
 *
 * @type {{getNameWithPrefix: (function(*): string)}}
 */
module.exports = {
    /**
     *
     * @param name
     * @returns {string}
     */
    getNameWithPrefix: (name) => {
        return `${DISPLAY_NAME_PREFIX}${name}`;
    }
};
