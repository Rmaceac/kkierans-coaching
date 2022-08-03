import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <div className='footer-container'>
      <section className='footer'>
        <div className='name-logo'>
          <h3>Kat Kierans Coaching</h3>
          <a 
            href="https://www.instagram.com/katkierans/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            >
            <i className="fa-brands fa-instagram black"/>
          </a>
        </div>

        <div className='footer-links'>
          <Link to='/about'>Meet Kat</Link>
          <Link to='/sign-up'>Free Clarity Call</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </section>
    </div>
  )
}

export default Footer;