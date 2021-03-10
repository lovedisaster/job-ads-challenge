import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {Heading} from './Home.style';

class Home extends PureComponent {
    render() {
        return (
            <div>
                <Heading>This is home page</Heading>
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home; 