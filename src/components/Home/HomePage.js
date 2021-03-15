import React, { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { AdCard, Heading } from "./Home.style";
import { Button } from "../shared/atoms/buttons/Buttons";
import ActionTypes from "../../actions/ActionTypes";

const HomePage = (props) => {

  const buyNowOnclick = useCallback((stepData) => {
    props.dispatch({
      type: ActionTypes.SAVE_STEP_DATA,
      payload: stepData,
    });
    props.dispatch({
      type: ActionTypes.ADD_TO_CART,
      payload: stepData,
    });
    props.dispatch({ type: ActionTypes.NEXT_STEP });
  });

  useEffect(() => {
    props.dispatch({type: ActionTypes.PAGE_LOADED});
  },[]);

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <br />
      <Heading className="text-center">Job Ads</Heading>
      <br />
      <br />
      <br />
      <div className="row">
        {props.state.initState.ads.map((item) => {
          return (
            <div key={item.code} className="col-4 text-center">
              <AdCard>
                <h4 className="ad-name">{item.name}</h4>
                <h2 className="price">${item.price}</h2>
                <p className="desc">{item.description}</p>
                <Button
                  color={GS.colors.primaryBlue}
                  value="Buy now"
                  onClickHandler={() => buyNowOnclick(item)}
                />
              </AdCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

HomePage.propTypes = {
  context: PropTypes.object,
};

export default HomePage;
