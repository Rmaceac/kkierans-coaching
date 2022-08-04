export default function Schedule() {
  
  return (
    <>
      <section className='acuity-block-container'>
        <iframe 
          className='acuity-frame'
          src='https://app.acuityscheduling.com/schedule.php?owner=22654704'
          height='800'
          width='100%'
          frameborder='0'
          title='Schedule Appointment'
          data-iframe-translate=''
        ></iframe>
        <script src='https://embed.acuityscheduling.com/js/embed.js' type='text/javascript'></script>
      </section>
    </>
  );
}
