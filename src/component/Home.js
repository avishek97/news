import React, { Component } from 'react';
import CountryChooserList from "./CountryChooserList";
import NewsFeed from "./NewsFeed";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import store from '../index';
import xyz from './function';
//import Time from "./Time"
//import { DESTRUCTION } from 'dns';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={//feed:[],
            name:"",
            loaded:true}
    }
    handleClick=(event)=>{
        this.setState({loaded:false})
        const a=event.target.getAttribute("label");
        
        this.props.xyz(a)

    }
    
    render(){
        return(
            <div>
            <div>

            </div>
                
                
                <CountryChooserList fun={this.handleClick} ></CountryChooserList>
                <div className="col-md-12 col-sm-12">
           <img
             style={this.state.loaded ? { display: "none" } : {}}
             width="200"
             src="https://file.mockplus.com/image/2018/09/3ae54b3f-6513-4664-8a8a-d14f37099fb3.gif"

           />
         </div>
                <NewsFeed newn={this.props.feed}/>
            </div>
        )
    }
}
const mapDispatchToProps=(Dispatch)=>{
    return bindActionCreators({xyz},Dispatch)
}
const mapStateToProps=(state)=>{
  return {feed:state.arr}
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
