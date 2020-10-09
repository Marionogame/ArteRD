import { createAction } from "redux-actions";

const axios = require('axios');

export const datosUserOnlineSuccess = createAction('datosUserOnlineSuccess');
export const buscarImagenError = createAction('buscarImagenError');


var usuario = [];

export const datosLogiOnlineEntrada = (datosLoginUser) => async (dispatch) =>{
   try {

     
      
         usuario = datosLoginUser;
         dispatch(datosLoginEnlinea(usuario));
    } catch (error) {
        console.log("(Error action buscadorImagenBlob)");
    }
  

}

export const datosLoginEnlinea = (usuario) => async (dispatch) =>{
   try {
 
    var imagenPerfil = usuario[0].imagen_perfil;
    if (imagenPerfil === null) {
          imagenPerfil = "nulo.png"
    }
    let URL = `http://localhost:3000/imagen/${imagenPerfil}`
var aFileParts = ['<a id="a"><b id="b">hey!</b></a>'];
var data = new Blob(aFileParts, {type : 'text/html'});
 let res = await axios.get(URL, { responseType:"blob" });
 data  = res.data;

 
 var urlImagen = [];
  var urlCreator = window.URL || window.webkitURL;
  
   urlImagen.push(urlCreator.createObjectURL(data));
   usuario.push(urlImagen);

      
   dispatch(datosUserOnlineSuccess(usuario));

    } catch (error) {
        console.log(error,"(Error action segundo)");
    }
  

}


