import React from "react";

class Newsheadlines extends React.Component{
    
    render(){
        return(
            <div className="card">
            <div class="row">
              <div className="col-sm-2">
                <img src={this.props.headline.urlToImage} height="80" width="150" />
              </div>
              <div className="col-sm-10 card-body">
                {this.props.headline.title}
                {this.props.headline.description}-{" "}
                <b>{this.props.headline.source.name}</b>
              </div>
            </div>
          </div>
        )
    }
}
export default Newsheadlines;