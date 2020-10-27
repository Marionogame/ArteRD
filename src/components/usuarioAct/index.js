import React, {Component} from 'react';
import {Page} from './page';
import {datosActRegister} from './page';
import Axios from 'axios';
import { connect } from 'react-redux';
import {datosLogiOnlineEntrada} from '../../redux/actions/datosLoginEnlinea';



class UsuarioAct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            SoloNumero: []
        };
        this.registrarDatos = this.registrarDatos.bind(this)
    
}

async registrarDatos()
			{
                const {datosLoginOnline} = this.props;
              
           if (datosActRegister !== "incorrecto") {
            
                const NombreImagen= {
                    nombre: datosActRegister[0],
                    apellido: datosActRegister[1],
                    nombre_usuario: datosActRegister[2],
                    contrasena: datosActRegister[4],
                    edad: datosActRegister[7],
                    genero: datosActRegister[8],
                    numero: datosActRegister[6],
                    redes1: datosActRegister[9],
                    redes2: datosActRegister[10],
                    redes3: datosActRegister[11]
                }
                   
                 await Axios.put(`http://localhost:3000/usuario/${datosLoginOnline[0].id}`,  NombreImagen)
                 .then(response => response.data)
                 .catch((error) => { console.log(error);
                   throw error.response.data
                 })

              
             
              //actualizando datosLoginOnline  
        
              var datosLoginOnlineActualizadoSubir = [0] 
              datosLoginOnlineActualizadoSubir[0] =  datosLoginOnline[0];
              datosLoginOnlineActualizadoSubir[0].nombre = datosActRegister[0];
              datosLoginOnlineActualizadoSubir[0].apellido = datosActRegister[1];
              datosLoginOnlineActualizadoSubir[0].nombre_usuario = datosActRegister[2];
              datosLoginOnlineActualizadoSubir[0].contrasena = datosActRegister[4];
              datosLoginOnlineActualizadoSubir[0].edad = datosActRegister[7];
              datosLoginOnlineActualizadoSubir[0].genero = datosActRegister[8];
              datosLoginOnlineActualizadoSubir[0].numero = datosActRegister[6];
              datosLoginOnlineActualizadoSubir[0].correo = datosLoginOnline[0].correo;
              datosLoginOnlineActualizadoSubir[0].redes1 = datosActRegister[9];
              datosLoginOnlineActualizadoSubir[0].redes2 = datosActRegister[10];
              datosLoginOnlineActualizadoSubir[0].redes3 = datosActRegister[11];
             await this.props.datosLogiOnlineEntrada(datosLoginOnlineActualizadoSubir);
            
            }
              
          
                
               }
			
    render() {
        const {SoloNumero} = this.state;
        const {datosLoginOnline} = this.props;
        if (datosLoginOnline.length === 0 ){
            return "cargando"
           }
        return (
     
          
               
            <Page 
            registrarDatos={this.registrarDatos}
            SoloNumero={SoloNumero}
            datosLoginOnline={datosLoginOnline}
            />
           
            )
    }
}

const mapStateToProps = (state) => {
    return {
  
        datosLoginOnline: state.datosLoginOnline,

    };
};
const mapDispatchToProps = {


    datosLogiOnlineEntrada,
};

export default connect(mapStateToProps,mapDispatchToProps)(UsuarioAct);