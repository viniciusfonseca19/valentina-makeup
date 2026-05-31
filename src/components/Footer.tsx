import { Instagram, MessageCircle } from 'lucide-react';
import '../styles/footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <h3 className="footer-brand">Valentina <span>Makeup</span></h3>
            <div className="footer-social">
              <a href="https://instagram.com/vmmakeup__m" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/558596953393" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <a href="#hero">Início</a>
            <a href="#catalog">Catálogo</a>
            <a href="#location">Localização</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          &copy; {currentYear} Valentina Makeup. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
