import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Input} from './inputs.styles';


const InputField = props => {
  return (
    <Input type='text' tabIndex={props.tabIndex} onChange={(e) => props.keyPressHandler(e)} onFocus={(e) =>props.onFocusHandler(e)} placeholder={props.placeHolder} name={props.name}/>
  );
};

InputField.propTypes = {
  placeHolder: PropTypes.string,
  name: PropTypes.string,
  keyPressHandler: PropTypes.func,
  onFocusHandler: PropTypes.func,
  tabIndex: PropTypes.number
};

export default InputField;