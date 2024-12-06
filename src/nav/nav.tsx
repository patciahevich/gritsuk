import { useDispatch, useSelector } from 'react-redux';
import './nav.scss';
import { toggleBurger } from '../store/burgerSlice';

function Nav() {
  const isOpen = useSelector((state: {burger: {isOpen: boolean}}) => state.burger.isOpen);
  const dispatch = useDispatch();
  
  return (
    <nav className={isOpen ? 'nav active' : 'nav'} onClick={() => dispatch(toggleBurger())}>
      <a className="nav_link" href="#main">Главная</a>
      <a className="nav_link" href="#about">Обо мне</a>
      <a className="nav_link"  href="#help">Виды помощи</a>
      <a className="nav_link" href="#salary">Гонорар</a>
      <a className="nav_link" href="#blog">Блог</a>
    </nav>
  )
}

export default Nav