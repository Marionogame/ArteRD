import { createAction } from "redux-actions";


export const datosUserOnlineSuccess = createAction('datosUserOnlineSuccess');
export const buscarImagenError = createAction('buscarImagenError');


var usuario = [];

export const datosLogiOnlineEntrada = (datosLoginUser) => async (dispatch) =>{
   try {

     
      
         usuario = datosLoginUser;
         dispatch(datosUserOnlineSuccess(usuario));
    } catch (error) {
        console.log("(Error action buscadorImagenBlob)");
    }
  

}


