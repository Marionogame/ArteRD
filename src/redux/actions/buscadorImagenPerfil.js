import { createAction } from "redux-actions";

const axios = require('axios');

export const imagenPerfilIDSuccess = createAction('imagenPerfilIDSuccess');
export const imagenPerfilIDError = createAction('imagenPerfilIDError');

export const imagenPerfilID = (IDmagenPerfil) => async (dispatch) =>{
    try {
      var ImagenPerfil = [];
     var imagenPerfil = IDmagenPerfil.imagen_perfil;
     if (imagenPerfil === null) {
           imagenPerfil = "nulo.png"
     }
     let URL = `http://localhost:3000/imagen/${imagenPerfil}`
 var aFileParts = ['<a id="a"><b id="b">hey!</b></a>'];
 var data = new Blob(aFileParts, {type : 'text/html'});
  let res = await axios.get(URL, { responseType:"blob" });
  data  = res.data;
 
 
  ImagenPerfil = data;
 
       
    dispatch(imagenPerfilIDSuccess(ImagenPerfil));
 
     } catch (error) {
        dispatch(imagenPerfilIDError (error));
         console.log(error,"(Error action Imagen Perfil )");
         
     }
   
 
 }