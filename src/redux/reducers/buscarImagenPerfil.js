import { handleActions } from "redux-actions";
import { imagenPerfilIDSuccess, imagenPerfilIDError } from "../actions/buscadorImagenPerfil";

export default handleActions ({
    [imagenPerfilIDSuccess]: (state, actions) => {
        var datosUsuarioOnline = actions.payload;
        var urlImagen = [];
        console.log("aqui",datosUsuarioOnline);
  var urlCreator = window.URL || window.webkitURL;
  urlImagen.push(urlCreator.createObjectURL(datosUsuarioOnline));
  
    console.log("reducer:", urlImagen);
       
        return urlImagen;
    },
    [imagenPerfilIDError]: (state, actions) => {
        console.log("error imagen perfil reducer");
        return [1,4,3];
    }
    

}, []);
