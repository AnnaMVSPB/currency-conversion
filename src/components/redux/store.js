import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { currencyReducer } from './reducers/currencyReducer';



export const store = createStore(currencyReducer, composeWithDevTools());
