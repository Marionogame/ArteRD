
import { handleActions } from "redux-actions";
import { buscarDatosUserSuccess, buscarDatosUserError } from "../actions/verificacionLoginDatos";

export default handleActions ({
    [buscarDatosUserSuccess]: (state, actions) => {
        var datosUsuario = actions.payload;
        
        return datosUsuario;
        
       
    },
    [buscarDatosUserError]: (state, actions) => {
        console.log("mmm")
        return [1,4,3];
    }
    

}, []);