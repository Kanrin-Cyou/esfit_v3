import React, { Component }from 'react';
import './App.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import Nav from './components/nav/nav';
import Mainpage from './pages/mainpage/mainpage';

class App extends Component {

  constructor(){
    super();
    this.state = {
      }
    }

  componentDidMount(){
    AOS.init({
      duration: 1500
    });
  }

  render(){
    return (
      <div className="App">
        <Nav/>
        <Mainpage/>
      </div>
  );
}
}

export default App;
