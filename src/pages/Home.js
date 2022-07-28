import './Home.css';
import Banner from '../components/Banner';

export default function Home() {
  
  const firstBannerHeadings = ["Subconcious Work", "Somatic Healing", "Holistic Health"];

  return (
    <>
      <div className="home-title-container">
        <h1>Unbound & Held</h1>
        <h3>Helping you overcome stress & anxiety, naturally.</h3>
      </div>
      <Banner headings={firstBannerHeadings}/>
    </>

  )
}
