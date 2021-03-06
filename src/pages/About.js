import '../App.css';
import './About.css';
import Video from '../components/Video';
import Button from '../components/Button';
import QualificationsList from '../components/QualificationsList';
import Slide from 'react-reveal/Slide';
import Pulse from 'react-reveal/Pulse';

export default function About() {
  return (
    <>
      <Video src='/videos/vid-1.mp4' title='Meet Kat' />
      <div className='dark'>
        <section className='section-dark'>
          <div className='heading-container'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <p>Proin at mauris sit amet neque congue luctus. </p>
            <Pulse
              forever={true}

            >
              <i class="fa-solid fa-chevron-down"></i>
            </Pulse>
          </div>
        </section>

        <section className='dark'>

          <section className='section-dark long row'>
            <Slide left fraction={0.1}>
              <div className='text-container'>
                <h5>To Be Unbound Creator</h5>
                <p className='text-large'>Kat is wildly passionate about helping humans feel at home in their bodies, guiding them back to their authentic selves & living life from joy instead of fear. </p>
                <div className='spacer-block--small' />
                <p>She’s known for gifting you new perspectives (from victim to Unbound) and helping you not only shift out of limiting beliefs, but up-level to the person of your own dreams.  </p>
                <div className='spacer-block--small' />
                <p>As an expert in communication & somatic healing Kat helps her clients un-apologetically show up in their power.</p>
                <div className='spacer-block--small' />
                <p>Stress & anxiety no longer run Kat’s life, and her purpose is to ensure it no longer runs yours. </p>
                <div className='spacer-block--small' />
                <p>Kat’s fierce passion for vulnerability and up-levelling vibration is the driving force behind helping her clients bring more of them SELVES into their lives, instead of being guided by fear and the expectations of others. </p>
                <div className='spacer-block--small' />
                <Button 
                  children="Want to work with me? Book your free clarity call."
                  buttonSize='btn--medium'
                  buttonStyle='btn--tertiary'
                  link='/sign-up'
                  />
              </div>
            </Slide>

            <Slide right fraction={0.1}>
              <div className='column-right'>
                <div className='img-container--about'>
                  <img src='/images/img-12.jpg' alt='woman' />
                </div>
              </div>
            </Slide>
          </section>

          <div className='spacer-block' />

          <section className='section-dark row'>
            <Slide left fraction={0.1}>
              <div className='column-left'>
                <div className='img-container--about'>
                  <img src='/images/img-13.jpg' alt='woman2' />
                </div>
              </div>
            </Slide>

            <Slide right fraction={0.1}>
                <div className='text-container'>
                  <h5>Kat Kieran's Qualifications</h5>
                  <h2>Certified Holistic Health Coach</h2>
                  <QualificationsList />
                  <div className='spacer-block--small' />
                  <Button 
                    children="Book your clarity call with Kat now."
                    buttonSize='btn--medium'
                    buttonStyle='btn--tertiary'
                    link='/sign-up'  
                    />
                  <div className='spacer-block--small' />
                </div>
            </Slide>

          </section>
        </section>
      </div>
    </>
  )
}
