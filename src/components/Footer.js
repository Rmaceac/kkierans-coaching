import './Footer.css';

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
            <i className="fa-brands fa-instagram"/>
          </a>
        </div>

        <div className='footer-links'>
          <div className='footer-links-left'>
            <h4>Free Clarity Call</h4>
            <h4>Unbound Women's Collective</h4>
            <h4>Contact</h4>
          </div>
          <div className='footer-links-right'>
            <h4>Link 4</h4>
            <h4>Link 5</h4>
            <h4>Link 6</h4>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer;