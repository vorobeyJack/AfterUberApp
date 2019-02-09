import React from 'react';
import taxi from '../taxi.png';

/**
 *
 * @param displayName
 * @param distance
 * @param currencyCode
 * @param highEstimate
 * @param lowEstimate
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
        duration
    }) => {
    return (
        <div className="item">
            <img src={taxi} className='ui avatar image'/>
            <div className="content">
                <div className="header">{highEstimate} {currencyCode} | {displayName}</div>
                Duration:~ {duration}
            </div>
        </div>
    );
};
