import './hero.css';
import pic1 from './hero-img.svg'
import {Link} from 'react-scroll';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-container" data-aos="zoom-in" data-aos-delay="150">
                <div className="hero-title">
                    <h1>エス・フィット株式会社</h1>
                    <h4>不動産価値の最大化を目指しています</h4>
                </div>
                <Link className="button" to="about" smooth={true} duration={1000}>
                    <div className="button-a">スタート</div>
                </Link>
                <img src={pic1} className="img-fluid hero-img" alt="" data-aos="zoom-in" data-aos-delay="300"/>
            </div>
        </section>
    );
}

export default Hero;