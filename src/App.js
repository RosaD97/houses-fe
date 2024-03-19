import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../src/scss/main.css';
import Homepage from './pages/Homepage'
import Dettaglio from "./pages/Dettaglio";
import Nopage from "./pages/Nopage";
import Footer from '../src/components/Footer';
import Layout from "./pages/Layout";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/dettaglio/:id" element={<Dettaglio />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
