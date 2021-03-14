import React, { useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import Reducer from "./reducer/Reducer";
import { InitSteps, GetStepByIndex } from "./StepConfig";
import { history } from "./ClientRoutes";
import { GetSessionStorage } from "./utils/CommonUtils";

export const StateContext = React.createContext("globalContext");

const StateProvider = (props) => {
  let shoppingCart =
    CLIENT && GetSessionStorage("shoppingCart")
      ? GetSessionStorage("shoppingCart")
      : [];
  let h = history;

  const currentStep = GetStepByIndex(1, InitSteps);
  const [state, dispatch] = useReducer(Reducer, {
    initState: props.initState,
    currentStep: 1,
    currentPath: currentStep ? currentStep.path : "/home",
    stepState: InitSteps,
    shoppingCart: shoppingCart,
  });

  useEffect(() => {
    CLIENT && h && h.replace(state.currentPath);
  }, [state.currentStep]);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StateContext.Provider>
  );
};

StateProvider.propTypes = {
  initState: PropTypes.object,
};

export default StateProvider;
