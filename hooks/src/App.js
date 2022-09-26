import logo from './logo.svg';
import './App.css';
//import ComponenetA from './components/componenetA';
import React from 'react';
import { DataProvider } from './context/DataContext';
import { Pagina1 } from './components/componente1/Pagina1';
import { Pagina2 } from './components/componente1/Pagina2';
//import {CambiarData} from './components/componente1/CambiarData';


// const dataFixed = {
//   nombre: 'Piero',
//   edad: 4
// }
function App() {

    /* const contactoPrueba = {
        nombre: 'Juan',
        apellido: 'Perez',
        email: 'juan@openbootcamp.com',
        conectado: false
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenetA contacto={contactoPrueba} />
      </header>
    </div>
  ); */

  //const [data, setData] = useState(dataFixed);



  return (
    <DataProvider>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Pagina1 />
        <Pagina2 />
        {/* <CambiarData /> */}
      </header>
    </div>
    </DataProvider>

    // <DataProvider>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Pagina1 data={data}/>
    //     <Pagina2 data={data}/>
    //     <CambiarData setData={setData}/>
    //   </header>
    // </div>
    // </DataProvider>
  )

}

export default App;
