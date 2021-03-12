import ActionTypes from "../actions/ActionTypes";
import { DeepClone } from "../utils/CommonUtils";

const Reducer = (state, action) => {
  let newState = DeepClone(state);

  switch (action.type) {
    case ActionTypes.NEXT_STEP:
      newState.currentStep++;
      return newState;
    
    default:
      return state;
  }
};

export default Reducer;
