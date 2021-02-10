import React, { Component }from 'react';
import './navlist.css';

class Navlist extends Component {
    constructor(props){
      super(props);
      this.state = {
        }
      }

    render(){
        if(this.props.navstate){
            return(
                <div className="menu-bars change" id="menu-bars" onClick={()=>this.props.handleClick()}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            )
        } else {
            return(
                <div className="menu-bars" id="menu-bars" onClick={()=>this.props.handleClick()}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            )
        };
    }
}

export default Navlist;
