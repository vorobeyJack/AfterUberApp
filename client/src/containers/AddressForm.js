import React, {Fragment} from 'react';
import {Dimmer, Loader} from 'semantic-ui-react';
import {GoogleComponent} from 'react-google-location';
import {GOOGLE_API_KEY} from '../config/auth';
import {toast} from 'react-toastify';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {PriceItemsList} from '../components/PriceItemsList';
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

    handleInputFrom = ({coordinates}) => {
        this.setState({
            start_latitude: coordinates.lat,
            start_longitude: coordinates.lng,
        });
    };

    handleInputTo = ({coordinates}) => {
        this.setState({
            end_latitude: coordinates.lat,
            end_longitude: coordinates.lng,
        });
    };

    isValidForm = () => {
        return this.state.start_latitude !== '' &&
            this.state.start_latitude !== undefined &&
            this.state.end_latitude !== '' &&
            this.state.end_latitude !== undefined;
    };

    handleRequest = () => {
        console.log(this.state);
        this.setState({
            isLoading: true
        });

        const {
            start_latitude,
            start_longitude,
            end_latitude,
            end_longitude
        } = this.state;

        axios
            .get(`http://localhost:5000/api/v1/price?start_latitude=${start_latitude}&start_longitude=${start_longitude}&end_latitude=${end_latitude}&end_longitude=${end_longitude}`)
            .then(({data: {data}}) => {
                this.setState({
                    priceItems: data,
                    isLoading: false
                })
            })
            .catch(err => {
                const {data: {message: {message}}} = err.response;
                this.setState({
                    isError: true,
                    errorMessage: message,
                    isLoading: false
                });
                toast.error(message);
            })
    };

    render() {
        const {isLoading, priceItems} = this.state;
        let pricesBlock = null;
        if (isLoading) {
            return (
                <Dimmer active>
                    <Loader size='large'>Loading</Loader>
                </Dimmer>
            )
        }

        if (priceItems) {
            pricesBlock = <PriceItemsList items={priceItems}/>;
        }

        return (
            <Fragment>
                <div>
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
                        // locationBoxStyle={'custom-style'}
                        // locationListStyle={'custom-style-list'}
                        onChange={this.handleInputTo}
                    />
                    <button className="fluid ui button"
                            onClick={this.handleRequest}
                            disabled={!this.isValidForm()}
                    >GET PRICE
                    </button>
                </div>
                <ToastContainer autoClose={3000}/>
                {pricesBlock}
            </Fragment>
        )
    }
}
