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
              <div className="pf-button"><p>{this.houseData.structureType}</p></div>
              <h2>{this.houseData.name}</h2>
          </div>

          <div className="portfoiliocontent">
              <div className="carousel">
                <AwesomeSlider bullets={false}>
                  <div className="detailimg"><img src={this.houseData.img} alt="img1"/></div>
                  <div className="detailimg"><img src={this.houseData.img2} alt="img2"/></div>
                  <div className="detailimg"><img src={this.houseData.img3} alt="img3"/></div>
                </AwesomeSlider>
              </div>
                <div className="housedetail">
                  <ul>
                    <ul>
                      <li className='houselist listtitle'><p>所在地:</p></li>
                      <li className='houselist'><p>{this.houseData.address}</p></li>
                    </ul>
                    <ul>
                      <li className='houselist listtitle'><p>最寄駅:</p></li>
                      <li className='houselist'><p>{this.houseData.traffic}</p></li>
                    </ul>
                    <ul>
                      <li className='houselist listtitle'><p>間取:</p></li>
                      <li className='houselist'><p>{this.houseData.style}</p></li>
                    </ul>
                    <ul>
                      <li className='houselist listtitle'><p>面積:</p></li>
                      <li className='houselist'><p>{this.houseData.area}</p></li>
                    </ul>
                    <ul>
                      <li className='houselist listtitle'><p>築年数:</p></li>
                      <li className='houselist'><p>{this.houseData.finishedDate}</p></li>
                    </ul>
                    <ul>
                      <li className='houselist listtitle'><p>賃料:</p></li>
                      <li className='houselist'><p>{this.houseData.rental}</p></li>
                    </ul>
                    <ul>
                      <li className='houselist listtitle'><p>管理費:</p></li>
                      <li className='houselist'><p>{this.houseData.maintenance}</p></li>
                    </ul>
                    <ul>
                      <li className='houselist listtitle'><p>敷金/礼金:</p></li>
                      <li className='houselist'><p>{this.houseData.otherfee}</p></li>
                    </ul>
                  </ul>
                </div>
          </div>
        </div>
    );}
  }
  
  export default PortfolioDetail;
