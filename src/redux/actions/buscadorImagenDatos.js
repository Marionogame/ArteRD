import { createAction } from "redux-actions";
const axios = require('axios');

export const buscarImagenDatosSuccess = createAction('buscarImagenDatosSuccess');
export const buscarImagenDatosError = createAction('buscarImagenDatosError');




  export const buscarImagenDatos = (listaImagenNombre,listaImagenPrecio,listaImagenUsuarios) => async (dispatch) =>{
    try {
      var NombreUsuario = [];
        let res = await axios.get('http://localhost:3000/producto');
        let {data}  = res.data;
    
      for (var i = 0; i < listaImagenUsuarios.length; i++) {
        data.filter(data => data.id === listaImagenUsuarios[i]).map(filterNombre => (
   
          NombreUsuario.push (filterNombre.nombre)
        
        ))};
      
    var datosImagenes = [listaImagenNombre,listaImagenPrecio,NombreUsuario];
  
      dispatch(buscarImagenDatosSuccess(datosImagenes));
    } catch (error) {
        console.log("(Error action buscadorImagen)",error);
    }
  }