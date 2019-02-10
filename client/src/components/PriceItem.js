import React from 'react';
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
