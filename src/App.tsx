import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Disparar o evento page_view com base no window.location
    const handlePageView = () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'page_view',
        page_path: window.location.pathname,
        page_title: document.title,
      });
    };

    // Chamar o evento quando o componente é montado
    handlePageView();

    // Adicionar um listener para mudanças no histórico (para Single Page Applications)
    const handlePopState = () => handlePageView();
    window.addEventListener('popstate', handlePopState);

    // Limpar o listener quando o componente for desmontado
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
