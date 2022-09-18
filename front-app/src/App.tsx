import React from 'react';
import { BrowserRouter , Route , Routes} from 'react-router-dom';
import Main from './Interfaces/Main';
import UTNMain from './Interfaces/UTN/UTNMain';
import Calendario from './Interfaces/funciones/Calendario/Calendario'
import Estadistica from './Interfaces/UTN/Estadistica/Estadistica';
import Laboratorio from './Interfaces/UTN/Arquitectura/Arquitectura';
import Metodologia from './Interfaces/UTN/Metodologia/Metodologia';
import Ingles from './Interfaces/UTN/Ingles/Ingles';
import Programacion from './Interfaces/UTN/Programacion/Programacion';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/UTN' element={ <Main/> }/>
        <Route path='/' element={ <UTNMain/> }/>
        <Route path='/Calendario' element={ <Calendario/> }/>
        <Route path='/Estadistica' element={ <Estadistica/> }/>
        <Route path='/Laboratorio' element={ <Laboratorio/> }/>
        <Route path='/Programacion' element={ <Programacion/> }/>
        <Route path='/Metodologia' element={ <Metodologia/> }/>
        <Route path='/Ingles' element={ <Ingles/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
