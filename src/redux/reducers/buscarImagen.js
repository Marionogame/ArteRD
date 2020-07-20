
import { handleActions } from "redux-actions";
import { buscarImagenSuccess, buscarImagenError } from "../actions/buscadorImagen";

export default handleActions ({
    [buscarImagenSuccess]: (state, actions) => {
        var perro = [];
        for (var i = 0; i <  actions.payload.length; i++) {
        var urlCreator = window.URL || window.webkitURL;
         perro.push(urlCreator.createObjectURL( actions.payload[i]));}
        return perro;
    },
    [buscarImagenError]: (state, actions) => {
        return [1,4,3];
    }
    

}, []);

/*import { type as buscarImagenType } from '../actions/buscadorImagen';

import Item from "../../data/items";
import Imagen from "../../data/imagenAleatoria";

var aFileParts = ['<a id="a"><b id="b">hey!</b></a>'];
var blobito = new Blob(aFileParts, {type : "image/jpeg"}); // the blob
var pasola = true
var perro ;
    fetch('http://localhost:3000/todoi/IMG_20150815_171631.jpg')
    .then(response => response.blob())
    .then(memesJson => blobito = memesJson, pasola = true) 
   
        //const perro =  URL.createObjectURL(memesJson),pasola = false }
    
    if (pasola === false){
    

      
    }
console.log(Imagen);
var usuario = [];
fetch('http://localhost:3000/usuario')
.then(response => response.json())
.then(data => usuario = data,console.log(usuario)   );



    const defaultState = [];



function reducer(state = defaultState, {type, payload}) {
    switch (type) {
        case buscarImagenType: {
        
            return  [{id:1,
            title:"mario"}]
           
        }

        default:
           return state; 
    }
}
export default reducer;

 */