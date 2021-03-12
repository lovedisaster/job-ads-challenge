import React from "react";
import PropTypes from "prop-types";
import {
  SolidButton,
  BlankButton,
} from "./StyledComponents";

const preventDoubleClick = (target, handler) => {
  new Promise((res, rej) => {
    if (!target.disabled) {
      target.disabled = true;
      handler && handler();
    }
    setTimeout(() => res("OK"), 1000);
  }).then((result) => {
    if (result == "OK") {
      target.disabled = false;
    }
  });
};

export const Button = (props) => {
  return (
    <SolidButton
      onClick={(e) => {
        preventDoubleClick(e.target, props.onClickHandler);
      }}
      width={props.width}
      disabled={props.disabled}
      disabledTransparent={props.disabledTransparent}
      promote={props.promote ? true : false}
    >
      {props.value}
    </SolidButton>
  );
};

Button.propTypes = {
  value: PropTypes.string,
  section: PropTypes.string,
  onClickHandler: PropTypes.func,
  disabled: PropTypes.bool,
  disabledTransparent: PropTypes.bool,
  promote: PropTypes.bool,
};

export const SecondaryButton = (props) => {
  return (
    <BlankButton
      color={props.color}
      bgColor={props.bgColor}
      onClick={(e) => {
        preventDoubleClick(e.target, props.onClickHandler);
      }}
      isSmall={props.isSmall}
      iconStyle={props.iconStyle}
      width={props.width}
    >
      {props.value}
      {props.children}
    </BlankButton>
  );
};

SecondaryButton.propTypes = {
  value: PropTypes.string,
  onClickHandler: PropTypes.func,
  width: PropTypes.string,
  isSmall: PropTypes.bool,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  section: PropTypes.string,
};
