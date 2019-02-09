import {DISPLAY_NAME_PREFIX} from '../../constants';

/**
 *
 * @param name
 * @returns {string}
 */
export const getNameWithPrefix = name => {
    return `${DISPLAY_NAME_PREFIX}${name}`;
};
