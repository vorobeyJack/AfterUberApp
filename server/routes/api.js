import {APP_API_PREFIX} from "../constants";
import {getPrice} from "../controllers/priceController";

/**
 *
 * @param router
 */
export const matchAPIRoutes = router => {
    router
        .route(`${APP_API_PREFIX}/price`)
        .get(getPrice);
};
