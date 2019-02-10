import React from 'react';
import PropTypes from 'prop-types';

import taxi from '../taxi.png';
import {getDuration} from '../services/durationDataFormatter';

/**
 *
 * @param displayName
 * @param distance
 * @param currencyCode
 * @param highEstimate
 * @param lowEstimate
 * @param estimate
 * @param duration
 * @returns {*}
 * @constructor
 */
export const PriceItem = (
    {
        displayName,
        distance,
        currencyCode,
        highEstimate,
        lowEstimate,
        estimate,
        duration
    }) => {

    PriceItem.propTypes = {
        displayName: PropTypes.string.isRequired,
        distance: PropTypes.number.isRequired,
        currencyCode: PropTypes.string.isRequired,
        highEstimate: PropTypes.number.isRequired,
        lowEstimate: PropTypes.number.isRequired,
        estimate: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired
    };

    return (
        <div className="item">
            <img src={taxi} className='ui avatar image'/>
            <div className="content">
                <div className="header">{estimate} {currencyCode} | {displayName}</div>
                Duration:~ {getDuration(duration)}
            </div>
        </div>
    );
};
