import { createAction } from "redux-actions";
const axios = require('axios');
export const buscarDatosUserSuccess = createAction('buscarDatosUserSuccess');
export const buscarDatosUserError = createAction('buscarDatosUserError');

export const buscadorUsuarios = (datosLogin) => async (dispatch) =>{
    try {
       let res = await axios.get('http://localhost:3000/usuario');
      let {data}  = res.data;
       var datosLoginUser = []

      data.filter(data => data.nombre_usuario === datosLogin[0]).map(filteredDatos => (
     
        datosLoginUser.push (filteredDatos )
       
      ))
      if (datosLoginUser.length === 0) {
        var datosLoginCorreo = []
        data.filter(data => data.correo === datosLogin[0]).map(filteredDatos => (
          datosLoginCorreo.push (filteredDatos)))
         
          if (datosLoginCorreo.length !== 0) {
         if (datosLoginCorreo[0].correo === datosLogin[0] && datosLoginCorreo[0].contrasena === datosLogin[1] ){
           
           dispatch(buscarDatosUserSuccess(datosLoginCorreo));
         }else{
          dispatch(buscarDatosUserError());
         }

          } else {
            dispatch(buscarDatosUserError());
          }
        
        } 
          
          else {
         if (datosLoginUser[0].nombre_usuario === datosLogin[0] && datosLoginUser[0].contrasena === datosLogin[1] ){
     
        dispatch(buscarDatosUserSuccess(datosLoginUser));
    
       } else {
        dispatch(buscarDatosUserError());
       }

      }

      
    
      
       } catch (error) {
        console.log("(Error action buscadorImagen)",error);
    }
  }
  