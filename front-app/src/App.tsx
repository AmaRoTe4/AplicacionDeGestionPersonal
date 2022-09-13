import React from 'react';
import { BrowserRouter , Route , Routes} from 'react-router-dom';
import Main from './Interfaces/Main';
import UTNMain from './Interfaces/UTN/UTNMain';
import Estadistica from './Interfaces/UTN/Estadistica/Estadistica';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Main/> }/>
        <Route path='/UTN' element={ <UTNMain/> }/>
        <Route path='/UTN/Estadistica' element={ <Estadistica/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
