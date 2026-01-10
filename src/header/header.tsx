import Badge from '../badge/badge'
import Burger from '../burger/burger'
import Networks from '../networks/networks'
import './header.scss'

function Header() {
  return (
    <header>
      <Badge/>
      <Networks/>
      <Burger/>
    </header>
  )
}

export default Header