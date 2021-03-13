import React, { useCallback } from "react";
import PropTypes from "prop-types";
import ActionTypes from "../../actions/ActionTypes";
import { SecondaryButton } from "../shared/atoms/buttons/Buttons";

const CheckOutPage = (props) => {
  const buyMoreOnClick = useCallback(() => {
    props.dispatch({ type: ActionTypes.GO_TO_STEP, payload: 1 });
  });

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <SecondaryButton
          isSmall={true}
          color={GS.colors.primaryBlue}
          value="Buy more ads"
          onClickHandler={buyMoreOnClick}
        />
      </div>
      <div className="row"></div>
    </div>
  );
};

CheckOutPage.propTypes = {};

export default CheckOutPage;
