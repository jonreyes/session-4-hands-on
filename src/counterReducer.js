const initialState = {
  // initiate count as 0
};

const counterReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'INCREMENT': 
        // return new count with increment
      case 'DECREMENT': 
        // return new count with decrement
      case 'RESET' : 
        // return count as 0
      default: 
        return state;
   }
}

export default counterReducer;