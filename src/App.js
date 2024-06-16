import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';

import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';

import Ardeo from './pages/ProjectPages/Ardeo';
import Wire from './pages/ProjectPages/Wire';
import Brevvit from './pages/ProjectPages/Brevvit';
import Moin from './pages/ProjectPages/Moin';
import ARFlip from './pages/ProjectPages/ARFlip';
import EnvSoc from './pages/ProjectPages/EnvSoc';
import MunAtk from './pages/ProjectPages/MunAtk';
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
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects/ardeo" element={<Ardeo />} />
            <Route path="projects/wire" element={<Wire />} />
            <Route path="projects/brevvit" element={<Brevvit />} />
            <Route path="projects/moin" element={<Moin />} />
            <Route path="projects/arflip" element={<ARFlip />} />
            <Route path="projects/iztechsailing" element={<Sailing />} />
            <Route path="projects/munatk" element={<MunAtk />} />
            <Route path="projects/envsoc" element={<EnvSoc />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
