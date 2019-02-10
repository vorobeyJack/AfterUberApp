import React from 'react';

/**
 *
 * @param placeFrom
 * @param placeTo
 * @returns {*}
 * @constructor
 */
export const Places = ({placeFrom, placeTo}) => {
    return (
        <div className="ui grid">
            <div className="ui form nine wide column left">
                <h4 className="ui header">
                    <div className="content">
                        {placeFrom} - {placeTo}
                    </div>
                </h4>
            </div>
        </div>
    )
};
