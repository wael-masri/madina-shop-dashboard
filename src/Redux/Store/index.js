import { createStore, applyMiddleware } from 'redux'
import reducers from '../Reducers'
import reduxThunk from "redux-thunk";
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const  store = createStore(reducers,enhancer(applyMiddleware(reduxThunk)));


export default store;