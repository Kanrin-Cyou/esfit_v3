import React, { Component }from 'react';
import './nav.css';
import Navlist from './navlist';
import Logo from './logo.png';
import {Link} from 'react-scroll';

class Nav extends Component {
    constructor(){
      super();
      this.state = {
          display:"none",
          isOpen:false
        }
      }

    handleClick = (command) => {
        if(command){
            this.setState({display:"none",isOpen:!this.state.isOpen})
        } else {
            this.setState({display:null,isOpen:!this.state.isOpen})  
        }
    };

    changeSlide = (i) => {
        if(this.state.display === "none" && !this.state.isOpen) {
            return("slide-out-"+i)
        } else if(this.state.display === null && this.state.isOpen) {
            return("slide-in-"+i)
        } else {
            return(null)
        }
    }

    changeOverlay = () => {
        if(this.state.display === "none" && !this.state.isOpen) {
            return("overlay overlay-slide-left")
        } else if(this.state.display === null && this.state.isOpen) {
            return("overlay overlay-slide-right")
        } else {
            return("overlay")
        }
    }

    showNav = () => {
          return(
                <nav>
                    <ul>
                        <li className={this.changeSlide(1)} id="nav-1" ><Link to="hero" smooth={true} duration={1000} onClick={()=>this.handleClick(true)}>トップ</Link></li>
                        <li className={this.changeSlide(2)} id="nav-2" ><Link to="about" smooth={true} duration={1000} onClick={()=>this.handleClick(true)}>御挨拶</Link></li>
                        <li className={this.changeSlide(3)} id="nav-3" ><Link to="features" smooth={true} duration={1000} onClick={()=>this.handleClick(true)}>特徴</Link></li>
                        <li className={this.changeSlide(4)} id="nav-4" ><Link to="portfolios" smooth={true} duration={1000} onClick={()=>this.handleClick(true)}>物件紹介</Link></li>
                        <li className={this.changeSlide(5)} id="nav-5" ><Link to="info" smooth={true} duration={1000} onClick={()=>this.handleClick(true)}>会社概要</Link></li>
                        <li className={this.changeSlide(6)} id="nav-6" ><Link to="contact" smooth={true} duration={1000} onClick={()=>this.handleClick(true)}>連絡先</Link></li>
                    </ul>
                </nav>
            )
      }

    render(){
            return(
                <div className="menu" id="menu">
                    <div className="logo">
                        <div className="logoimg"><img src={Logo} alt="img"/></div>
                        <div className="logoname">エス・フィット株式会社</div>
                        <div className="logoname-alternative">エス・フィット株式会社</div>
                    </div>
                    <div className={this.changeOverlay()} id="overlay">
                        {this.showNav()}
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
                        <Navlist handleClick={this.handleClick} display={this.state.display}/>
                    </div>
                </div>
            )
        };
    } 

export default Nav;

// style={{display:this.state.display}}