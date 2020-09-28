export function increment() {
   return {
      type: 'INCREMENT'
   }
}
export function decrement() {
   return {
      type: 'DECREMENT'
   }
}
export function reset() {
   return { type: 'RESET' }
}

const counterReducer = (state = 0, action) => {
   switch (action.type) {
      case 'INCREMENT': return state + 1
      case 'DECREMENT': return state - 1
      case 'RESET' : return 0 
      default: return state
   }
}

export default counterReducer;