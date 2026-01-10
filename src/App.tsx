import React from 'react';
import Main from './main/main';
import License from './license/license';
import About from './about/about';
import Help from './help/help';
import Salary from './salary/salary';
import Footer from './footer/footer';
import Blog from './blog/blog';
import Contacts from './contacts/contacts';

function App() {
  return (
    <>
    <Main />
    <License/>
    <About/>
    <Contacts/>
    <Help/>
    <Salary/>
    <Blog/>
    <Footer/>
    </>
  );
}

export default App;
