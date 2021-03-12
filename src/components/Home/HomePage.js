import React from "react";
import PropTypes from "prop-types";
import { AdCard, Heading } from "./Home.style";
import { Button } from "../shared/atoms/buttons/Buttons";

const HomePage = (props) => {
  const buyNowOnclick = () => {
    // save selected product
    // go to the next step
  };

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
        {props.context.state.ads.map((item) => {
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
