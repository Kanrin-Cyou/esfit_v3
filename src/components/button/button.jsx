import './button.css';
import pic1 from './hero-img.svg'

const Button = () => {
    return (
        <section id="hero" className="hero">
            <div class="hero-container" data-aos="zoom-in" data-aos-delay="150">
                <h1>エス・フィット株式会社</h1>
                <h3>不動産価値の最大化を目指しています</h3>
                <button type="button" class="btn btn-info"><a href="#about" className="">Get Started</a></button>
                <img src={pic1} className="img-fluid hero-img" alt="" data-aos="zoom-in" data-aos-delay="300"/>
            </div>
        </section>
    );
}

export default Button;