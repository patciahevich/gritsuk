import './contacts.scss';

function Contacts() {
  return (
    <section id='contacts'>
      <h2>Мои контакты</h2>
      <div className='contacts_wrapper'>
        <div className='contacts'>
          <h3>Грицук Павел Владимирович</h3>
          <h4>адвокат по уголовным делам</h4>
          <a href='tel:+375447345474'>
            <div className='icon' id='phone'/>
            <span>+375 (44) 734 54 74</span>
          </a>
          <a href='mailto:advokatminska@mail.ru'>
            <div className='icon' id='mail'/>
            <span>advokatminska@mail.ru</span>
          </a>
          <a target="blank" href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9A%D0%BE%D0%B7%D0%BB%D0%BE%D0%B2%D0%B0+7,+%D0%9C%D0%B8%D0%BD%D1%81%D0%BA/@53.9091574,27.5806109,18z/data=!3m1!4b1!4m5!3m4!1s0x46dbcfbaf945a8d5:0x66b3cc81a171a435!8m2!3d53.9091574!4d27.5817052?hl=ru">
            <div className='icon' id='dest'/>
            <span>г.Минск, ул.Козлова, 7 (ст.м.пл.Победы)</span>
          </a>
          <a target='blank' href='https://www.google.com/search?client=ms-android-samsung-ss&sca_esv=a3aa32e04255f5fb&sxsrf=ADLYWIJJ60D6KNebOnt_9BHEhuGbqZNxcw:1732556409179&q=%25D0%25B0%25D0%25B4%25D0%25B2%25D0%25BE%25D0%25BA%25D0%25B0%25D1%2582+%25D0%25BC%25D0%25B8%25D0%25BD%25D1%2581%25D0%25BA+%25D0%25B3%25D1%2580%25D0%25B8%25D1%2586%25D1%2583%25D0%25BA+%25D0%25BF%25D0%25B0%25D0%25B2%25D0%25B5%25D0%25BB+%25D0%25BE%25D1%2582%25D0%25B7%25D1%258B%25D0%25B2%25D1%258B&uds=ADvngMhez3xMz-vng54td1j8Y0LrHfIGHCcsDmohcubWpP0pu5lkQz1VJL2XlnrCFC3xQfDxI54t9uMe70Reiigs74ph7b1cUcUe4_v2eO5EAkyAFUY5lvcJnL6N2tfpGP7iawFWb33mItyLeRCARtBolOzI1QB7-iJVtFOg2DvO4Yx5gaHiIL9RqklR-zrEE3vQeFvwj9MgrJ_hlBOCmXRzl6vjN5CTD8EsbrJh5m916dnz4RPVzQ8sGTvIdhdPFDkgM7CcV80A7osZ722jDW61PXjjN1GRFSXzHGuPcdW1qek5qNSTpZNyNVG77hWPH2CO3lt_vUwESyJBY00N7iGmX62yW1iLcYQGA8WhjAsrO1cgBNVlOMBfavxeHTOPdPyVEpl-WaYR0pGR2q-qq38O5D4H_AhrdDL2CxxXQq7Co8wDXcoISx9p7COXFqPJZNgPNE5oRGDj&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7opbV2_iYqqWf67ZwkpdxLCBiTT3Vg3qRxUXF_Ar1DrglCIOkubDyHpjdlFAqNefF6E7c7tUSXlMS1LTcUWdY8-UA_yCqJ3sj1SzXHV5OMVmOikdHh7eIGVVPzFR9StzyPSVaOzPvGPIlve9GrV-C9OS475i&sa=X&ved=2ahUKEwiu8cnKg_iJAxW3UVUIHWlrJOAQk8gLegQIHhAB&ictx=1%23ebo=1#ebo=1'>
            <div className='icon' id='feedback'/>
            <span> Отзывы о работе</span>
          </a>
        </div>
        <div className='avatar'/>
      </div>
     
    </section>
  )
}

export default Contacts;