import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Memorandum from './pages/Memorandum';
import './App.css';

function App() {
  return (
    <Router basename="/TP">
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/memorandum" element={<Memorandum />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
