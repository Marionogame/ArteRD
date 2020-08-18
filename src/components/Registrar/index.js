import React, {Component} from 'react';
import {Page} from './page';
import {datosRegister} from './page';
import Axios from 'axios';
class Registrar extends Component {
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
              if (datosRegister !== "incorrecto") {
                try {
              await  Axios({
                    method:'POST',
                    url:"http://localhost:3000/usuario",
                    data:{
                        nombre: datosRegister[0],
                        apellido: datosRegister[1],
                        nombre_usuario: datosRegister[2],
                        contrasena: datosRegister[4],
                        edad: datosRegister[7],
                        genero: datosRegister[8],
                        numero: datosRegister[6],
                        correo: datosRegister[3]
                    }
                }).then(res => console.log(res.data))
            } catch (error) {
                console.log("(Error registrar ususario)",error);
            }
        

              }
                console.log(datosRegister);
             
               }
			
    render() {
        const {SoloNumero} = this.state;
        
        return (
     
          
               
            <Page 
            registrarDatos={this.registrarDatos}
            SoloNumero={SoloNumero}
            />
           
            )
    }
}


export default Registrar;
