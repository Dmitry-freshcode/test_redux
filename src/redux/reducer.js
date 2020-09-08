



function countReducer(state, action) {  
    switch(action.type) {
      
        case "ADD": return {count: state.count + 1};
        case "REMOVE": return {count: state.count - 1};
        
        default: return state;
    }
  }
  function testReducer(state, action) {  
    switch(action.type) {
      
        case "ADD": return {test: state.test + 1};
        case "REMOVE": return {test: state.test - 1};
        
        default: return state;
    }
  }



  export {countReducer,testReducer} ;