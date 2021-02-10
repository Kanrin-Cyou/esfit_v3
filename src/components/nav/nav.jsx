import React, { Component }from 'react';
import './nav.css';
import Navlist from './navlist';
import Logo from './logo.png';
import {Link} from 'react-scroll';

class Nav extends Component {
    constructor(){
      super();
      this.state = {
          navstate:false
        }
      }

    handleClick = () => {
        this.setState({navstate:!this.state.navstate})
    };

    render(){
        if(this.state.navstate){
            return(
                <div className="nav-list-fold" id="nav-list-fold">
                    <div className="menu" id="menu">
                        <div className="logo">
                            <div className="logoimg"><img src={Logo} alt="img"/></div>
                            <div className="logoname">エス・フィット株式会社</div>
                            <div className="logoname-alternative">ESFIT</div>
                        </div>
                        <div className="nav-list-mini">
                            <Navlist handleClick={this.handleClick} navstate={this.state.navstate}/>
                        </div>
                    </div>
                    
                    <nav className="overlay" id="overlay">
                        <ul>
                            <li id="nav-1" ><Link to="hero" smooth={true} duration={1000} onClick={()=>this.handleClick()}><h1>トップ</h1></Link></li>
                            <li id="nav-2" ><Link to="about" smooth={true} duration={1000} onClick={()=>this.handleClick()}><h1>御挨拶</h1></Link></li>
                            <li id="nav-3" ><Link to="features" smooth={true} duration={1000} onClick={()=>this.handleClick()}><h1>特徴</h1></Link></li>
                            <li id="nav-4" ><Link to="portfolios" smooth={true} duration={1000} onClick={()=>this.handleClick()}><h1>物件紹介</h1></Link></li>
                            <li id="nav-5" ><Link to="info" smooth={true} duration={1000} onClick={()=>this.handleClick()}><h1>会社概要</h1></Link></li>
                            <li id="nav-6" ><Link to="contact" smooth={true} duration={1000} onClick={()=>this.handleClick()}><h1>連絡先</h1></Link></li>
                        </ul>
                    </nav> 
                </div>
        );
        } else {
            return(
                <div className="menu" id="menu">
                    <div className="logo">
                        <div className="logoimg"><img src={Logo} alt="img"/></div>
                        <div className="logoname">エス・フィット株式会社</div>
                        <div className="logoname-alternative">ESFIT</div>
                    </div>
                    <div className="nav-list" id="nav-list">
                        <ul>
                            <li id="nav-1"><Link to="hero" smooth={true} duration={1000}>トップ</Link></li>
                            <li id="nav-2"><Link to="about" smooth={true} duration={1000}>御挨拶</Link></li>
                            <li id="nav-3"><Link to="features" smooth={true} duration={1000}>特徴</Link></li>
                            <li id="nav-4"><Link to="portfolios" smooth={true} duration={1000}>物件紹介</Link></li>
                            <li id="nav-5"><Link to="info" smooth={true} duration={1000}>会社概要</Link></li>
                            <li id="nav-6"><Link to="contact" smooth={true} duration={1000}>連絡先</Link></li>
                        </ul>
                    </div>
                    <div className="nav-list-mini">
                        <Navlist handleClick={this.handleClick} navstate={this.state.navstate}/>
                    </div>
                </div>
            )
        };
    } 
}

export default Nav;