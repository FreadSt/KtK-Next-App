import React from 'react';
import {Body} from '../Components/body/Body';
import {Footer} from '../Components/footer/Footer'
import "../styles/Home.module.scss"

const App: React.FC = () =>  {
  return (
    <div className="App">
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;