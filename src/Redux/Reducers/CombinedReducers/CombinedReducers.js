import {combineReducers} from 'redux';
import ReducerChangeCurrentScreen from 'ReducerChangeCurrentScreen/ReducerChangeCurrentScreen';
import ReducerChangeSelectedActivity from 'ReducerChangeSelectedActivity/ReducerChangeSelectedActivity';
export default combineReducers({
  ReducerChangeCurrentScreen,
  ReducerChangeSelectedActivity,
});
