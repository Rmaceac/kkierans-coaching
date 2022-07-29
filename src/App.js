import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/about" element={<About />}/>
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


// console.log(sum(4, 2));
// // Output: Ref Error

// const sum = (a, b) => {
//   return a + b;
// };

// console.log(subtract(4, 2));
// // Output: 2

// function subtract(a, b) {
//   return a - b;
// };