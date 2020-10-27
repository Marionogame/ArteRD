import { createStore, combineReducers, applyMiddleware} from 'redux';
import results from './reducers/results';
import thunk from "redux-thunk";
import suggestions from './reducers/suggestions';
import currentItem from './reducers/currentItem';
import buscarImagen from './reducers/buscarImagen';
import buscarImagenDatos from './reducers/buscarImagenDatos';
import LoginDatos from './reducers/LoginDatos';
import datosLoginOnline from './reducers/datosLoginOnline';
import buscarImagenPerfil from './reducers/buscarImagenPerfil';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const reducer = combineReducers ({
    results,
    suggestions,
    currentItem,
    buscarImagen,
    buscarImagenDatos,
    LoginDatos,
    datosLoginOnline,
    buscarImagenPerfil
});
const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['datosLoginOnline','buscarImagenPerfil'] 
  };
const pReducer = persistReducer(persistConfig,reducer);
const store = createStore(pReducer,applyMiddleware(thunk));
const persistor = persistStore(store);
export { persistor, store };
