import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Video from './components/Video';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Video />
      <Routes>
        <Route path="/" exact />
      </Routes>
    </Router>
    </>
  );
}

export default App;
