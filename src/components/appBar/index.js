import React, {Component} from 'react';
import Page from './page';
import { connect } from 'react-redux';
import findSuggestions from '../../redux/actions/findSuggestions';
import findResults from '../../redux/actions/findResults';
import {imagenPerfilID} from '../../redux/actions/buscadorImagenPerfil';
import { withRouter } from 'react-router-dom';
class IAppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    
    this.onChangeText = this.onChangeText.bind(this);
    this.PerfilDirecional = this.PerfilDirecional.bind(this);
    this.onChangeSelection = this.onChangeSelection.bind(this);
}

PerfilDirecional(){
    const {datosLoginOnline} = this.props;
 this.props.imagenPerfilID(datosLoginOnline[0]);
 this.props.history.push('/perfil');
}

    onChangeText(text){
        this.setState({ text });
        this.props.findSuggestions(text);
    

    }
    onChangeSelection(text){
        this.setState({ text });
        this.props.findResults(text);
        this.props.history.push('/results');
    }


    render() {
        const {text} = this.state;
        const { suggestions} = this.props;
   
        return (
     
          
               
            <Page
          
            text={text}
            suggestions={suggestions}
            onChangeText={this.onChangeText}
            onChangeSelection= {this.onChangeSelection}
            PerfilDirecional= {this.PerfilDirecional}
            goTo={(path) => {
                this.props.history.push(path);
            }}
            />
            )
    }
}
const mapStateToProps = (state) => {
    return {
        suggestions: state.suggestions,
        datosLoginOnline: state.datosLoginOnline,


    };
};


const mapDispatchToProps = { 
   
    findSuggestions,
    findResults,
    imagenPerfilID,
  

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IAppBar));;
