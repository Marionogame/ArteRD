import React, { Fragment } from 'react';

import AppBar from '../appBar';
import {MenuV} from './menuV';
import './style.css';
import Footer from '../footer';

function Page(props) {
   const {
      buscarImagen,
      handleClick,
      categoria,
      buscarDatosImagen,
  } = props;

  var nombre = buscarDatosImagen[0];
  var precio = buscarDatosImagen[1];
  var usuario = buscarDatosImagen[2];
  var contador = -1;

    return (
        <Fragment>
            <AppBar />
            
            <div className="container col-md-11" id="containerP">
            <div className="row"> 
            <div className="col-md-2" >
            <MenuV handleClick={handleClick}
            categoria={categoria}
            />
            </div>
           <div className="col-md-10" id="fondoC" >

   <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="#">Categoría</a></li>
        <li className="breadcrumb-item active">Cuadros Originales</li>
    </ol>
    </nav>
          <div className="containder " id="fondoT">
           <h2>Cuadros Originales</h2>
           <p id="textFT">Cuadros originales en venta, piezas únicas por talentosos artistas de hoy en día. Encuentra cuadros auténticos pintados al óleo, cuadros abstractos, paisajes y más. Compra cuadros directamente al autor y apoya a artistas independientes de todo el mundo.</p>
           </div>
           <nav aria-label="Page navigation example">
              
  <ul className="pagination justify-content-start">
    <li className="page-item disabled">
      <a className="page-link" href="#" tabindex="-1"  id="pagItem">Previous</a>
    </li>
    <li className="page-item" ><a className="page-link" href="#"  id="pagItem">1</a></li>
    <li className="page-item"><a className="page-link" href="#"  id="pagItem">2</a></li>
    <li className="page-item" ><a className="page-link" href="#"  id="pagItem">3</a></li>
    <li className="page-item" >
      <a className="page-link" href="#"  id="pagItem">Next</a>
    </li>
  </ul>
</nav>
           <div className="card-columns"> 
           <div > {buscarImagen.map(buscarImagen => 
            
  <div className="card"  id="transicion" >
    <img className="card-img-top embed-responsive-item" key={buscarImagen} src={buscarImagen} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{nombre[contador=contador+1]} </h5>
      <h5 className="card-title" id="nombreCard">{usuario[contador]} </h5>
      <p className="card-title text-success">{precio[contador]} </p>
    </div>
  </div>
  




) }</div>     </div>
               

</div></div></div>
      <Footer />
        </Fragment>
        
    );
}

export default Page;
/* 
   <div className="row d-flex align-items-center">
      <div className="col-1 d-flex align-items-center justify-content-center">
         <a href="#carouselExampleIndicators" role="button" data-slide="prev">
            <div className="carousel-nav-icon">
            <div id='iconNav'><FontAwesomeIcon icon={faChevronLeft}/></div>
            </div>
         </a>
      </div>
      <div className="col-10">
        
         <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="row">
                  <div className="col-12 col-md d-flex align-items-center justify-content-center">
                     <img className="card-img-top"  id="imagen" src={buscarImagen[1]} />
                     </div>
                     <div className="col-12 col-md d-flex align-items-center justify-content-center">
                     <img className="card-img-top" id="imagen" src={buscarImagen[2]} />
                     </div>
                     <div className="col-12 col-md d-flex align-items-center justify-content-center">
                     <img className="card-img-top" id="imagen" src={buscarImagen[3]} />
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="row">
                     <div className="col-12 col-md d-flex align-items-center justify-content-center">
                     <img className="card-img-top" id="imagen" src={buscarImagen[4]} />
                     </div>
                     <div className="col-12 col-md d-flex align-items-center justify-content-center">
                     <img className="card-img-top" id="imagen" src={buscarImagen[5]} />
                     </div>
                     <div className="col-12 col-md d-flex align-items-center justify-content-center">
                     <img className="card-img-top" id="imagen" src={buscarImagen[0]} />
                     </div>
                    
                    
                  </div>
                  
               </div>
               <div > {buscarImagen.map(buscarImagen => 
                <div className="carousel-item">
                  <div className="row">
                     <div className="col-12 col-md d-flex align-items-center justify-content-center">
                     <img  className="card-img-top" key={buscarImagen} id="imagen" src={buscarImagen} />
                     </div>
                     <div className="col-12 col-md d-flex align-items-center justify-content-center">
                     <img className="card-img-top"  key={buscarImagen} id="imagen" src={buscarImagen} />
                     </div>
                     <div className="col-12 col-md d-flex align-items-center justify-content-center">
                     <img className="card-img-top"  key={buscarImagen} id="imagen" src={buscarImagen} />
                     </div>
                  </div>
                  </div>

               )}</div>
            </div>
         </div>
     
      </div>
      <div className="col-1 d-flex align-items-center justify-content-center"><a  href="#carouselExampleIndicators" data-slide="next">
         <div className="carousel-nav-icon">
         <div id='iconNav'><FontAwesomeIcon icon={faChevronRight}/></div>
         </div>
         </a>
      </div>
   </div> */