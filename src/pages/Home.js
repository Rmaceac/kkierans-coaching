import './Home.css';
import Banner from '../components/Banner';
import BlockQuote from '../components/BlockQuote';
import Button from '../components/Button'; 

export default function Home() {
  
  const firstBannerHeadings = ["Subconcious Work", "Somatic Healing", "Holistic Health"];
  const quote1 = "Aliquam erat volutpat. Suspendisse eu scelerisque nisl. Morbi interdum aliquam est, eget viverra augue rhoncus id. Proin feugiat odio nec magna molestie auctor. Ut placerat neque mi, eu finibus quam lacinia eget. Proin rutrum nunc sed diam commodo faucibus. Morbi turpis eros, scelerisque a lorem a, sollicitudin semper ex. Ut metus ipsum, laoreet at sapien ut, mollis molestie enim."
  const author1 = "- Author"

  return (
    <>
      <div className='home-title-container'>
        <h1>Unbound & Held</h1>
        <h3>Helping you overcome stress & anxiety, naturally.</h3>
      </div>

      <div className='spacer-block' />
      <Banner headings={firstBannerHeadings}/>
      <div className='spacer-block' />

      <BlockQuote quote={quote1} author={author1} />
      <div className='btn-container'>
        <Button 
          children='Read more client testimonies...'
          buttonStyle='btn--secondary'
          buttonSize='btn--small'
          link='/testimonies'
        />
      </div>

      <div className='spacer-block'  />

      <section className='home-section'>
        <div className='img-container--home'>
          <img src='/images/img-3.jpg' alt='highlands' />
        </div>
        <div className='text-container'>
          <h1>Come back home to your body.</h1>
          <p>{quote1}</p>
          <div className='btn-container'>
            <Button 
              children="Claim a free clarity call."
              buttonStyle='btn--secondary'
              buttonSize='btn--small'
              link='/sign-up'
              />
          </div>
        </div>
      </section>

      <div className='spacer-block' />

      <section className='home-section'>
        <div className='text-container'>
          <BlockQuote
            className='colored'
            quote={quote1}
            author={author1}
          />
        </div>  
        <div className='img-container--home'>
          <img className='img-small' src='/images/img-4.jpg' alt="hawaii" />
          <div className='spacer-block' />
          <Button 
              children="Read more client testimonials..."
              buttonStyle='btn--secondary'
              buttonSize='btn--small'
              link='/testimonials'
              /> 
        </div>


      </section>
    </>

  )
}
