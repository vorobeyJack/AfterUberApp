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
        <div className="ui divided items">
            {items.map((
                {
                    display_name,
                    distance,
                    currency_code,
                    high_estimate,
                    low_estimate,
                    duration
                }) => {
                return <PriceItem
                    key={display_name}
                    displayName={display_name}
                    distance={distance}
                    currency_code={currency_code}
                    highEstimate={high_estimate}
                    lowEstimate={low_estimate}
                    duration={duration}
                />
            })}
        </div>
    )
};
