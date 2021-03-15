import React from 'react';
import PropTypes from 'prop-types';
import SignInPage from './SignInPage';
import {StateContext} from '../../StateProvider';

const SignIn = props => {
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

SignIn.propTypes = {
    
};

export default SignIn;