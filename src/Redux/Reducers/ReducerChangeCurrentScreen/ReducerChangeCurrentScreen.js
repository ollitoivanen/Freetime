import {ACTION_CHANGE_CURRENT_SCREEN, HOME_SCREEN} from 'Constants/Constants';
let initialState = {currentScreen: HOME_SCREEN};

export default ReducerChangeCurrentScreen = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CHANGE_CURRENT_SCREEN:
      return {currentScreen: action.payload};
    default:
      return state;
  }
};
