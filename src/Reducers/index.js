import { combineReducers } from 'redux'

import {    
  INCREMENT,
  DECREMENT
} from '../Actions'

function count( state = {}, action ) {
  switch (action.type) {
    case INCREMENT: 
      return Object.assign({}, state, {
        
      })
    case DECREMENT: 
      return Object.assign({}, state, {
       
      })
    default: 
      return state
   }
}


const rootReducer = combineReducers({
  count
})

export default rootReducer
