import './footer.scss';

function Footer() {
  return (
    <footer>
      <div className='links'>
        <a href='https://brka.by/lawyers/gricuk-pavel-vladimirovich/' target='blank'>Белорусская республиканская коллегия адвокатов</a>
        <a href='https://www.advokat.by/advokat/reestr/gritsuk_pavel_vladimirovich/' target='blank'>Минская городская коллегия адвокатов</a>
      </div>

      <div className='info'>
        <h3>Павел Владимирович Грицук</h3>
        <p> адвокат по уголовным делам</p>
        <a target="blank" href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9A%D0%BE%D0%B7%D0%BB%D0%BE%D0%B2%D0%B0+7,+%D0%9C%D0%B8%D0%BD%D1%81%D0%BA/@53.9091574,27.5806109,18z/data=!3m1!4b1!4m5!3m4!1s0x46dbcfbaf945a8d5:0x66b3cc81a171a435!8m2!3d53.9091574!4d27.5817052?hl=ru">г.Минск, ул.Козлова, 7 (ст.м.пл.Победы)</a>
      </div>
    </footer>
  )
}

export default Footer;