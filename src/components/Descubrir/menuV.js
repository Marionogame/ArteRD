import React, { Fragment } from 'react';
import './style.css';

function MenuV(props) {
    const {
        handleClick,
        categoria 
    } = props;
   
    
     
  
    return (
        
        <Fragment>
            
    <div className="container-fluid pt-5px" >
    <div className="row justify-content-center" id="fondoT" >
        <div className="collapse show d-md-flex bg-light " id="sidebar">
            
            <ul className="nav flex-column flex-nowrap overflow-hidden " id="fondoT1">
          
            <li className="nav-item">
            <h2 id='filtro'><h2>Filtro</h2></h2>      </li>
                <li className="nav-item">
                    <a className="nav-link collapsed text-truncate" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><i className="fa fa-table"></i> <span className="d-none d-sm-inline" id="nombreMenV">Categoria</span></a>
                    <div className="collapse" id="submenu1" aria-expanded="false">
                        <ul className="flex-column pl-2 nav">
                            <li className="nav-item"><a className="nav-link py-0" href="#" id="nombre2MenV" onClick={() => {textoCategoria("cuadros");handleClick();}}><span>Cuadros</span></a></li>
                             <li className="nav-item"><a className="nav-link py-0" href="#" id="nombre2MenV" onClick={() => {textoCategoria("dibujos");handleClick();}}><span>Dibujos</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="#" id="nombre2MenV" onClick={() => {textoCategoria("esculturas");handleClick();}}><span>Escultura</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="#" id="nombre2MenV"onClick={() => {textoCategoria("collage");handleClick();}}><span>Collage</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="#" id="nombre2MenV"onClick={() => {textoCategoria("artesanal");handleClick();}}><span>Artesania</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="#" id="nombre2MenV"onClick={() => {textoCategoria("fotografia");handleClick();}}><span>Fotografia</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="#" id="nombre2MenV"onClick={() => {textoCategoria("arte_digital");handleClick();}}><span>Arte Digital</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="#" id="nombre2MenV"onClick={() => {textoCategoria("arte_erotico");handleClick();}}><span>Arte Erotico</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="#" id="nombre2MenV"onClick={() => {textoCategoria("otros");handleClick();}}><span>Otros...</span></a></li>
                        </ul>
                    </div>
                </li>
                    <li className="nav-item">
                    <a className="nav-link collapsed text-truncate" href="#submenu2" data-toggle="collapse" data-target="#submenu2"><i className="fa fa-table"></i> <span className="d-none d-sm-inline" id="nombreMenV">Tematica</span></a>
                    <div className="collapse" id="submenu2" aria-expanded="false">
                        <ul className="flex-column pl-2 nav">
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Abstractos</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Animales</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Arquitectura</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Bodegones</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Botánica</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Cine y Celebridades</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Ciudades</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Cultura</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Deportes</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Desnudos</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Espacios exteriores</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Espiritualidad</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Estaciones del año</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Familia</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Fantasía</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Figuras</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Flores</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Humor</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Interiores</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Mitología clásica</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Moda</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Mortalidad</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Música y baile</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Niños</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Otros</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Paisajes</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Religión</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Retratos</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Surrealismo</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Tebeos, cómics, dibujos, animados</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Tipografía</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Transportes</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Viajes</span></a></li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item"><a className="nav-link text-truncate" href="/" id="nombreMenV"><i className="fa fa-download"></i> <span className="d-none d-sm-inline">Precio $RD</span></a></li>
                <li className="nav-item">
                    <a className="nav-link collapsed text-truncate" href="#submenu3" data-toggle="collapse" data-target="#submenu3"><i className="fa fa-table"></i> <span className="d-none d-sm-inline" id="nombreMenV">Estilos</span></a>
                    <div className="collapse" id="submenu3" aria-expanded="false">
                        <ul className="flex-column pl-2 nav">
                        <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Dibujos</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Escultura</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Collage</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Artesania</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Fotografia</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Arte Digital</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Arte Erotico</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Otros...</span></a></li>
                            <li className="nav-item">
                                
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link collapsed text-truncate" href="#submenu4" data-toggle="collapse" data-target="#submenu4"><i className="fa fa-table"></i> <span className="d-none d-sm-inline" id="nombreMenV">Tecnica</span></a>
                    <div className="collapse" id="submenu4" aria-expanded="false">
                        <ul className="flex-column pl-2 nav">
                        <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Dibujos</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Escultura</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Collage</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Artesania</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Fotografia</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Arte Digital</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Arte Erotico</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Otros...</span></a></li>
                            <li className="nav-item">
                                
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link collapsed text-truncate" href="#submenu5" data-toggle="collapse" data-target="#submenu5"><i className="fa fa-table"></i> <span className="d-none d-sm-inline" id="nombreMenV">Soporte</span></a>
                    <div className="collapse" id="submenu5" aria-expanded="false">
                        <ul className="flex-column pl-2 nav">
                        <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Dibujos</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Escultura</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Collage</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Artesania</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Fotografia</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Arte Digital</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Arte Erotico</span></a></li>
                            <li className="nav-item"><a className="nav-link py-0" href="/" id="nombre2MenV"><span>Otros...</span></a></li>
                            <li className="nav-item">
                                
                            </li>
                        </ul>
                    </div>
                </li>
               
                   </ul>
        </div>
    </div>
</div>
  

        </Fragment>
    );
}


var categoria = "l";

function textoCategoria(valor) {
    
    

    console.log('The link was clicked.');
    
        console.log(valor);
       categoria = valor;
       return  categoria;
   
  }

export {MenuV,categoria};

