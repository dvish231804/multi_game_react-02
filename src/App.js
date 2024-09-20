import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Games from './pages/Games';
import Activities from './pages/Activities';
import Accounts from './pages/Accounts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/game" element={<Games/>} />
        <Route path="/activity" element={<Activities/>} />
        <Route path="/account" element={<Accounts/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
