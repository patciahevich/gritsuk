import './nav.scss';

function Nav() {
  return (
    <nav>
      <a className="nav_link" id="main" href="#main">Главная</a>
      <a className="nav_link" id="about" href="#about">Обо мне</a>
      <a className="nav_link" id="help" href="#help">Виды помощи</a>
      <a className="nav_link" id="salary" href="#salary">Гонорар</a>
      <a className="nav_link" id="blog" href="#blog">Блог</a>
    </nav>
  )
}

export default Nav