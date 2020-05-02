import React, {Component} from 'react';

class ReactExampleView extends Component{

    _renderCurrencies (){
        const { bpi } = this.props;
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

export default ReactExampleView;