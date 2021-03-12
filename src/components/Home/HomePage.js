import React from "react";
import PropTypes from "prop-types";
import { Heading } from "./Home.style";

const HomePage = (props) => {
  return (
    <div>
      {props.context.state.ads.map((item) => {
        return <span key={item.code}>{item.name}</span>;
      })}
    </div>
  );
};

HomePage.propTypes = {
  context: PropTypes.object,
};

export default HomePage;
