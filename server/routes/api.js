const {APP_API_PREFIX} = require('../constants');
const priceController = require('../controllers/priceController');

/**
 * @param router
 */
module.exports = (router) => {
    router
        .route(`${APP_API_PREFIX}/price`)
        .get(priceController.getPrice);
};
