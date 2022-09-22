import React from 'react';
import { BrowserRouter , Route , Routes} from 'react-router-dom';
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
        <Route path='/' element={ <UTNMain/> }/>
        <Route path='/Calendario' element={ <Calendario/> }/>
        <Route path='/UTN/Estadistica' element={ <Estadistica/> }/>
        <Route path='/UTN/Laboratorio' element={ <Laboratorio/> }/>
        <Route path='/UTN/Programacion' element={ <Programacion/> }/>
        <Route path='/UTN/Metodologia' element={ <Metodologia/> }/>
        <Route path='/UTN/Ingles' element={ <Ingles/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
