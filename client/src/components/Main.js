import React, {Fragment} from 'react';
import {Header} from './Header';
import {Summary} from './Summary';
import AddressForm from '../containers/AddressForm';

/**
 * @returns {*}
 * @constructor
 */
export const Main = () => {
    return (
        <Fragment>
            <Header/>
            <Summary/>
            <AddressForm/>
        </Fragment>
    )
};
