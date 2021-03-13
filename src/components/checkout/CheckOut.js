import React from 'react';
import PropTypes from 'prop-types';
import {StateContext} from '../../StateProvider';
import CheckOutPage from './CheckOutPage';

const CheckOut = props => {
    return (
        <StateContext.Consumer>
            {
                context => {
                    return <CheckOutPage dispatch={context.dispatch} />
                }
            }
        </StateContext.Consumer>
    );
};

CheckOut.propTypes = {
    
};

export default CheckOut;