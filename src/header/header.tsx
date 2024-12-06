import Badge from '../badge/badge'
import Networks from '../networks/networks'
import './header.scss'

function Header() {
  return (
    <header>
      <Badge/>
      <Networks/>
    </header>
  )
}

export default Header