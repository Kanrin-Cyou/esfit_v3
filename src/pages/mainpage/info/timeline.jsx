import React, { Component }from 'react';
import './timeline.css';

class Timeline extends Component {

    constructor(){
      super();
      this.state = {
          activeIndex: 0
        }
      }

    contentSwitch() {
        switch(this.state.activeIndex) {
            case 0:
                return(
                <div>                
                    <h2>株式会社橘設立</h2>
                    <p>公売物件・裁判所の競売物件を取得し、不動産賃貸業開始</p>
                </div>);
            case 1:
                return(
                <div>
                    <h2>エス・フィット株式会社に社名変更</h2>
                    <p></p>
                </div>);
            case 2:
                return(
                    <div>                
                        <h2>宅地建物取引業者免許を取得</h2>
                        <p>不動産仲介業務を開始</p>
                    </div>);
            case 3:
                return(<div>                
                        <h2>豊島区の自社オフィスを購入、本店移転</h2>
                        <p>自社物件を増</p>
                        </div>);
            case 4:
                return(<div>
                    <h2>賃貸仲介事業の展開</h2>
                    <p></p>
                    </div>);
            case 5:
                return(<div>
                    <h2>免許番号の更新</h2>
                    <h2>買収業務の展開</h2>
                    <p></p>
                    </div>);
            default:
                return(<div>                
                            <h2>株式会社橘設立</h2>
                            <p>公売物件・裁判所の競売物件を取得し、不動産賃貸業開始</p>
                        </div>)
        }
      }
    
    handleClick = (index) => {
        this.setState({activeIndex: index})
        };

    
    widthChange() {
        let widthLength = (this.state.activeIndex/5)*100
        return {
            width:widthLength+"%"
        }
    }


    render(){
    return (
        <div className="timeline" id="timeline">
            <div className="process-wrapper">
                <div id="progress-bar-container">
                    <ul>
                        <li className={'step active'} onClick={()=>this.handleClick(0)}><div className="step-inner">平成 23 年</div></li>
                        <li className={this.state.activeIndex>0 ? 'step active' : 'step'} onClick={()=>this.handleClick(1)}><div className="step-inner">平成 26 年</div></li>
                        <li className={this.state.activeIndex>1 ? 'step active' : 'step'} onClick={()=>this.handleClick(2)}><div className="step-inner">平成 28 年</div></li>
                        <li className={this.state.activeIndex>2 ? 'step active' : 'step'} onClick={()=>this.handleClick(3)}><div className="step-inner">平成 29 年</div></li>
                        <li className={this.state.activeIndex>3 ? 'step active' : 'step'} onClick={()=>this.handleClick(4)}><div className="step-inner">平成 30 年</div></li>
                        <li className={this.state.activeIndex>4 ? 'step active' : 'step'} onClick={()=>this.handleClick(5)}><div className="step-inner">令和 3 年</div></li>
                    </ul>
                    
                    <div id="line">
                        <div id="line-progress" style={this.widthChange()}></div>
                    </div>

                </div>

                <div id="progress-content-section">
                    <div className="section-content">
                        {this.contentSwitch()}
                    </div>
                </div>
            </div>
    </div>
    );
}
}
export default Timeline;

