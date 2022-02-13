import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Navigation from './Navigation';

function App() {
  return (
    <>
      <Navigation />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
