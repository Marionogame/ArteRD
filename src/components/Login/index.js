import React, {Component,Fragment} from 'react';
import './style.css';
import AppBar from '../appBar';
import face from '../../img/face.png';
import { connect } from 'react-redux';
import {buscadorUsuarios} from '../../redux/actions/verificacionLoginDatos';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserTie,faKey} from '@fortawesome/free-solid-svg-icons';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contrasena: '',
            usuario: '',
          
        };
        this.insertarContrasenaChange = this.insertarContrasenaChange.bind(this);
        this.insertarUsuarioChange = this.insertarUsuarioChange.bind(this);
        this.subirLogin = this.subirLogin.bind(this);
      
    
}

  

  insertarContrasenaChange(e) {
    this.setState({contrasena: e.target.value});
   
 };
 insertarUsuarioChange(e) {
  this.setState({usuario: e.target.value});

};
 subirLogin() {
   var datosLogin = []
   datosLogin = ([this.state.usuario, this.state.contrasena]) ;
  this.props.buscadorUsuarios(datosLogin);
  
}




    render() {
        
        return (
     
          
               
            <Fragment>
            <AppBar/>
            
        <div className="modal-dialog text-center">
          <div className="col-sm-12 main-section">
            <div className="modal-content" id="modal-content">
      
              <div className="col-12 user-img">
                <img src={face}/>
              </div>
      
              <div className="col-12 form-input">
            <form onSubmit={this.valorUCT}>
               
            <div className="form-group row">
              
                <span id="icon"><FontAwesomeIcon icon={faUserTie}/></span>
                <div className="col-sm-9">
                    <input type="text"  className="form-control" value={this.state.usuario} onChange={this.insertarUsuarioChange}  placeholder="Usuario"/>
                  </div></div>
                
                  <div className="form-group row">
                  <span id="icon1"><FontAwesomeIcon icon={faKey}/></span>
                  <div className="col-sm-9">
                    <input type="password"  name="password"  value={this.state.contrasena} onChange={this.insertarContrasenaChange} className="form-control" placeholder="Contraseña" />
                  </div>
                  </div>
                <button className="btn btn-success" type="button" onClick={this.subirLogin}>Login</button>
                </form>
              </div>
      
              <div className="col-12 forgot">
                <a href="#">Forgot Password?</a>
          </div>
      
            </div>
          </div>
        </div>
      
      
        <div className="modal-dialog text-center">
          <div className="col-sm-12 ">
            <div id="modal-content">
      
              <div className="col-12 forgot1"> 
              <h5>¿No tienes una cuenta?  <a href="/" id="Registrate">Regístrate</a></h5>
              
          </div>
      
            </div>
          </div>
        </div>
      
      
      
      
            </Fragment>
            )
    }
    
}


const mapDispatchToProps = {

  buscadorUsuarios,
};
const mapStateToProps = (state) => {
  return {
      buscarImagen: state.buscarImagen,
      buscarDatosImagen: state.buscarImagenDatos,


  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Login);

