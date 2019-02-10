import React from 'react';
import {PriceItem} from './PriceItem';

/**
 *
 * @param items
 * @returns {*}
 * @constructor
 */
export const PriceItemsList = ({items}) => {
    return (
        <div className="ui middle aligned animated list">
            {items.map((
                {
                    display_name,
                    distance,
                    currency_code,
                    high_estimate,
                    low_estimate,
                    estimate,
                    duration
                }) => {
                return <PriceItem
                    key={display_name}
                    displayName={display_name}
                    distance={distance}
                    currencyCode={currency_code}
                    highEstimate={high_estimate}
                    lowEstimate={low_estimate}
                    estimate={estimate}
                    duration={duration}
                />
            })}
        </div>
    )
};
