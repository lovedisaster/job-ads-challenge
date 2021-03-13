import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import {SecondaryButton} from '../shared/atoms/buttons/Buttons';
import ActionTypes from '../../actions/ActionTypes';

const SingInPage = props => {
    const backOnClick = useCallback(() => {
        props.context.dispatch({type: ActionTypes.PRE_STEP});
    });

    return (
        <div className="container">
            <br/>
            <div className="row">
                <SecondaryButton isSmall={true} color={GS.colors.primaryBlue} value="back" onClickHandler={backOnClick}/>
            </div>
        </div>
    );
};

SingInPage.propTypes = {
    
};

export default SingInPage;