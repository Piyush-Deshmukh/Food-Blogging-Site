import Logo from '../assets/Logo.png';
import HeroImg from '../assets/Hero-Img.png';
import HeroVector from '../assets/Hero-Vector.svg';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content-container">
        <img src={Logo} className='logo' alt="logo" />
        <div className='hero-content'>
          <h1>Discover the <span>Best</span> Food and Drinks</h1>
          <p>
            Naturally made Healthcare Products for the better care & support of your body.
          </p>
          <button className='cta-btn'>
            <a href="#">Explore Now!</a>
          </button>
        </div>
      </div>
      <div className="hero-img-container">
        <img src={HeroImg} className='hero-img' alt="hero image" />
        <img src={HeroVector} className='hero-vector' alt="hero vector image" />
        <button className='btn-contact'>
          <a href="#">Get in Touch</a>
        </button>
      </div>
    </section>
  )
}
export default HeroSection