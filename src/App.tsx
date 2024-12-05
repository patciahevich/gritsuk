import React from 'react';
import './App.scss';
import Main from './main/main';
import License from './license/license';
import About from './about/about';
import Help from './help/help';
import Salary from './salary/salary';

function App() {
  return (
    <>
    <Main />
    <License/>
    <About/>
    <Help/>
    <Salary/>
    </>
  );
}

export default App;
