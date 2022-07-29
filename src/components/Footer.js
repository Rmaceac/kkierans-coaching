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
      </section>
    </div>
  )
}

export default Footer;