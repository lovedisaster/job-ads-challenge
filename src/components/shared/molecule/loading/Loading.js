import React from "react";
import PropTypes from "prop-types";
import { Loader } from "./Loading.styles";

const Loading = ({ loading }) => {
  return (
    <div className={loading ? "loading" : "loaded"}>
      <div className="loader-wrap">
        <div className="loader"></div>
      </div>
    </div>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool,
};

export default Loading;

export const ComponentLoader = () => {
  return (
    <Loader>
      <div className="loader"></div>
    </Loader>
  );
};
