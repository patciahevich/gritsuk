import './networks.scss';

const network = [
  {
    id: 'vider',
    href: 'viber://chat?number=375447345474'
  },
  {
    id: 'facebook',
    href: 'https://www.facebook.com/people/%D0%90%D0%B4%D0%B2%D0%BE%D0%BA%D0%B0%D1%82-%D0%93%D1%80%D0%B8%D1%86%D1%83%D0%BA-%D0%9F%D0%B0%D0%B2%D0%B5%D0%BB/100009078017523'
  },
  {
    id: 'vk',
    href: 'https://vk.com/id6372319'
  },
  {
    id: 'ok',
    href: 'https://ok.ru/profile/166876975513'
  },
  {
    id: 'instagram',
    href: 'https://www.instagram.com/advokatpavel'
  },
  {
    id: 'telegram',
    href: 'https://t.me/advokatminska'
  }
]

function Networks() {
  return (
    <div className='networks'>
    {
      network.map(item => (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a target='blank' href={item.href} id={item.id} className='network' />
      ))
    }
  </div>
  )
}
  
  export default Networks;