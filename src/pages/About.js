import Video from '../components/Video'
import '../App.css'

export default function About() {
  return (
    <>
      <Video src='/videos/vid-1.mp4' title='Meet Kat' />
      <section className='section-dark'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales eros metus, at convallis orci cursus rhoncus. </p>
        <p>Proin at mauris sit amet neque congue luctus. Maecenas non risus nibh. </p>
      </section>
    </>
  )
}
