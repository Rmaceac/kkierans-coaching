import './Sign-Up.css';
import Schedule from '../components/Schedule';

export default function SignUp() {
  
  
  return (
    <div className='dark'>
      <section className='section-dark action-header-container'>
        <div className='spacer-block' />
        <h1>Book a Clarity Call</h1>
        <div className='spacer-block' />
        <p>In this free 15 minute chat with Kat, you will get clarity in your journey to overcoming stress and anxiety naturally.</p>
        <div className='spacer-block' />
      </section>

      <Schedule />
    </div>
  );
}
