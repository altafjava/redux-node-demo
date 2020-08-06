const redux = require('redux');
const createStore = redux.createStore;
const BUY_CAKE = 'BUY_CAKE';
const BUY_BISCUIT = 'BUY_BISCUIT';

function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'action for cake',
  };
}
function buyBiscuit() {
  return {
    type: BUY_BISCUIT,
    info: 'action for biscuit',
  };
}

const initialState = {
  noOfCake: 10,
  noOfBiscuit: 20,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, noOfCake: state.noOfCake - 1 };
    case BUY_BISCUIT:
      return { ...state, noOfBiscuit: state.noOfBiscuit - 1 };
    default:
      return state;
  }
};
const store = createStore(reducer);
console.log('initial state=', store.getState());
const unsubscribe = store.subscribe(() => console.log('updated state=', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyBiscuit());
store.dispatch(buyBiscuit());
unsubscribe()
