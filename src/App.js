import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Video from './components/Video';
import About from './pages/About';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Video />
      <Routes>
        <Route path="/" exact />
        <Route path="/about" component={About} />
        <Route path="/testimonials" />
        <Route path="/blog" />
        <Route path="/uwc" />
      </Routes>
    </Router>
    </>
  );
}

export default App;
