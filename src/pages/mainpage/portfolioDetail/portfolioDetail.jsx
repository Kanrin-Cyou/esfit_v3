import './portfolioDetail.css';
import React, {Component} from 'react';

class PortfolioDetail extends Component {

    constructor(props){
      super(props);
      this.state = {
        }
      }
    
    houseData = this.props.detail()

    render(){
      return (
        <div className="portfolioDetail" id="portfolioDetail">
            <button className="goback" onClick={()=>{this.props.routeChange()}}>goBack</button>
            <div className="portfoliocontent">
              <ul>
                <li>{this.houseData.name}</li>
                <li>{this.houseData.address}</li>
                <li>{this.houseData.traffic}</li>
                <li>{this.houseData.style}</li>
                <li>{this.houseData.area}</li>
                <li>{this.houseData.structureType}</li>
                <li>{this.houseData.finishedDate}</li>
                <li>{this.houseData.rental}</li>
                <li>{this.houseData.maintenance}</li>
                <li>{this.houseData.otherfee}</li>
              </ul>
            </div>
            <div className="imgBox" id="imgBox" >
              <img className="houseImg" src={this.houseData.img} alt=""/>
              <img className="houseImg" src={this.houseData.img2} alt=""/>
              <img className="houseImg" src={this.houseData.img3} alt=""/>
            </div>
        </div>
    );
  }
  }
  
  export default PortfolioDetail;