import Card from '../card/card';
import { blogContent} from '../blog';
import './blog.scss';
import { useState } from 'react';

function Blog() {

  const [cards, setCards] = useState(6);
  const [isAll, setIsAll] = useState(false)

  const handleClick = () => {
    if(!isAll) {
      let n = cards + 6;

      if (n >= blogContent.length) {
        n = blogContent.length;
        setIsAll(true)
      }

      setCards(n);
    } else {
      setCards(6)
      setIsAll(false)
    }
   
  }

  return (
    <section id='blog'>
      <h2> Блог адвоката</h2>
      <div className='blog'>
        {
          blogContent.slice(0, cards).map(item => <Card post={item}/>)
        }
      </div>
      <div className='more'>
        <button onClick={() => handleClick()}>{isAll ? 'Свернуть' : 'Показать больше'}</button>
      </div>
      
    </section>
  )
}

export default Blog;