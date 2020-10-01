const initialState = {
  // initiate count as 0
  count : 0
};

const counterReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'INCREMENT': 
        // return new count with increment
        return {count:state.count+1};
      case 'DECREMENT': 
        // return new count with decrement
        return {count:state.count-1};
      case 'RESET' : 
        // return count as 0
        return {count:0};
      default: 
        return state;
   }
}

export default counterReducer;