import { combineReducers } from 'redux';

import CalculatorReducer from './CalculatorReducer'
//import SecretMenuAlertReducer from './SecretMenuAlertReducer'
//import SecretMenuCreateAlertReducer from './SecretMenuCreateAlertReducer'
export default combineReducers({

calculator:CalculatorReducer
  //secretMenuList:SecretMenuAlertReducer,
  //secretMenuCreateAlert:SecretMenuCreateAlertReducer
});
