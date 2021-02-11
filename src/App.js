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
      portfolio:null
      }
    }

  componentDidMount(){
    AOS.init({
      duration: 1000
    });
  }

  render(){
    if (this.state.route === "portfolio"){
      return(
        <div className="App">
          <Nav/>
          <PortfolioDetail/>
          </div>
      )
    } else 
    return (
        <div className="App">
          <Nav/>
          <Mainpage/>
        </div>
  );
}
}

export default App;
