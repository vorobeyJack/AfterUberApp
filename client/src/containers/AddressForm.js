import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Dimmer, Loader} from 'semantic-ui-react';
import {GoogleComponent} from 'react-google-location';
import {GOOGLE_API_KEY} from '../config/auth';
import {toast} from 'react-toastify';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {PriceItemsList} from '../components/PriceItemsList';
import {Places} from '../components/Places';
import {BASE_BACKEND_API_URL, SERVICE_UNAVAILABLE_ERROR_MESSAGE, SERVER_ERROR_MESSAGE} from '../constants';
import axios from 'axios';

export default class AddressForm extends React.Component {
    state = {
        start_latitude: '',
        start_longitude: '',
        end_latitude: '',
        end_longitude: '',
        displayNameFrom: '',
        displayNameTo: '',
        priceItems: [],
        isLoading: false,
        isError: false,
        errorMessage: null,

    };

    static propTypes = {
        placeFrom: PropTypes.string,
        placeTo: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.shape({
            display_name: PropTypes.string.isRequired,
            distance: PropTypes.number.isRequired,
            currency_code: PropTypes.string.isRequired,
            high_estimate: PropTypes.number.isRequired,
            low_estimate: PropTypes.number.isRequired,
            estimate: PropTypes.string.isRequired,
            duration: PropTypes.number.isRequired
        }))
    };

    /**
     *
     * @param coordinates
     * @param place
     */
    handleInputFrom = ({coordinates, place}) => {
        this.setState({
            start_latitude: coordinates.lat,
            start_longitude: coordinates.lng,
            displayNameFrom: place
        });
    };

    /**
     *
     * @param coordinates
     * @param place
     */
    handleInputTo = ({coordinates, place}) => {
        this.setState({
            end_latitude: coordinates.lat,
            end_longitude: coordinates.lng,
            displayNameTo: place
        });
    };

    /**
     * @returns {boolean}
     */
    isValidForm = () => {
        const {start_latitude, end_latitude} = this.state;
        return start_latitude !== '' &&
            start_latitude !== undefined &&
            end_latitude !== '' &&
            end_latitude !== undefined;
    };

    handleRequest = () => {
        this.setState({
            isError: false,
            isLoading: true
        });

        const {
            start_latitude,
            start_longitude,
            end_latitude,
            end_longitude
        } = this.state;

        axios
            .get(`${BASE_BACKEND_API_URL}/price?start_latitude=${start_latitude}&start_longitude=${start_longitude}&end_latitude=${end_latitude}&end_longitude=${end_longitude}`)
            .then(({data: {data}}) => {
                if (data.length > 0) {
                    this.setState({
                        start_latitude: '',
                        end_latitude: '',
                        priceItems: data,
                        isLoading: false,
                    });
                } else {
                    this.setState({
                        isError: true,
                        errorMessage: SERVICE_UNAVAILABLE_ERROR_MESSAGE,
                        isLoading: false
                    });
                    toast.error(SERVICE_UNAVAILABLE_ERROR_MESSAGE);
                }
            })
            .catch(err => {
                // in case of 500 error from server
                if (undefined === err.response) {
                    this.setState({
                        isError: true,
                        errorMessage: SERVER_ERROR_MESSAGE,
                        isLoading: false
                    });
                    toast.error(SERVER_ERROR_MESSAGE);
                } else {
                    const {data: {message: {message}}} = err.response;
                    this.setState({
                        start_latitude: '',
                        end_latitude: '',
                        isError: true,
                        errorMessage: message,
                        isLoading: false
                    });
                    toast.error(message);
                }
            })
    };

    render() {
        const {isLoading, priceItems, isError, displayNameFrom, displayNameTo} = this.state;
        let pricesBlock, places = null;
        if (isLoading) {
            return (
                <Dimmer active>
                    <Loader size='large'>Loading</Loader>
                </Dimmer>
            )
        }

        if (priceItems.length !== 0 && !isError) {
            pricesBlock = <PriceItemsList items={priceItems}/>;
            places = <Places placeFrom={displayNameFrom} placeTo={displayNameTo}/>
        }

        return (
            <Fragment>
                {places}
                <div className="ui grid">
                    <div className="ui form six wide column left">
                        <GoogleComponent
                            apiKey={GOOGLE_API_KEY}
                            language={'en'}
                            coordinates={true}
                            onChange={this.handleInputFrom}
                        />
                        <GoogleComponent
                            apiKey={GOOGLE_API_KEY}
                            language={'en'}
                            coordinates={true}
                            onChange={this.handleInputTo}
                        />
                        <button
                            className="fluid ui button"
                            onClick={this.handleRequest}
                            disabled={!this.isValidForm()}>
                            GET PRICE
                        </button>
                        <ToastContainer autoClose={3000}/>
                    </div>
                    {pricesBlock}
                </div>
            </Fragment>
        )
    }
}
