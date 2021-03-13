import ActionTypes from "../actions/ActionTypes";
import { DeepClone } from "../utils/CommonUtils";
import { GetStepByIndex } from "../StepConfig";

const Reducer = (state, action) => {
  let newState = DeepClone(state);
  let cs = null;

  switch (action.type) {
    case ActionTypes.SAVE_STEP_DATA: 
      newState.stepState = newState.stepState.map(s => {
        if(s.index === newState.currentStep){
          s.data = action.payload;
        }
        return s;
      });
      return newState;

    case ActionTypes.NEXT_STEP:
      newState.currentStep++;
      cs = GetStepByIndex(newState.currentStep, newState.stepState )
      newState.currentPath = cs.path;
      return newState;

    case ActionTypes.PRE_STEP:
      newState.currentStep--;
      cs = GetStepByIndex(newState.currentStep, newState.stepState )
      newState.currentPath = cs.path;
      return newState;

    case ActionTypes.GO_TO_STEP:
      newState.currentStep = action.payload;
      cs = GetStepByIndex(action.payload, newState.stepState );
      newState.currentPath = cs.path;
      return newState;
    default:
      return state;
  }
};

export default Reducer;
