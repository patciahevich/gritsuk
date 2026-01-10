import { toggleBurger } from '../store/burgerSlice';
import './burger.scss';
import { useDispatch, useSelector } from 'react-redux';

function Burger() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: {burger: {isOpen: boolean}}) => state.burger.isOpen);
  return (
    <div className={isOpen ? 'burger active' : 'burger'} onClick={() => dispatch(toggleBurger())}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default Burger