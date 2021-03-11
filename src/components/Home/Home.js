import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {Heading} from './Home.style';

const Home = props => {
    return (
        <div>
            <Heading>This is home page</Heading>
        </div>
    );
};

Home.propTypes = {
    initData:PropTypes.object
};

export default Home;

