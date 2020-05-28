import React from "react";
import NewsHeadlines from "./NewsHeadlines";

class NewsFeed extends React.Component{
  
    render(){
        const b=this.props.newn.map((item)=>{
           return <NewsHeadlines headline={item} />
        })
        return(
            
            <div>
               {b}
            </div>
        )
    }
}

export default NewsFeed;