const QualificationsList = () => {
  const qualifications = [
    "4+ Years Coaching Experience",
    "Certified Holistic Health Coach (Institute of Integrative Nutrition)",   
    "Basic Principles of Somatic Experiencing Certificate",
    "Trauma-Informed Approach to Practice (Justice Institute of BC)",
    "Regenerating Images In Memory Training (Subconscious reprogramming through Dr. Deb Sandella)",
    "Assertive Communication Training (Justice Institute of BC)",
    "Outdoor Adventure Guide Diploma (Thompson Rivers University 2013)",
    "Bachelors of Interdisciplinary Studies - concentrations in psychology & communication (2018)",
    "City University of Seattle Masters of Counselling (in progress, Class of 2024)"
  ]
  
  return (
    <div className='list-container'>
      <ul className='list'>
        {qualifications.map((q) =>{
          return (
            <li>{q}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default QualificationsList;
