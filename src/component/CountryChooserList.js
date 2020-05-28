import React, { Component } from 'react';
import CountryChooser from "./CountryChooser";


class CountryChooserList extends Component{
   
    render(){
        return(
            <div className="row abc">
                <CountryChooser abc="us" abc1="Usa"xyz={this.props.fun}/>
                <CountryChooser abc="in" abc1="India" xyz={this.props.fun}/>
                <CountryChooser abc="au" abc1="Austrila" xyz={this.props.fun}/>
                <CountryChooser abc="ru" abc1="Russia" xyz={this.props.fun}/>
                
            </div>
        )
    }
}
export default CountryChooserList;