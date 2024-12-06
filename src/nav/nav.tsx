import './nav.scss';

function Nav() {
  return (
    <nav>
      <a className="nav_link" href="#main">Главная</a>
      <a className="nav_link" href="#about">Обо мне</a>
      <a className="nav_link"  href="#help">Виды помощи</a>
      <a className="nav_link" href="#salary">Гонорар</a>
      <a className="nav_link" href="#blog">Блог</a>
    </nav>
  )
}

export default Nav