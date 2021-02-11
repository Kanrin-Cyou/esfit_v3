import './mainpage.css';
import React, {Component} from 'react';
import About from './about/about';
import Hero from './hero/hero';
import Feature from './feature/feature';
import Portfolios from './portfolios/portfolios';
import Info from './info/info';
import Contact from './contact/contact';
import PortfolioDetail from './portfolioDetail/portfolioDetail';

class Mainpage extends Component {

    constructor(){
      super();
      this.state = {
        display:"none",
        portfolio:1
        }
      }
    
    routeChangeToPortfolio = (detail) => {
      this.setState({display:null,portfolio:detail})
    };

    routeChangeToMain = () => {
      this.setState({display:"none"})
    };

    showPortfolioDetail = () => {
      if (this.state.display !== "none"){
        return(<PortfolioDetail detail={this.state.portfolio} routeChange={this.routeChangeToMain}/>)
      }
    }

    render(){
        return (
          <div className="mainpage" id="mainpage">
              <Hero/>
              <About/>
              <Feature/>
              <Portfolios routeChange={this.routeChangeToPortfolio}/>
              <div className="portfoliobox" id="portfoliobox" style={{display:this.state.display}}>
                  {this.showPortfolioDetail()}
              </div>
              <Info/>
              <Contact/>
          </div>
      );;
  }
  }
  
  export default Mainpage;
