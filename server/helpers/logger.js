import {createSimpleFileLogger} from 'simple-node-logger';

export const log = message => {
    const logger = createSimpleFileLogger('error.log');
    const datetime = new Date().toLocaleString();
    logger.error(`${message}, DATETIME: ${datetime}`);
};
