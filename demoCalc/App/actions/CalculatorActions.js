

import {SET_VALUE,SET_PREVIOUS_VALUE,SET_SYMBOL} from './types';



export const setValue = (text) => {
  return {
    type: SET_VALUE,
    payload: text
  };
};


export const setPreviousValue = (text) => {
  return {
    type: SET_PREVIOUS_VALUE,
    payload: text
  };
};


export const setSelectedSymbol = (text) => {
  return {
    type:SET_SYMBOL,
    payload: text
  };
};
