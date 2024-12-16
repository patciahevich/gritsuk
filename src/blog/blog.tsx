import Card from '../card/card';
import './blog.scss';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { BlogData } from '../utils/types';

async function getData() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/patciahevich/gritsuk_blog_content/refs/heads/main/glog_content.json');
    return response.json()
  } catch {
    return null
  }
}

function Blog() {

  const [cards, setCards] = useState(6);
  const [isAll, setIsAll] = useState(false);

  const [content, setContent] = useState<BlogData | null>(null);

  useEffect(() => {

    const fetchData = async () => {
      const result = await getData();
      setContent(result);
    };

    fetchData();
  }, [])

  const handleClick = () => {
    if(!content) {
      return
    }
    if(!isAll) {
      let n = cards + 6;

      if (n >= content.length) {
        n = content.length;
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
        content ? 
          content.slice(0, cards).map(item => <Card post={item}/>)
          : 
          <div className="spinner-wrapper">
            <CircularProgress />
        </div>
        }
      </div>
      <div className='more'>
        <button onClick={() => handleClick()}>{isAll ? 'Свернуть' : 'Показать больше'}</button>
      </div>
      
    </section>
  )
}

export default Blog;