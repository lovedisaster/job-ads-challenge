import ActionTypes from "../actions/ActionTypes";
import { DeepClone, SetShoppingCart } from "../utils/CommonUtils";
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

    case ActionTypes.ADD_TO_CART: 
      newState.shoppingCart.push(action.payload);
      SetShoppingCart(newState.shoppingCart);
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
    
    case ActionTypes.PAGE_LOADED: 
      newState.loading = false;
      return newState;

    case ActionTypes.PAGE_LOADING: 
      newState.loading = true;
      return newState;

    default:
      return state;
  }
};

export default Reducer;
