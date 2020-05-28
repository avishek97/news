import React, { Component } from 'react';
class CountryChooser extends Component{
    
    render(){
        return(
            <div >
                <button label={this.props.abc} onClick={this.props.xyz} >{this.props.abc1}</button>
            </div>
        )
    }
}
export default CountryChooser;