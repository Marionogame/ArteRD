import React, {Component, Fragment } from 'react';
import Page from './page';
import {connect} from 'react-redux';
import {categoria} from './menuV';
import {buscadorImagen} from '../../redux/actions/buscadorImagen';




class Descubrir extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memes: {},
            categoria: "",

            
        
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
componentDidMount () {
this.props.buscadorImagen("esculturas");
   
}    

handleClick(){
   this.props.buscadorImagen(categoria);
 
 

}

render() {
    const {buscarImagen} = this.props;
    const {buscarDatosImagen} = this.props;
    const {categoria} = this.state;
 
   
           if (buscarImagen.length === 0){
                return "cargando"
             }
         
   
        return (
            <Fragment>
            
            <Page
             buscarImagen={buscarImagen}
             buscarDatosImagen={buscarDatosImagen}
             handleClick={this.handleClick}
             categoria={categoria}
            />
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        buscarImagen: state.buscarImagen,
        buscarDatosImagen: state.buscarImagenDatos,


    };
};
const mapDispatchToProps = {

    buscadorImagen,
};
  

export default connect(mapStateToProps, mapDispatchToProps)(Descubrir);
