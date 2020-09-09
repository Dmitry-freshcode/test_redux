const initialState = {count:1}

function countReducer2(state=initialState, action) {  
    switch(action.type) {
      
        case "ADD2": return {count: state.count + action.payload};
        case "SUB2": return {count: state.count - action.payload};
        
        default: return state;
    }
  }
  
  export default countReducer2 ;