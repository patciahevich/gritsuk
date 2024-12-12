import Card from '../card/card';
import { blogContent} from '../blog';
import './blog.scss';
import { useState } from 'react';

function Blog() {
  const [isMore, setIsMore] = useState(false);

  return (
    <section id='blog'>
      <h2> Блог адвоката</h2>
      <div className={isMore ? 'blog' : "blog active"}>
        {
          blogContent.map(item => <Card post={item}/>)
        }
      </div>
      <div className='more'>
        <button onClick={() => setIsMore(!isMore)}>{isMore ? 'Развернуть' : 'Свернуть'}</button>
      </div>
      
    </section>
  )
}

export default Blog;