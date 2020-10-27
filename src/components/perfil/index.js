import React, {Component, Fragment } from 'react';
import Page from './page';
import {connect} from 'react-redux';
import {file1} from './info';
import {buscadorImagen} from '../../redux/actions/buscadorImagen';
import {datosLogiOnlineEntrada} from '../../redux/actions/datosLoginEnlinea';
import {imagenPerfilID} from '../../redux/actions/buscadorImagenPerfil';

const axios = require('axios');



class Perfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memes: {},
            imagen: "",
            DatosUsuario:{},
      
        };
        this.guardarImagen = this.guardarImagen.bind(this);
        this.EliminarImagenAnterior = this.EliminarImagenAnterior.bind(this);
        this.NavRegister = this.NavRegister.bind(this);
        
    }
    
async guardarImagen(){
  
   
   const {datosLoginOnline} = this.props; 

 

 if (file1 !== undefined &&  file1.size < 3114842 && datosLoginOnline.length !== 0  ) {
  
        var nombreImg = file1.name;
          if (nombreImg === "nulo.png"){
              nombreImg = "1nulo.png";
          }
  //actualizando datosLoginOnline  
  let res = await axios.get('http://localhost:3000/usuario');
      let {data}  = res.data;
      
      // eslint-disable-next-line no-loop-func
      var datosLoginOnlineActualizado = data.filter(data => data.id === datosLoginOnline[0].id);
 //Revisar  que el nombre de la imagen no se repita y actualizarla

    var condicion = "incorrecto";
    var contador = 0;

    while (condicion !== "correcto") {

     let res = await axios.get('http://localhost:3000/usuario');
      let {data}  = res.data;
      
      // eslint-disable-next-line no-loop-func
      var datosImagenUser = data.filter(data => data.imagen_perfil === nombreImg);
        condicion = "correcto";

        if (datosImagenUser.length !== 0) {
            condicion = "incorrecto";
            contador = contador + 1;
            var numero = contador.toString();
            nombreImg =  numero +"."+ nombreImg ;
            
        }
        
       
     }
     const imagenPerfil = new File([file1], nombreImg);
    //eliminar imagen si exixste
    if (datosLoginOnlineActualizado[0].imagen_perfil !==  null && datosLoginOnlineActualizado[0].imagen_perfil !== "nulo.png" ) {
       
        await axios.delete(`http://localhost:3000/imagen/${datosLoginOnlineActualizado[0].imagen_perfil}`)
        .then(res => res.data);
       }

// guardar imagen 
var bodyFormData = new FormData();
bodyFormData.append("file",imagenPerfil); 
axios.post('http://localhost:3000/image', bodyFormData, {
 headers: {
   'Content-Type': 'multipart/form-data'
 }
}) 

 //actualizar usuario
 const NombreImagen= {imagen_perfil: nombreImg}
   
  await axios.put(`http://localhost:3000/usuario/${datosLoginOnlineActualizado[0].id}`,  NombreImagen)
  .then(response => response.data)
  .catch((error) => {
    throw error.response.data
  })
 }
//actualizando datosLoginOnline  
let res = await axios.get('http://localhost:3000/usuario');
let {data}  = res.data;

// eslint-disable-next-line no-loop-func
var datosLoginOnlineActualizadoSubir = data.filter(data => data.id === datosLoginOnline[0].id);


    this.props.datosLogiOnlineEntrada(datosLoginOnlineActualizadoSubir);
//actualizando datosLoginOnlineActualizadoSubir
    this.props.imagenPerfilID(datosLoginOnlineActualizadoSubir[0]);
} 
async EliminarImagenAnterior(){
    const {datosLoginOnline} = this.props; 
 

    if (datosLoginOnline.lenght !== 0) {
    
//actualizando datosLoginOnline  
    let res = await axios.get('http://localhost:3000/usuario');
        let {data}  = res.data;
        
        // eslint-disable-next-line no-loop-func
        var datosLoginOnlineActualizado = data.filter(data => data.id === datosLoginOnline[0].id);

          if (datosLoginOnlineActualizado[0].imagen_perfil !==  null && datosLoginOnlineActualizado[0].imagen_perfil !== "nulo.png") {
       
        await axios.delete(`http://localhost:3000/imagen/${datosLoginOnlineActualizado[0].imagen_perfil}`)
       .then(res => res.data);
      }


//eliminar imagen usuario 
        
        const NombreImagen= {imagen_perfil: "nulo.png"}
   console.log("imagen");
  await axios.put(`http://localhost:3000/usuario/${datosLoginOnlineActualizado[0].id}`, NombreImagen)
  .then(response => response.data)
  .catch((error) => {
    throw error.response.data
  })
 
    }

//actualizando datosLoginOnline  
let res = await axios.get('http://localhost:3000/usuario');
let {data}  = res.data;

// eslint-disable-next-line no-loop-func
var datosLoginOnlineActualizadoSubir = data.filter(data => data.id === datosLoginOnline[0].id);


    this.props.datosLogiOnlineEntrada(datosLoginOnlineActualizadoSubir);
    //actualizando datosLoginOnlineActualizadoSubir
    this.props.imagenPerfilID(datosLoginOnlineActualizadoSubir[0]);
}
NavRegister(){
this.props.history.push("/usuarioAct");
}

async componentDidMount () {
    this.props.buscadorImagen("esculturas");
 }


render() {
    const {buscarImagen} = this.props;
    const {buscarDatosImagen} = this.props;
    const {categoria} = this.state;
    const {imagen} = this.state;
    const {datosLoginOnline} = this.props;
    const {buscarImagenPerfil} = this.props;
           if (buscarImagen.length === 0 ){
                return "cargando"
             }
           if (datosLoginOnline.length === 0 ){
             return "cargando"
            }
           if (buscarImagenPerfil.length === 0 ){
                return "cargando"
               }
            
           
         
   
   
        return (
            <Fragment>
            
            <Page
             buscarImagen={buscarImagen}
             buscarDatosImagen={buscarDatosImagen}
             buscarImagenPerfil={buscarImagenPerfil}
             guardarImagen={this.guardarImagen}
             categoria={categoria}
             imagen={imagen}
             EliminarImagenAnterior={this.EliminarImagenAnterior}
             datosLoginOnline={datosLoginOnline}
             NavRegister={this.NavRegister}
            />
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        buscarImagen: state.buscarImagen,
        buscarDatosImagen: state.buscarImagenDatos,
        datosLoginOnline: state.datosLoginOnline,
        buscarImagenPerfil: state.buscarImagenPerfil

    };
};
const mapDispatchToProps = {

    buscadorImagen,
    datosLogiOnlineEntrada,
    imagenPerfilID,
    
};
  

export default connect(mapStateToProps, mapDispatchToProps)(Perfil);
