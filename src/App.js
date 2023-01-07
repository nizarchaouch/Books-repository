import './App.css';
import './Components/Card.css';
import Main from './Components/Main';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from './Page/About';
import Home from './Page/Home';

function App() {
  return (
    <>
      <Main />
      <Routes>
        <Route path="/" element={<Navigate replace to="/Home" />} />
        <Route path="/Home" element={< Home />} />
        <Route path="/About" element={< About />} />
      </Routes>
    </>
  );
}

export default App;
