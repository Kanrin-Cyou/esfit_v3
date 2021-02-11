import React, { Component }from 'react';
import './App.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import Nav from './components/nav/nav';
import Mainpage from './pages/mainpage/mainpage';
import PortfolioDetail from './pages/portfolioDetail/portfolioDetail';

class App extends Component {

  constructor(){
    super();
    this.state = {
      route:"main",
      portfolio:1
      }
    }

  componentDidMount(){
    AOS.init({
      duration: 1000
    });
  }

  routeChangeToPortfolio = (detail) => {
    this.setState({route:"portfolio",portfolio:detail})
  };

  render(){
    if (this.state.route === "portfolio"){
      return(
        <div className="App">
          <Nav/>
          <PortfolioDetail detail = {this.state.portfolio}/>
          </div>
      )
    } else {
    return (
        <div className="App">
          <Nav/>
          <Mainpage routeChange={this.routeChangeToPortfolio}/>
        </div>
  );}
}
}

export default App;
