import React from 'react';
import './houseitem.css';

const Houseitem = (props) =>{
    const{name,address,traffic,rental,area,style,img,id}= props;

        return(

            <div className="card" data-aos="fade-left" data-aos-delay="100">
                <div className="card-image" id='card-image'>
                    <img className='card-images'src={img} alt={`house${id}`} />
                </div>
                <div className="card-text">
                    <h2>{name}</h2>
                    <p>{address}</p>
                    <p>{traffic}</p>
                </div>
                
                <div className="card-stats">
                    <div className="stat">
                        <div className="value">{style}</div>
                    </div>
                    <div className="stat border">
                        <div className="value">{area}<sup>2</sup></div>
                    </div>
                    <div className="stat">
                        <div className="value">{rental}</div>
                    </div>
                </div>
            </div>
        );
}

export default Houseitem;