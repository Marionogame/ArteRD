import { createStore, combineReducers, applyMiddleware} from 'redux';
import results from './reducers/results';
import thunk from "redux-thunk";
import suggestions from './reducers/suggestions';
import currentItem from './reducers/currentItem';
import buscarImagen from './reducers/buscarImagen';
const reducer = combineReducers ({
    results,
    suggestions,
    currentItem,
    buscarImagen,

});

const store = createStore(reducer,applyMiddleware(thunk));

export default store;
