import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
import SingInPage from './SingInPage';
import {StateContext} from '../../StateProvider';

const SingIn = props => {
    return (
        <StateContext.Consumer>
            {
                context => {
                    return <SingInPage context={context}/>
                }
            }
        </StateContext.Consumer>
    );
};

SingIn.propTypes = {
    
};

export default withRouter(SingIn);