import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

const App = (props) => {    
    return (
        <div>
            {props.children}
        </div>
    );
}

export default App;