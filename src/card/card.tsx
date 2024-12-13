import './card.scss';
import { BlogItem} from '../blog';
import { useState } from 'react';
import BasicModal from '../modal/modal';
import { useDispatch } from 'react-redux';
import { setData } from '../store/modalSlice';


function Card(props: {post: BlogItem}) {
  const dispatch = useDispatch();

  const handleSaveDate = (data: BlogItem) => {
    dispatch(setData(data));
  };
  
  const [open, setOpen] = useState(false);
  const handleOpen = (data: BlogItem) => {
    handleSaveDate(data)
    setOpen(true)
  };
  const handleClose = () => setOpen(false);
 return (
  <>
    <BasicModal
        open={open}
        close={handleClose}
    />
    <div className='card' style={{ backgroundImage: `url(${props.post.url})`, backgroundSize: 'cover' }} onClick={() => handleOpen(props.post)}>
      <div className='title'>
        <h2>{props.post.title}</h2>
        <h6>{`Статья  ${props.post.article} УК РБ`}</h6>
        <p >Подробнее</p>
      </div>
    </div>
  </>
 )
}

export default Card