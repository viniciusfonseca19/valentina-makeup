import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import '../styles/hero.css';

export function Hero() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-decoration hero-dec-1"></div>
      <div className="hero-decoration hero-dec-2"></div>
      
      <div className="container">
        <motion.div 
          className="hero-content hero-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeIn}
        >
          {/* Tag de destaque */}
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <Sparkles size={14} className="hero-badge-icon" />
            <span>BELEZA, QUALIDADE E PREÇO JUSTO</span>
          </motion.div>

          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Valentina Makeup
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Beleza, cosméticos e cuidados pessoais.
          </motion.p>

          <motion.div
            className="hero-accent"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <Sparkles size={14} className="hero-accent-icon" />
            <span>Feito com amor e qualidade</span>
          </motion.div>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a href="https://wa.me/c/558596953393" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Acessar Catálogo
            </a>
            <a 
              href="https://wa.me/558596953393" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              Falar com Consultora
            </a>
          </motion.div>

          {/* Removido selo de avaliação e destaques conforme solicitado */}
        </motion.div>
      </div>
    </section>
  );
}
