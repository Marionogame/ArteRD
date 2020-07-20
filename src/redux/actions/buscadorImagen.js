import { createAction } from "redux-actions";
const axios = require('axios');

export const buscarImagenSuccess = createAction('buscarImagenSuccess');
export const buscarImagenError = createAction('buscarImagenError');




export const buscadorImagen = (CategoriaS) => async (dispatch) =>{
  try {

    
     let res = await axios.get('http://localhost:3000/producto');
    let {data}  = res.data;
    var listaImagen = [];
    var imagenesCategoria = [];
    data.filter(ImagenList => ImagenList.categoria === CategoriaS).map( filteredImagen => (
   
      imagenesCategoria.push (filteredImagen)
     
    ))
    
    for (var i = 0; i < imagenesCategoria.length ; i++) {

      listaImagen.push(imagenesCategoria[i].imagen);
      // listaImagen.push(data[Math.floor(Math.random() *  data.length-1) + 0].imagen);
   }
 console.log(listaImagen)

  
    dispatch(buscadorImagenBlob(listaImagen));
  } catch (error) {
      console.log("(Error action buscadorImagen)",error);
  }
}




export const buscadorImagenBlob = (listaImagen) => async (dispatch) =>{
  try {
    
    var imagenes = [];
    for (var i = 0; i < listaImagen.length; i++) {

    let URL = `http://localhost:3000/todoi/${listaImagen[i]}`
    var aFileParts = ['<a id="a"><b id="b">hey!</b></a>'];
    var data = new Blob(aFileParts, {type : 'text/html'});
     let res = await axios.get(URL, { responseType:"blob" });
     data  = res.data;
     imagenes.push(data);

    }  
    console.log(imagenes)
    dispatch(buscarImagenSuccess(imagenes));
  } catch (error) {
      console.log("(Error action buscadorImagenBlob)");
  }
}
