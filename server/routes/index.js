import {matchAPIRoutes} from './api';

/**
 *
 * @param router
 */
export const getRoutesHandlers = router => {
    matchAPIRoutes(router);
};
