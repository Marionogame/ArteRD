/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import './style.css';


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUpload} from '@fortawesome/free-solid-svg-icons';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons';



function Info(props) {
  const {
    guardarImagen,
    EliminarImagenAnterior,
    datosLoginOnline,
    NavRegister,
    buscarImagenPerfil
} = props;
//mostrar redes si tienen
var redes1None = "block";
var redes2None = "block";
var redes3None = "block";
if (datosLoginOnline[0].redes1 === "https://www.ArteRD.com"){
  redes1None = "none";
}
if (datosLoginOnline[0].redes2 === "https://www.ArteRD.com"){
 redes2None = "none";
}
if (datosLoginOnline[0].redes3 === "https://www.ArteRD.com"){
  redes3None = "none";
}
  
    return (
        
        <Fragment>
            <div>
       <div id="contenedor"   onMouseMove={  () => {mostrarCarga(); }}  onMouseOut={  () => {esconderCarga(); }}> 
             <div>
      <img src={buscarImagenPerfil} width="115" height="115" id="imagenPeril"></img>
   
   <div id="centradoFondo" onMouseMove={  () => {mostrarCarga(); }}></div>
   <span  id="centrado"  data-toggle="modal" data-target="#exampleModal">cargar imagen</span>
  <div><FontAwesomeIcon id="subirImagen" icon={faUpload}/></div>
       </div>
       </div>
       <div id="contenedorLinea" ></div>
       <div id="contenedorBottom" onMouseEnter={  () => {esconderCarga(); }}> 
         <div className="ml-2">
         <h4 id="TitleName">{datosLoginOnline[0].nombre} {datosLoginOnline[0].apellido}</h4>
         </div>
         <ul className="list-group">
       
  <li className="list-group-item  text-center" id="fondoDatosInfo" ><h4 onClick={() => {NavRegister();}} id="editarIndoTitle">Actualizar Informacion  <span><FontAwesomeIcon icon={faPencilAlt}/></span></h4></li> 
    <li className="list-group-item" id="fondoDatos"><h4 id="TitleLetraList">Tel: <div id="LetraList">{datosLoginOnline[0].numero}</div></h4></li>
  <li className="list-group-item"   id="fondoDatos"><h4 id="TitleLetraList">Correo: <div id="LetraList">{datosLoginOnline[0].correo}</div></h4></li>
  <li className="list-group-item" id="fondoDatos" style={{display: redes1None}}><h4 id="TitleLetraList">Redes: <div  id="LetraList">{datosLoginOnline[0].redes1}</div></h4></li>
  <li className="list-group-item" id="fondoDatos" style={{display: redes2None}}><h4 id="TitleLetraList">Redes: <div id="LetraList">{datosLoginOnline[0].redes2}</div></h4></li>
  <li className="list-group-item" id="fondoDatos" style={{display: redes3None}}><h4 id="TitleLetraList">Redes: <div id="LetraList">{datosLoginOnline[0].redes3}</div></h4></li>
  
</ul>
 

        
       </div>
       </div>

       <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Imagen De Perfil</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <input type="file"  name="image" id="image"  accept="image/*"/>
      <hr></hr>
      <div className="row">
      <div className="col-md-6">
      <button type="button" className="btn btn-danger" id="buttomEliminarP" onClick={  () => {EliminarImagenAnterior(); }} >Eliminar Antigua</button>
     
        </div>
        <div className="col-md-6">
        <button type="button" className="btn btn-secondary" id="buttomCerralM"data-dismiss="modal">Cerrar</button>
        <button  className="btn btn-primary" type="submit"  id="buttomGuardarCambios" onClick={  () => {enviarImagen();guardarImagen(); }} data-dismiss="modal">Guardar Imagen</button>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
    
        </Fragment>
    );
}

function mostrarCarga(){
    document.getElementById('centradoFondo').style.display="block";
    document.getElementById('subirImagen').style.display="block";
    document.getElementById('centrado').style.display="block";

}

function esconderCarga(){
    document.getElementById('centradoFondo').style.display="none";
    document.getElementById('subirImagen').style.display="none";
    document.getElementById('centrado').style.display="none";

}
var file1 = "fdf";

function enviarImagen(){

file1 = document.getElementById('image').files[0]; ;
  return  file1;
}


export {Info,file1};
