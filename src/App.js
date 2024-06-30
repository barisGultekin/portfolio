import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';

import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Works from './pages/Works/Works';

import Privacy from './pages/Legals/Privacy';
import Terms from './pages/Legals/Terms';

import Ardeo from './pages/ProjectPages/Ardeo';
import Wire from './pages/ProjectPages/Wire';
import Brevvit from './pages/ProjectPages/Brevvit';
import ARFlip from './pages/ProjectPages/ARFlip';
import EnvSoc from './pages/ProjectPages/EnvSoc';
import Sailing from './pages/ProjectPages/Sailing';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <ScrollToTopButton />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Works />} />
            <Route path="contact" element={<Contact />} />

            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />

            <Route path="projects/ardeo" element={<Ardeo />} />
            <Route path="projects/wire" element={<Wire />} />
            <Route path="projects/brevvit" element={<Brevvit />} />
            <Route path="projects/arflip" element={<ARFlip />} />
            <Route path="projects/iztechsailing" element={<Sailing />} />
            <Route path="projects/envsoc" element={<EnvSoc />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
