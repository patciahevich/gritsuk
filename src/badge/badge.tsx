import './badge.scss';

function Badge() {
  return (
    <div className='badge_wrapper'>
      <span className='icon'/>
      <p className='name'> 
        <span> П. В. Грицук</span>
        <span className='small_text'> адвокат по уголовным делам</span>
      </p>
      <p className='badge'>
        <a href='tel:+375447345474'> +375 (44) 734 54 74</a>
        <a href='mailto:advokatminska@mail.ru'> advokatminska@mail.ru</a>
      </p>
  </div>
  )
}

export default Badge