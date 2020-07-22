import { createStore, combineReducers, applyMiddleware} from 'redux';
import results from './reducers/results';
import thunk from "redux-thunk";
import suggestions from './reducers/suggestions';
import currentItem from './reducers/currentItem';
import buscarImagen from './reducers/buscarImagen';
import buscarImagenDatos from './reducers/buscarImagenDatos';
const reducer = combineReducers ({
    results,
    suggestions,
    currentItem,
    buscarImagen,
    buscarImagenDatos,
});

const store = createStore(reducer,applyMiddleware(thunk));

export default store;
