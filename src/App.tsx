import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Catalog } from './components/Catalog';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { WhatsappButton } from './components/WhatsappButton';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula tempo de carregamento da aplicação
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <Navbar />
          <Hero />
          <Catalog />
          <Location />
          <Footer />
          <WhatsappButton />
        </>
      )}
    </>
  );
}
