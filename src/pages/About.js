import Video from '../components/Video';
import '../App.css';
import './About.css';

export default function About() {
  return (
    <>
      <Video src='/videos/vid-1.mp4' title='Meet Kat' />
      <section className='section-dark'>
        <div className='heading-container'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          <p>Proin at mauris sit amet neque congue luctus. </p>
        </div>
      </section>
    </>
  )
}
