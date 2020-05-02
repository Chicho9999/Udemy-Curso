import React, {Component} from 'react';
import ReactExampleView from './ReactExampleView';

class ReactExample extends Component{
    state = {bpi:{}}
    componentDidMount =() => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then( res =>  res.json())
        .then( data => {
            const {bpi} = data;
            this.setState({
                bpi
            });
        })
    }
    render() {
    return (
                <ReactExampleView bpi={this.state.bpi}/>
        )
    }
} 

export default ReactExample;