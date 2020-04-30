import React, {Component} from 'react';

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

    _renderCurrencies (){
        const { bpi } = this.state;
        const currencies = Object.keys(bpi);
    return currencies.map((c, i) => (
            <div key={i}>
                <span>1 BitCoin = {bpi[c].rate} {c}</span>
            </div>
            )
        )
    }
    
    render() {
    return (
        <div>
            {this._renderCurrencies()}
        </div>
        )
    }
} 

export default ReactExample;