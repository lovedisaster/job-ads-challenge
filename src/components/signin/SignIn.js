import React from 'react';
import PropTypes from 'prop-types';
import SignInPage from './SignInPage';
import {StateContext} from '../../StateProvider';

const SingIn = props => {
    return (
        <StateContext.Consumer>
            {
                context => {
                    return <SignInPage context={context}/>
                }
            }
        </StateContext.Consumer>
    );
};

SingIn.propTypes = {
    
};

export default SingIn;