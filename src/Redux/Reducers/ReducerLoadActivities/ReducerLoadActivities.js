import {ACTION_CHANGE_SELECTED_ACTIVITY} from 'Constants/Constants';
import { ACTION_LOAD_ACTIVITIES } from 'Constants/Constants';
let initialState = {activities: []};

export default ReducerLoadActivities = (state = initialState, action) => {

  switch (action.type) {
    case ACTION_LOAD_ACTIVITIES:

      return {activities: action.payload};
    default:
      return state;
  }
};
