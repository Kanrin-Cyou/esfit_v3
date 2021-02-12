import './portfolioDetail.css';
import React, {Component} from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

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

          <div className="close" onClick={()=>{this.props.routeChange()}}/>
          <div className="housetitle">
              <h2>{this.houseData.structureType}</h2>
              <h2>{this.houseData.name}</h2>
          </div>
          <div className="portfoiliocontent">
            <div className="picSlider">
              <AwesomeSlider>
                <div data-src={this.houseData.img}/>
                <div data-src={this.houseData.img2}/>
                <div data-src={this.houseData.img3}/>
              </AwesomeSlider>
            </div>

            <div className="housedetail">
              <ul>
                <li>所在地:{this.houseData.address}</li>
                <li>最寄駅:{this.houseData.traffic}</li>
                <li>間取:{this.houseData.style}</li>
                <li>面積{this.houseData.area}</li>
                <li>築年数:{this.houseData.finishedDate}</li>
                <li>賃料{this.houseData.rental}</li>
                <li>管理費:{this.houseData.maintenance}</li>
                <li>敷金/礼金:{this.houseData.otherfee}</li>
              </ul>
            </div>
          </div>
        </div>
    );
  }
  }
  
  export default PortfolioDetail;