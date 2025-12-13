import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AnnouncementBar from './components/AnnouncementBar';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import Home from './pages/Home';
import Workbench from './components/solutions/Workbench';
import Xilos from './components/solutions/Xilos';
import Resources from './pages/Resources';
import Company from './pages/Company';
import Contactus from './pages/Contactus';
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <AnnouncementBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions/workbench" element={<Workbench />} />
          <Route path="/solutions/xilos" element={<Xilos />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
