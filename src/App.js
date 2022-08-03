import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import About from './pages/About';
import Footer from './components/Footer';
import SignUp from './pages/Sign-Up';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/testimonials" />
          <Route path="/blog" />
          <Route path="/uwc" />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
