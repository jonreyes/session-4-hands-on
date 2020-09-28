export function increment() {
  //  return {
  //     type: 'INCREMENT'
  //  }
}
export function decrement() {
  //  return {
  //     type: 'DECREMENT'
  //  }
}
export function reset() {
  //  return { type: 'RESET' }
}

const initialState = {
  // count: 0
};

const counterReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'INCREMENT': 
        // return { count: state.count + 1 };
      case 'DECREMENT': 
        // return { count: state.count - 1 };
      case 'RESET' : 
        // return { count: 0 }
      default: 
        return state;
   }
}

export default counterReducer;