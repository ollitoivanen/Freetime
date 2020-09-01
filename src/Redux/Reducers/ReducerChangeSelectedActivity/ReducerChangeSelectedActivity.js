import {ACTION_CHANGE_SELECTED_ACTIVITY} from 'Constants/Constants';
let initialState = {selectedActivity: 'noActivitySelected'};

export default ReducerChangeSelectedActivity = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ACTION_CHANGE_SELECTED_ACTIVITY:
      return {selectedActivity: action.payload};
    default:
      return state;
  }
};
