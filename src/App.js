import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';

function App() {
  const [mostrarFormulario, actualizarMostar] = useState(true)
  
  //Ternario --> condicion ? seMuestra : noseMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostar(!mostrarFormulario)
  }

  return (
    <div>
     <Header />
    {/*mostrarFormulario ? <Formulario /> : <></>*/}
     {mostrarFormulario && <Formulario />}
     <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
