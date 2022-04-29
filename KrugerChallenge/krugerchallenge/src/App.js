import Navbar from './components/navbar/NavBar';
import Administrator from './components/administrator/Administrator';
import { Container, Title } from './App.style';
import Employee from './components/employee/Employee';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Container>
        <Title>Inventario de vacunación de empleados</Title>
        <Administrator/>
        <Employee/>
      </Container>
    </div>
  );
}

export default App;
