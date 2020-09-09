const initialState = {count:2}

function countReducer(state=initialState, action) {  
    switch(action.type) {
      
        case "ADD1": return {count: state.count + action.payload};
        case "SUB1": return {count: state.count - action.payload};
        
        default: return state;
    }
  }
  
  export default countReducer ;