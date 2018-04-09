import  {SET_VALUE,SET_PREVIOUS_VALUE,SET_SYMBOL} from '../actions/types'


const INITIAL_STATE={
selectedSymbol:null,
value:0,
previousValue:0
};


export default(state=INITIAL_STATE,action)=>{



switch(action.type){

case SET_VALUE:
return{...state,value:action.payload}

case SET_PREVIOUS_VALUE:
return{...state,previousValue:action.payload}

case SET_SYMBOL:
return{...state,selectedSymbol:action.payload}

default:
return state;



}





}
