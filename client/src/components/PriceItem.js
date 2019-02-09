import React from 'react';
import taxi from '../taxi.png';

/**
 *
 * @param displayName
 * @param distance
 * @param currency_code
 * @param high_estimate
 * @param low_estimate
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
            <div className="ui tiny image">
                <img src={taxi}/>
            </div>
            <div className="middle aligned content">
                <h2>{highEstimate}</h2>
                <h5>{displayName}</h5>
            </div>
        </div>
    );
};
