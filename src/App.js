import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Rodape from './components/Rodape/Rodape';
import Home from './pages/Home/Home';
import Jogadores from './pages/Jogadores/Jogadores';
import Sobre from './pages/Sobre/Sobre';
import Contato from './pages/Contato/Contato';

function App() {
  return (
    <>
      
      <Navbar />

      <main>
        {}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jogadores" element={<Jogadores />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>

      <Rodape />
    </>
  );
}

export default App;
