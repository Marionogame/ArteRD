import React, {Component,Fragment} from 'react';
import './style.css';
import AppBar from '../appBar';
import face from '../../img/face.png';
import { connect } from 'react-redux';
import {buscadorUsuarios} from '../../redux/actions/verificacionLoginDatos';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserTie,faKey} from '@fortawesome/free-solid-svg-icons';
import {Alert} from "reactstrap";
import Footer from '../footer';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contrasena: '',
            usuario: '',
          alerta: false,
          
        };
        this.insertarContrasenaChange = this.insertarContrasenaChange.bind(this);
        this.insertarUsuarioChange = this.insertarUsuarioChange.bind(this);
        this.subirLogin = this.subirLogin.bind(this);
        this.redireccionar = this.redireccionar.bind(this);
        
    
}

  

  insertarContrasenaChange(e) {
    this.setState({contrasena: e.target.value});
 };

 redireccionar(){
   
  this.props.history.push('/registrar');

 }
 insertarUsuarioChange(e) {
  this.setState({usuario: e.target.value});
};

 async subirLogin() {
   var datosLoginUC = []
   datosLoginUC = ([this.state.usuario, this.state.contrasena]) ;
 await this.props.buscadorUsuarios(datosLoginUC);
 const {LoginDatos} = this.props;
 if (LoginDatos[0] === false){
   
  this.setState({alerta: true})
      
}

if (LoginDatos.length !== 0 ){
  if (LoginDatos[0] !== false){
   
   

  this.props.history.goBack();
 
  
}

   }
}


toggle(){
 this.setState({alerta: false})


}
    render() { 
 
    
        return (
      
         
          
            <Fragment>
           
            <AppBar/>
            <Alert color="danger" isOpen={this.state.alerta} toggle={this.toggle.bind(this)}>Datos Incorrectos</Alert>
          
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
            <div className="modal-content"  id="modal-content">
      
              <div className="col-12 forgot1"> 
              <h5>¿No tienes una cuenta? <a id="Registrate" href="#"  onClick={this.redireccionar} >Regístrate</a></h5>
              
              
          </div>
      
            </div>
          </div>
        </div>
      
      
      
        <Footer />
            </Fragment>
            )
    }
    
}


const mapDispatchToProps = {

  buscadorUsuarios,
};
const mapStateToProps = (state) => {
  return {
   
    LoginDatos: state.LoginDatos,


  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Login);

