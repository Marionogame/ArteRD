import { handleActions } from "redux-actions";
import { buscarImagenDatosSuccess, buscarImagenDatosError } from "../actions/buscadorImagenDatos";

export default handleActions ({
    [buscarImagenDatosSuccess]: (state, actions) => {
        var datos = actions.payload;
        return datos;
    },
    [buscarImagenDatosError]: (state, actions) => {
        return  console.log("(Error reducer buscarImagenDatosError)");
    }
    

}, []);
