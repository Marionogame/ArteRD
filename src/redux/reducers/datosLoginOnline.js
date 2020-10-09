import { handleActions } from "redux-actions";
import { datosUserOnlineSuccess, buscarImagenError } from "../actions/datosLoginEnlinea";

export default handleActions ({
    [datosUserOnlineSuccess]: (state, actions) => {
        var datosUsuarioOnline = actions.payload;
        console.log("reducer:", datosUsuarioOnline);
       
        return datosUsuarioOnline;
    },
    [buscarImagenError]: (state, actions) => {
        return [1,4,3];
    }
    

}, []);
