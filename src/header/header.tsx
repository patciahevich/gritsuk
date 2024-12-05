import Contacts from '../contacts/contacts'
import Nav from '../nav/nav'
import './header.scss'

function Header() {
  return (
    <header>
      <Contacts/>
      <Nav/>
    </header>
  )
}

export default Header