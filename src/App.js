import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

import Config from './pages/Config';
import Guide from './pages/Guide';
import Game from './pages/Game';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/config" element={<Config />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/Game/:number/:minute/:spy" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
