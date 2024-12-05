import './license.scss';

const lisenceData = [
  {
    id: 'license',
    title: "Лицензия",
    desc: 'Лицензия на право осуществления адвокатской деятельности № 02240/2638 выдана Министерством юстиции Республики Беларусь'
  },
  {
    id: 'member',
    title: 'Член МГКА',
    desc: 'Гарантия профессионализма, защита на высшем уровне, строгая конфиденциальность и ответственность, подтверждённая статусом.'
  },
  {
    id: 'experience',
    title: 'Опыт',
    desc: 'Многолетняя практика, успешное решение сложных дел, глубокое знание законодательства и уверенность в защите ваших интересов.'
  }
]

function License() {
  return (
    <section className='license'>
      {
        lisenceData.map(item => (
          <div key={item.title} className='clue'>
            <p className='clue_image' id={item.id}/>
            <p className='clue_title'>{item.title}</p>
            <p className='clue_desc'>{item.desc}</p>
          </div>
        ))
      }
    </section>
  )
}

export default License;