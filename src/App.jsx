import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import Home from './pages/Home';
import Xilos from './components/solutions/Xilos';
import Partner from './pages/Partners';
import Resources from './pages/Resources';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Redirect old WorkBench URL to Xilos page */}
          <Route path="/solutions/workbench" element={<Navigate to="/solutions/xilos" replace />} />
          <Route path="/solutions/xilos" element={<Xilos />} />
          <Route path="/partners" element={<Partner />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
