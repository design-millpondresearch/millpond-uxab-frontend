import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import AnnouncementBar from './components/AnnouncementBar';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import Home from './pages/Home';
import Workbench from './components/solutions/Workbench';
import Xilos from './components/solutions/Xilos';
import Partner from './pages/Partners';
import Resources from './pages/Resources';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Footer from "./components/Footer";

/**
 * Root application component with conditional announcement bar.
 *
 * The announcement bar previously rendered on every page, but we now check
 * the current route via `useLocation` and display the bar only on the
 * home page ("/"). This approach preserves the original routing
 * structure while keeping the bar accessible for future page-specific
 * messages if needed.
 */
function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        {/* Show the announcement bar only on the home page */}
        {location.pathname === '/' && <AnnouncementBar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions/workbench" element={<Workbench />} />
          <Route path="/solutions/xilos" element={<Xilos />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;