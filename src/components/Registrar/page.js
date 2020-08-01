import React , {Fragment}  from 'react';
import './style.css';
import AppBar from '../appBar';
import face from '../../img/face.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserTie,faUnlockAlt,faUsers,faLock,faPhoneSquareAlt,faCalendarAlt,faVenusMars,faUserTag} from '@fortawesome/free-solid-svg-icons';
import Footer from '../footer';
function Page(props) {
  const {
    isNumberKey,
    SoloNumero
} = props;

    return (
      <Fragment>
      <AppBar/>
      
  <div className="container">
    <div className="col-sm-7 main-section">
      <div className="modal-content" id="modal-content">

        <div className="col-12 text-center user-img">
          <img src= {face}/>
        </div>

        <div className="col-12 form-input">
        <form>
  <div class="form-row">
    <div class="form-group col-md-6">
    <span id="icon"><FontAwesomeIcon icon={faUserTie}/></span>
      <input type="text" class="form-control" id="inputNombre" placeholder="Nombre Completo"/>
    </div>
    <div class="form-group col-md-6">
    <span id="icon"><FontAwesomeIcon icon={faUserTag}/></span>
      <input type="text" class="form-control" id="inputApellido" placeholder="Apellido"/>
    </div>
  </div>
  <div class="form-group">
  <span id="icon"><FontAwesomeIcon icon={faUsers}/></span>
    <input type="text" class="form-control" id="inputUsuario" placeholder="Nombre Usuario"/>
  </div>
  <div class="form-group">
  <span id="icon"><FontAwesomeIcon icon={faUnlockAlt}/></span>
    <input type="password" class="form-control" id="inputContrasena" placeholder="Contrasena"/>
  </div>
  <div class="form-group">
  <span id="icon"><FontAwesomeIcon icon={faLock}/></span>
    <input type="password" class="form-control" id="inputConfirmarContrasena" placeholder="Confirmar Contrasena"/>
  </div>
  <div class="form-group">
  <span id="icon"><FontAwesomeIcon icon={faPhoneSquareAlt}/></span>
    <input type="text" class="form-control" id="inputTelefono"  placeholder="Telefono (Solo Numero)"/>
  </div>

  

  <span id="icon"><FontAwesomeIcon icon={faCalendarAlt}/></span>
  <div class="form-row">
  <div class="form-group col-md-4">
    
     <h5><label for="inputState">Dias</label></h5> 
      <select id="inputState" class="form-control">
        <option selected>Dias</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-4">
    <h5><label for="inputState">Mes</label></h5>
      <select id="inputState" class="form-control">
        <option selected>Mes</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-4">
    <h5> <label for="inputState">Años</label></h5>
      <select id="inputState" class="form-control">
        <option selected>Años</option>
        <option>...</option>
      </select>
    </div>
  </div>
  <span id="icon"><FontAwesomeIcon icon={faVenusMars}/></span>
  <div class="form-group col-12 ">
  <div class="form-check form-check-inline col-md-4">
   
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <h5><label class="form-check-label" for="inlineRadio1">Mujer</label>
  </h5>
</div>
<div class="form-check form-check-inline col-md-4">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <h5><label class="form-check-label" for="inlineRadio2">Hombre</label></h5>
</div>
<div class="form-check form-check-inline  col-md-3">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
  <h5> <label class="form-check-label" for="inlineRadio3">Personalizado</label></h5>
</div>
  </div>
  <div class="col-12 " >
  <button className="btn btn-success" type="button">Registrarte</button>
  </div>
</form>
        </div>
        
    
      </div>
    </div>
  </div>

  <Footer />
      </Fragment>
   );
    
}




export default Page;
