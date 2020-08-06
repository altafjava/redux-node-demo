const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = 'BUY_CAKE';
const BUY_BISCUIT = 'BUY_BISCUIT';

//Cake Action Creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'buy cake action',
  };
}
//Biscuit Action Creator
function buyBiscuit() {
  return {
    type: BUY_BISCUIT,
    info: 'buy biscuit action',
  };
}
const cakeInitialState = {
  noOfCake: 10,
};
const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCake: state.noOfCake - 1,
      };
    default:
      return state;
  }
};
const biscuitInitialState = {
  noOfBiscuit: 20,
};
const biscuitReducer = (state = biscuitInitialState, action) => {
  switch (action.type) {
    case BUY_BISCUIT:
      return {
        ...state,
        noOfBiscuit: state.noOfBiscuit - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  biscuit: biscuitReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));
console.log('initial state=', store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyBiscuit());
store.dispatch(buyBiscuit());
store.dispatch(buyBiscuit());
