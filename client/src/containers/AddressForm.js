import React, {Fragment} from 'react';
import {Dimmer, Loader} from 'semantic-ui-react';
import {GoogleComponent} from 'react-google-location';
import {GOOGLE_API_KEY} from '../config/auth';
import {toast} from 'react-toastify';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {PriceItemsList} from '../components/PriceItemsList';
import {BASE_BACKEND_API_URL, SERVICE_UNAVAILABLE_ERROR_MESSAGE} from '../constants';
import axios from 'axios';

export default class AddressForm extends React.Component {
    state = {
        start_latitude: '',
        start_longitude: '',
        end_latitude: '',
        end_longitude: '',
        isLoading: false,
        isError: false,
        errorMessage: null,
        priceItems: []
    };

    /**
     * @param coordinates
     */
    handleInputFrom = ({coordinates}) => {
        this.setState({
            start_latitude: coordinates.lat,
            start_longitude: coordinates.lng,
        });
    };

    /**
     * @param coordinates
     */
    handleInputTo = ({coordinates}) => {
        this.setState({
            end_latitude: coordinates.lat,
            end_longitude: coordinates.lng,
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
                const {data: {message: {message}}} = err.response;
                this.setState({
                    start_latitude: '',
                    end_latitude: '',
                    isError: true,
                    errorMessage: message,
                    isLoading: false
                });
                toast.error(message);
            })
    };

    render() {
        const {isLoading, priceItems, isError} = this.state;
        let pricesBlock = null;
        if (isLoading) {
            return (
                <Dimmer active>
                    <Loader size='large'>Loading</Loader>
                </Dimmer>
            )
        }

        if (priceItems && !isError) {
            pricesBlock = <PriceItemsList items={priceItems}/>;
        }

        return (
            <Fragment>
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
