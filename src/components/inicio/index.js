import React, {Component} from 'react';
import Page from './page';


class Inicio extends Component {
        render() {

      
        return (
            <Page
            goTo={(path) => {
                this.props.history.push(path);
            }}
            />
        );
    }
}


export default Inicio;