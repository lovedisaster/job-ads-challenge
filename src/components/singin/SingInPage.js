import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { SecondaryButton } from "../shared/atoms/buttons/Buttons";
import ActionTypes from "../../actions/ActionTypes";
import InputField from "../shared/atoms/inputs/Inputs";
import { Button } from "../shared/atoms/buttons/Buttons";
import { SignInForm } from "./SingIn.styles";
import { Login } from "../../api/ApiConsumer";
import { SetAuth, GetSessionStorage } from "../../utils/CommonUtils";

const SingInPage = (props) => {
  let userNameRef = useRef(null);
  let [user, setUser] = useState("");

  const backOnClick = useCallback(() => {
    props.context.dispatch({ type: ActionTypes.PRE_STEP });
  });

  const submit = useCallback((loginDetails) => {
    props.context.dispatch({
      type: ActionTypes.SAVE_STEP_DATA,
      payload: loginDetails,
    });
    props.context.dispatch({ type: ActionTypes.NEXT_STEP });
  });

  const setUserValue = (e) => {
    setUser(e.target.value);
  };

  const logIn = () => {
    const clients = props.context.state.initState.clients.map(c => c.clientCode);
    Login(clients, user)
      .then((result) => {
        if (result) {
            SetAuth();
          submit({ userName: user, authenticated: result });
        } else {
          //Popup error handling here or log in errors
        }
      })
      .catch((e) => {
        //Popup error handling here or log in errors
      });
  };

  useEffect(() => {
      if(GetSessionStorage("isAuth") && GetSessionStorage("isAuth").isAuth) {
        props.context.dispatch({ type: ActionTypes.NEXT_STEP });
      }
  },[])

  return (
    <div className="container">
      <br />
      <div className="row">
        <SecondaryButton
          isSmall={true}
          color={GS.colors.primaryBlue}
          value="back"
          onClickHandler={backOnClick}
        />
      </div>
      <br />
      <div className="row text-center">
        <SignInForm>
          <small>
            Available accounts for now : 
            {
                props.context.state.initState.clients.map(client => `${client.clientCode} (${client.fullName}) | `)
            }
          </small>

          <InputField
            innerRef={userNameRef}
            placeHolder={"User Name"}
            name={"name"}
            keyPressHandler={setUserValue}
            onFocusHandler={setUserValue}
          />
          <br />
          <br />
          <Button
            color={GS.colors.primaryBlue}
            value="Log in"
            onClickHandler={logIn}
          />
        </SignInForm>
      </div>
    </div>
  );
};

SingInPage.propTypes = {};

export default SingInPage;
