/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import './style.css';
import usuario from '../../img/usuario.png';
import fondoPintura from '../../img/fondoPintura.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUpload} from '@fortawesome/free-solid-svg-icons';
import ArtistaPintando from '../../img/ArtistaPintando.jpg';


function Info(props) {
  const {
    guardarImagen,
    LoginDatos,
    imagen,
    EliminarImagenAnterior,
    datosLoginOnline
} = props;

  
    return (
        
        <Fragment>
            <div>
       <div id="contenedor"   onMouseMove={  () => {mostrarCarga(); }}  onMouseOut={  () => {esconderCarga(); }}> 
             <div>
      <img src={datosLoginOnline[1][0]} width="115" height="115" ></img>
   
   <div id="centradoFondo" onMouseMove={  () => {mostrarCarga(); }}></div>
   <a href="#" id="centrado"  data-toggle="modal" data-target="#exampleModal">cargar imagen</a>
  <div><FontAwesomeIcon id="subirImagen" icon={faUpload}/></div>
       </div>
       </div>
       <div id="contenedorLinea" ></div>
       <div id="contenedorBottom" onMouseEnter={  () => {esconderCarga(); }}> 
  
         <h4>Mario Jose Espaillat Morey</h4>
         <ul class="list-group">
  <li class="list-group-item" id="fondoDatosInfo">Informacion</li>
    <li class="list-group-item" id="fondoDatos"><h4>{datosLoginOnline[0].numero}</h4></li>
  <li class="list-group-item" id="fondoDatos"><h4>Correo</h4></li>
  <li class="list-group-item" id="fondoDatos"><h4>Redes 1</h4></li>
  <li class="list-group-item" id="fondoDatos"><h4>redes 2</h4></li>
  <li class="list-group-item" id="fondoDatos"><h4>redes 3</h4></li>
  
</ul>
 

        
       </div>
       </div>

       <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Imagen De Perfil</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <input type="file"  name="image" id="image"  accept="image/*"/>
      <hr></hr>
      <div className="row">
      <div className="col-md-6">
      <button type="button" class="btn btn-danger" id="buttomEliminarP" onClick={  () => {EliminarImagenAnterior(); }} >Eliminar Antigua</button>
     
        </div>
        <div className="col-md-6">
        <button type="button" class="btn btn-secondary" id="buttomCerralM"data-dismiss="modal">Cerrar</button>
        <button  class="btn btn-primary" type="submit"  id="buttomGuardarCambios" onClick={  () => {enviarImagen();guardarImagen(); }}>Guardar Imagen</button>
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
