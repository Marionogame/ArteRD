import React, { Fragment } from 'react';
import ojosNoticia from '../../img/ojosNoticia.jpg';
import ArtistaPintando from '../../img/ArtistaPintando.jpg';
import AppBar from '../appBar';
import './style.css';
import Footer from '../footer';
function Page(props) {
    const {
        goTo, 
    } = props;

    return (
        <Fragment>
            <AppBar />

           <div className="container col-md-8 ">
           <div className="col-md-12 text-center" >
           <div className="row">
           <div className="col-md-3" ><div/>
           </div>
              <div className="col-md-6" >
           <h1 className="display-4 " id="modulo">MODULOS</h1></div>
           
           </div>
           </div>
        <div className="row">
          <div className="col-md-6">
          <div className="card  text-center" id="CardCuerpo" >
          <h1 className="card-text font-weight-light" >Noticias RD</h1>
  
  <img className="card-img-top " src={ojosNoticia} id="img" alt="Card image cap"/>
   </div> 
    </div>  
   
  
          <div className="col-md-6">
          <div className="card  text-center"  id="CardCuerpo" onClick={() => goTo('/descubrir')}>
          <h1 className="card-text font-weight-light" >Descubre</h1>
  
  <img className="card-img-top " src={ArtistaPintando} id="img" alt="Card image cap"/>
   </div> 
   
   </div> 
   </div> 
   </div> 
   

      <Footer />
        </Fragment>
        
    );
}

export default Page;
