import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import Reducer from './reducer/Reducer';

export const StateContext = React.createContext('globalContext');

const StateProvider = (props) => {
    const [state, dispatch] = useReducer(Reducer, props.initState);

    return (
        <StateContext.Provider value={{state, dispatch}}>
            {props.children}
        </StateContext.Provider>
    );
}


StateProvider.propTypes = {
    initState : PropTypes.object
};

export default StateProvider;