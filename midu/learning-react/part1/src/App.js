import './App.css';
import Titulo from './components/Titulo';
import Container from './components/Container';

function App() {
  const contenidoMensaje = 'Hola Mundo desde React';
  return (
    <div className="App">
        <Titulo mensaje= {contenidoMensaje}/>
        <Container color='#8854d6'/>
       
    </div>
  );
}

export default App;
