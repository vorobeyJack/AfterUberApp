import React from 'react';
import {Form, Button} from 'semantic-ui-react';

export default class AddressForm extends React.Component {
    state = {
        data: null
    };

    render() {
        return (
            <div className="ui grid">
                <div className="ui form nine wide column left">
                    <Form>
                        <Form.Field>
                            <label>Start address</label>
                            <input
                                id='start_address'
                                type='text'
                                placeholder='Your current location...'
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Destination address</label>
                            <input
                                id='destination_address'
                                type='text'
                                placeholder='Your destination...'
                            />
                        </Form.Field>
                        <Button.Group>
                            <Button color='green'>GET PRICE</Button>
                        </Button.Group>
                    </Form>
                </div>
            </div>
        )
    }
}
