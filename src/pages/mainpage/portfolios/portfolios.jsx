import './portfolios.css';
import House from './folios/housedata.js'
import Houseitem from './houseitem'
import React, {Component} from 'react';

class Portfolios extends Component {

    constructor(){
      super();
      this.state = {
          
        }
      }
    
    CardList = () => {
        const cardComponent = House.houses.map((house,i) =>{
            return (
            <Houseitem
            key={i}
            id={House.houses.[i].id}
            name={House.houses.[i].name} 
            address={House.houses.[i].address}
            traffic={House.houses.[i].traffic}
            img={House.houses.[i].img}/> 
            )
        })

        return (
        <div className="cardlist">
            {cardComponent}
        </div>
        );
    }

    render(){
      return (
        <div className="portfolios" id="portfolios">
          <div className="portfolios-content">
            <div className="portfolios-title">
              <h2>物件紹介</h2>
            </div>
            {/* <div>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div> */}
          </div>

          {this.CardList()}
        </div>
    );
  }
  }
  
  export default Portfolios;