import './modal.scss';
import { Modal } from '@mui/material';
import { useSelector } from 'react-redux';
import { BlogItem } from '../utils/types';

type CloseModal = () => void;

function BasicModal(props: {
  open: boolean;
  close?: CloseModal;
}) {
  const data = useSelector((state: {modal: {data: null | BlogItem}}) => state.modal.data);
  return (
    <Modal open={props.open} onClose={props.close} className="modal">
      <div className="pop-up">
      {  data ? (
        <div>
          <div className='title'>
            <div className='img' style={{backgroundImage: `url(${data.url})`}}/>
            <h2>{data.title}</h2>
          </div>
          {
            data.article ? <p className='article'>{`Статья  ${data.article}`}</p> : null
          }
          { data.content.map(item => {
            if(typeof item === 'string') {
              if (item.startsWith("!")) {
                const message = item.slice(1)
                return (<p className='accent'>{message}</p>)
              } 
              if(item.startsWith('P.S')) {
                return (<p className='accent'>{item}</p>)
              } else {
                return (<p>{item}</p>)
              }
            } else {
              return (
                <><h5>{item.title}</h5><ul>
                  {item.clauses && item.clauses.map(clause => <li>{clause}</li>)}
                </ul></>
              )
            }
          })
          }
          <p className='accent'> Будьте бдительны!</p>
        </div>
      ) : null}
     
        <button onClick={props.close} className="close-modal-button" />
      </div>
    </Modal>
  );
}

export default BasicModal;