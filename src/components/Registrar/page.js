import React , {Fragment}  from 'react';
import './style.css';
import AppBar from '../appBar';
import face from '../../img/face.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserTie,faUnlockAlt,faUsers,faLock,faPhoneSquareAlt,faCalendarAlt,faVenusMars,faUserTag,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Footer from '../footer';
function Page(props) {
  const {
    registrarDatos,

} = props;
    return (
      <Fragment>
      <AppBar/>
      
  <div className="container">
    <div className="col-sm-7 main-section">
      <div className="modal-content" id="modal-content">

        <div className="col-12 text-center user-img">
          <img src= {face}/>
          <div id="datosIncorrectos">
          <h4 className="row" >
          (<h4 id="datosIncorrectosRaya">Datos Incorrectos</h4>)
          </h4>
          </div>
        </div>
  
        <div className="col-12 form-input">
        <form>
  <div className="form-row">
    <div className="form-group col-md-6">
    <div className="form-row">
    <span className="icon" id="nombre"><FontAwesomeIcon icon={faUserTie}/></span>
    <h5 id="nombreLarga" className="comentario">(Muy Larga)</h5>
  </div>
      <input type="text" className="form-control" id="inputNombre" placeholder="Nombre Completo"/>
    </div>
    <div className="form-group col-md-6">
    <div className="form-row">
    <span  className="icon" id="apellido"><FontAwesomeIcon icon={faUserTag}/></span>
    <h5 id="apellidoLarga" className="comentario">(Muy Larga)</h5>
  </div>
      <input type="text" className="form-control" id="inputApellido" placeholder="Apellido"/>
    </div>
  </div>
  <div className="form-group">
  <div className="form-row">
  <span  className="icon"  id="usuario"><FontAwesomeIcon icon={faUsers}/></span>
  <h5 id="usuarioLarga" className="comentario">(Muy Larga)</h5>
  </div>
    <input type="text" className="form-control" id="inputUsuario" placeholder="Nombre Usuario"/>
  </div>
  <div className="form-group">
  <span  className="icon"  id="correo"><FontAwesomeIcon icon={faEnvelope}/></span>
    <input type="text" className="form-control" id="inputCorreo" placeholder="Correo Electronico"/>
  </div>
  <div className="form-group">
  <div className="form-row">
  <span  className="icon" id="contrasena"><FontAwesomeIcon icon={faUnlockAlt}/></span>
  <h5 id="contrasenaCorta" className="comentario">(Muy Corta)</h5>
  <h5 id="contrasenaLarga" className="comentario">(Muy Larga)</h5>
  </div>
    <input type="password" className="form-control" id="inputContrasena" placeholder="Contrasena"/>
  </div>
  <div className="form-group">
  <span  className="icon"  id="confirmarContrasena"><FontAwesomeIcon icon={faLock}/></span>
    <input type="password" className="form-control" id="inputConfirmarContrasena" placeholder="Confirmar Contrasena"/>
  </div>
  <div className="form-group">
  <span  className="icon"  id="telefono"><FontAwesomeIcon icon={faPhoneSquareAlt}/></span>
    <input type="text" className="form-control" id="inputTelefono"  placeholder="Telefono (Solo Numero)"/>
  </div>

  

  <span className="icon" id="calendario"><FontAwesomeIcon icon={faCalendarAlt}/></span>
  <div className="form-row">
  <div className="form-group col-md-4">
    
     <h5><label for="inputState" >Dias</label></h5> 
      <select id="inputStateDias" className="form-control">
        <option selected>Dias</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
        <option>15</option>
        <option>16</option>
        <option>17</option>
        <option>18</option>
        <option>19</option>
        <option>20</option>
        <option>21</option>
        <option>22</option>
        <option>23</option>
        <option>24</option>
        <option>25</option>
        <option>26</option>
        <option>27</option>
        <option>28</option>
        <option>29</option>
        <option>30</option>
        <option>31</option>
      </select>
    </div>
    <div className="form-group col-md-4">
    <h5><label for="inputState">Mes</label></h5>
      <select id="inputStateMes" class="form-control">
        <option selected>Mes</option>
        <option>Enero</option>
        <option>Febrero</option>
        <option>Marzo</option>
        <option>Abril</option>
        <option>Mayo</option>
        <option>Junio</option>
        <option>Julio</option>
        <option>Agosto</option>
        <option>Septiembre</option>
        <option>Octubre</option>
        <option>Noviembre</option>
        <option>Diciembre</option>
      </select>
    </div>
    <div className="form-group col-md-4">
    <h5> <label for="inputState">Años</label></h5>
      <select id="inputStateAnos" className="form-control">
        <option selected>Años</option>
        <option>2020</option>
<option>2019</option>
<option>2018</option>
<option>2017</option>
<option>2016</option>
<option>2015</option>
<option>2014</option>
<option>2013</option>
<option>2012</option>
<option>2011</option>
<option>2010</option>
<option>2009</option>
<option>2008</option>
<option>2007</option>
<option>2006</option>
<option>2005</option>
<option>2004</option>
<option>2003</option>
<option>2002</option>
<option>2001</option>
<option>2000</option>
<option>1999</option>
<option>1998</option>
<option>1997</option>
<option>1996</option>
<option>1995</option>
<option>1994</option>
<option>1993</option>
<option>1992</option>
<option>1991</option>
<option>1990</option>
<option>1989</option>
<option>1988</option>
<option>1987</option>
<option>1986</option>
<option>1985</option>
<option>1984</option>
<option>1983</option>
<option>1982</option>
<option>1981</option>
<option>1980</option>
<option>1979</option>
<option>1978</option>
<option>1977</option>
<option>1976</option>
<option>1975</option>
<option>1974</option>
<option>1973</option>
<option>1972</option>
<option>1971</option>
<option>1970</option>
<option>1969</option>
<option>1968</option>
<option>1967</option>
<option>1966</option>
<option>1965</option>
<option>1964</option>
<option>1963</option>
<option>1962</option>
<option>1961</option>
<option>1960</option>
<option>1959</option>
<option>1958</option>
<option>1957</option>
<option>1956</option>
<option>1955</option>
<option>1954</option>
<option>1953</option>
<option>1952</option>
<option>1951</option>
<option>1950</option>
<option>1949</option>
<option>1948</option>
<option>1947</option>
<option>1946</option>
<option>1945</option>
<option>1944</option>
<option>1943</option>
<option>1942</option>
<option>1941</option>
<option>1940</option>
<option>1939</option>
<option>1938</option>
<option>1937</option>
<option>1936</option>
<option>1935</option>
<option>1934</option>
<option>1933</option>
<option>1932</option>
<option>1931</option>
<option>1930</option>
<option>1929</option>
<option>1928</option>
<option>1927</option>
<option>1926</option>
<option>1925</option>
<option>1924</option>
<option>1923</option>
<option>1922</option>
<option>1921</option>
<option>1920</option>
<option>1919</option>
<option>1918</option>
<option>1917</option>
<option>1916</option>
<option>1915</option>
<option>1914</option>
<option>1913</option>
<option>1912</option>
<option>1911</option>
<option>1910</option>
<option>1909</option>
<option>1908</option>
<option>1907</option>
<option>1906</option>

      




      </select>
    </div>
  </div>
  <span  className="icon" id="sexo"><FontAwesomeIcon icon={faVenusMars}/></span>
  <div className="form-group col-12 ">
  <div className="form-check form-check-inline col-md-4">
   
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <h5><label className="form-check-label" for="inlineRadio1">Mujer</label>
  </h5>
</div>
<div className="form-check form-check-inline col-md-4">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <h5><label className="form-check-label" for="inlineRadio2">Hombre</label></h5>
</div>
<div className="form-check form-check-inline  col-md-3">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
  <h5> <label className="form-check-label" for="inlineRadio3">Personalizado</label></h5>
</div>
  </div>

</form>

        </div>
        <div className="col-12 text-center" >
  <button className="btn btn-success btn-lg btn-block"  id="bottomContainer" onClick={  () => {DatosRegistro(); registrarDatos()}}  type="button">Registrarte</button>
  </div>
    
      </div>
    </div>
  </div>

  <Footer />
      </Fragment>
   );
    
}
var datosRegister = []
function DatosRegistro() {
  var ingresar = "correcto";
  //color reiniciar 
 var intro = document.getElementById('nombre');
  intro.style.cssText = 'font-size: 32px; color:#ECE2C6; margin-right: 10px; margin-left: 20px;';
  intro = document.getElementById('apellido');
  intro.style.cssText = 'font-size: 32px; color:#ECE2C6; margin-right: 10px; margin-left: 20px;';
  intro = document.getElementById('usuario');
  intro.style.cssText = 'font-size: 32px; color:#ECE2C6; margin-right: 10px; margin-left: 20px;';
  intro = document.getElementById('correo');
  intro.style.cssText = 'font-size: 32px; color:#ECE2C6; margin-right: 10px; margin-left: 20px;';
  intro = document.getElementById('contrasena');
  intro.style.cssText = 'font-size: 32px; color:#ECE2C6; margin-right: 10px; margin-left: 20px;';
  intro = document.getElementById('calendario');
intro.style.cssText = 'font-size: 32px; color:#ECE2C6; margin-right: 10px; margin-left: 20px;';
intro = document.getElementById('confirmarContrasena');
intro.style.cssText = 'font-size: 32px; color:#ECE2C6; margin-right: 10px; margin-left: 20px;';
intro = document.getElementById('telefono');
intro.style.cssText = 'font-size: 32px; color:#ECE2C6; margin-right: 10px; margin-left: 20px;';
intro = document.getElementById('sexo');
intro.style.cssText = 'font-size: 32px; color:#ECE2C6; margin-right: 10px; margin-left: 20px;';
document.getElementById('contrasenaCorta').style.display="none";
document.getElementById('contrasenaLarga').style.display="none";   
document.getElementById('datosIncorrectos').style.display="none";
//cojer valor datos
  const valor = []
  valor[0] = document.getElementById("inputNombre").value; 
  valor[1] = document.getElementById("inputApellido").value; 
  valor[2] = document.getElementById("inputUsuario").value;
  valor[3] = document.getElementById("inputCorreo").value;  
  valor[4] = document.getElementById("inputContrasena").value; 
  valor[5] = document.getElementById("inputConfirmarContrasena").value; 
  valor[6] = document.getElementById("inputTelefono").value; 
  

  //procedimiendo fecha
  var dias = "";
  var mes = "";
  var anos = "";
  
  dias = document.getElementById("inputStateDias").value; 
  mes = document.getElementById("inputStateMes").value; 
  anos = document.getElementById("inputStateAnos").value; 


  if (mes === "Enero"){
   mes = "1";
}
if (mes === "Febrero"){
  mes = "2";
}
if (mes === "Marzo"){
  mes = "3";
}

if (mes === "Abril"){
  mes = "4";
}

if (mes === "Mayo"){
  mes = "5";
}

if (mes === "Junio"){
  mes = "6";
}

if (mes === "Julio"){
  mes = "7";
}

if (mes === "Agosto"){
  mes = "8";
}

if (mes === "Septiembre"){
  mes = "9";
}

if (mes === "Octubre"){
  mes = "10";
}

if (mes === "Noviembre"){
  mes = "11";
}
if (mes === "Diciembre"){
  mes = "12";
}

if (dias === "Dias" || mes === "Mes" || anos === "Años" ){
   intro = document.getElementById('calendario');
intro.style.cssText = 'font-size: 32px; color:red; margin-right: 10px; margin-left: 20px;';
ingresar = "incorrecto";
}
valor[7] = anos+"/"+mes+"/"+dias;
//nombre
if (valor[0] === "" || valor[0].length > 25){
  intro = document.getElementById('nombre');
  intro.style.cssText = 'font-size: 32px; color:red; margin-right: 10px; margin-left: 20px;';
  ingresar = "incorrecto";
}

if( valor[0].length > 25){
  document.getElementById('nombreLarga').style.display="block";
}

//apellido
if (valor[1] === "" || valor[1].length > 25 ){
  intro = document.getElementById('apellido');
  intro.style.cssText = 'font-size: 32px; color:red; margin-right: 10px; margin-left: 20px;';
  ingresar = "incorrecto";
}
if( valor[1].length > 25){
  document.getElementById('apellidoLarga').style.display="block";
}
//usuario
if (valor[2] === "" || valor[2].length > 15){
  intro = document.getElementById('usuario');
  intro.style.cssText = 'font-size: 32px; color:red; margin-right: 10px; margin-left: 20px;';
  ingresar = "incorrecto";
}
if( valor[2].length > 25){
  document.getElementById('usuarioLarga').style.display="block";
}

//correo
// eslint-disable-next-line no-useless-escape
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

if (reg.test(valor[3]) === false || valor[3].length > 50) {
  intro = document.getElementById('correo');
  intro.style.cssText = 'font-size: 32px; color:red; margin-right: 10px; margin-left: 20px;';
  ingresar = "incorrecto";
}
//contrasena
var espacios = false;
var cont = 0;

while (!espacios && (cont < valor[4].length)) {
  if (valor[4].charAt(cont) === " ")
    espacios = true;
  cont++;
}
   
if (espacios || 7 > valor[4].length || valor[4].length > 30 ) {
  intro = document.getElementById('contrasena');
  intro.style.cssText = 'font-size: 32px; color:red; margin-right: 10px; margin-left: 20px;';
  ingresar = "incorrecto";
  if(7 > valor[4].length){
    document.getElementById('contrasenaCorta').style.display="block";
  }
  if( valor[4].length > 30 ){
    document.getElementById('contrasenaLarga').style.display="block";
  }
}

//confirmar contrasena 
if (valor[4] !== valor[5] ) {
  intro = document.getElementById('confirmarContrasena');
  intro.style.cssText = 'font-size: 32px; color:red; margin-right: 10px; margin-left: 20px;';
  ingresar = "incorrecto";
}
//Telefono
var num = 0;
num = parseInt(valor[6],10);
num = num.toString();

if (valor[6] !== num  || valor[6].length > 15  || valor[6].length < 8 ) {
    intro = document.getElementById('telefono');
    intro.style.cssText = 'font-size: 32px; color:red; margin-right: 10px; margin-left: 20px;';
    ingresar = "incorrecto";

  }
  valor[6] = parseInt(valor[6],10);
//sexo
var mujer = document.getElementById("inlineRadio1").checked;
var hombre = document.getElementById("inlineRadio2").checked;
var otro = document.getElementById("inlineRadio3").checked;

valor[8] = "ninguno"
  if ( mujer === true) {
    valor[8] = "F"

}
 
if ( hombre === true) {
  valor[8] = "M"
}
 
if ( otro === true) {
  valor[8] = "o"
}
if (valor[8] === "ninguno"){
  intro = document.getElementById('sexo');
  intro.style.cssText = 'font-size: 32px; color:red; margin-right: 10px; margin-left: 20px;';
  ingresar = "incorrecto";
}
//mensaje

 


/*
valor[0] = nombre
valor[1] = apellido
valor[2] = usuario
valor[3] = correo
valor[4] = contrasena
valor[5] = confirmar contrasena
valor[6] = telefono
valor[7] = fecha
valor[8] = sexo
*/
//registrar usuario
datosRegister = valor
if (ingresar === "incorrecto"){
  datosRegister = "incorrecto";
  document.getElementById('datosIncorrectos').style.display="block";
  window.scroll(0, 0);
}



return datosRegister;
}


export {Page,datosRegister};
