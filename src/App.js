import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';

import Ardeo from './pages/ProjectPages/Ardeo/Ardeo';
import Wired from './pages/ProjectPages/Wired/Wired';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects/ardeo" element={<Ardeo />} />
            <Route path="projects/wired" element={<Wired />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
