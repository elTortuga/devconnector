import { TEST_DISPATCH } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case TEST_DISPATCH:
      return {
        ...state,
        user: action.payload
      }
  
    // case value:
      
    //   break;
  
    // case value:
      
    //   break;
  
    // case value:
      
    //   break;
  
    // case value:
      
    //   break;
  
    default:
      return state;
  }
}