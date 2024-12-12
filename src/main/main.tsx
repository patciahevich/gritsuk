import Call from '../call/call';
import Header from '../header/header';
import Hook from '../hook/hook';
import Nav from '../nav/nav';
import './main.scss';

function Main() {
  return (
    <div className='main'>
      <Header/>
      <Nav/>
      <Hook/>
      <Call/>
    </div>
  )
}

export default Main