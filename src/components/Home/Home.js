import React from "react";
import PropTypes from "prop-types";
import { StateContext } from "../../StateProvider";
import HomePage from "./HomePage";

const Home = (props) => {
  return (
    <StateContext.Consumer>
      {(context) => {
        return <HomePage context={context} />;
      }}
    </StateContext.Consumer>
  );
};

Home.propTypes = {
  initData: PropTypes.object,
};

export default Home;
