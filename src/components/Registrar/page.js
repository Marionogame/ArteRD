import React , {Fragment}  from 'react';
import './style.css';
import AppBar from '../appBar';
import face from '../../img/face.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserTie,faKey} from '@fortawesome/free-solid-svg-icons';
function Page(props) {
  
    return (
      <Fragment>
      <AppBar/>
      
  <div class="modal-dialog text-center">
    <div class="col-sm-12 main-section">
      <div class="modal-content" id="modal-content">

        <div class="col-12 user-img">
          <img src= {face}/>
        </div>

        <div class="col-12 form-input">
      <form>
         
      <div class="form-group row">
        
          <span id="icon"><FontAwesomeIcon icon={faUserTie}/></span>
          <div class="col-sm-9">
              <input type="email" class="form-control" placeholder="Usuario"/>
            </div></div>
          
            <div class="form-group row">
            <span id="icon1"><FontAwesomeIcon icon={faKey}/></span>
            <div class="col-sm-9">
              <input type="password" class="form-control" placeholder="Contraseña"/>
            </div>
            </div>
          <button type="submit" class="btn btn-success">Login</button>
          </form>
        </div>

        <div class="col-12 forgot">
          <a href="#">Forgot Password?</a>
    </div>

      </div>
    </div>
  </div>


  <div class="modal-dialog text-center">
    <div class="col-sm-12 ">
      <div id="modal-content">

        <div class="col-12 forgot1"> 
        <h5>¿No tienes una cuenta?  <a href="/" id="Registrate">Regístrate</a></h5>
        
    </div>

      </div>
    </div>
  </div>




      </Fragment>
   );
    
}

export default Page;
