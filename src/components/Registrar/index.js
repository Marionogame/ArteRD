import React, {Component} from 'react';
import Page from './page';
class Registrar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            SoloNumero:""
        };
        this.isNumberKey = this.isNumberKey.bind(this)
    
}

 isNumberKey(e)
			{
                this.setState({ SoloNumero: "e.target.value"});
                console.log(this.state.SoloNumero)
               // if (Number.isInteger(y / x)) {
        
                 //   return 'Fits!';
                 // }
               }
			
    render() {
        const {SoloNumero} = this.state;
        
        return (
     
          
               
            <Page 
            isNumberKey={this.isNumberKey}
            SoloNumero={SoloNumero}
            />
           
            )
    }
}


export default Registrar;
