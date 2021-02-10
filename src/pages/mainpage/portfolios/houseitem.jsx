import React from 'react';
import './houseitem.css';

const Houseitem = (props) =>{
    const{name,address,traffic,img,id}= props;

        return(
            // <div className='cards'>
            //     <img className='cards-img' src={img} alt={`house${id}`} />
            //     <div>
            //         <h3>{name}</h3>
            //     </div>
            // </div>

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
                    <div className="value">4<sup>m</sup></div>
                    <div className="type">read</div>
                    </div>
                    <div className="stat border">
                    <div className="value">5123</div>
                    <div className="type">views</div>
                    </div>
                    <div className="stat">
                    <div className="value">32</div>
                    <div className="type">comments</div>
                    </div>
                </div>

            </div>
        );
}

export default Houseitem;