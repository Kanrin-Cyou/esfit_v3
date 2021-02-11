import './mainpage.css';
import React, {Component} from 'react';
import About from './about/about';
import Hero from './hero/hero';
import Feature from './feature/feature';
import Portfolios from './portfolios/portfolios';
import Info from './info/info';
import Contact from './contact/contact';

class Mainpage extends Component {

    constructor(props){
      super(props);
      this.state = {
        }
      }
  
    render(){
      return (
        <div className="mainpage" id="mainpage">
            <Hero/>
            <About/>
            <Feature/>
            <Portfolios routeChange={this.props.routeChange}/>
            <Info/>
            <Contact/>
        </div>
    );
  }
  }
  
  export default Mainpage;