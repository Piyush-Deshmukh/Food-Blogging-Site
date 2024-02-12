import Logo from '../assets/Logo.png';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6';

const Contact = () => {
  return (
    <section className="contact-section">
        <img src={Logo} alt="logo" />
        <div className="contact-us">
            <h2>Contact Us</h2>
            <div className="contact-us-content">
                <p>
                    Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
                </p>
                <p>example2020@gmail.com</p>
                <p>(904) 443-0343</p>
            </div>
        </div>
        <div className="more">
            <h2>More</h2>
            <div className="website-links">
                <a href="#">About Us</a>
                <a href="#">Products</a>
                <a href="#">Career</a>
                <a href="#">Contact Us</a>
            </div>
        </div>
        <div className="copyright">
            <p>© 2022 Food Truck Example</p>
            <div className='social-links'>
                <FaInstagram />
                <FaTwitter />
                <FaFacebookF />
            </div>
        </div>
    </section>
  )
}
export default Contact