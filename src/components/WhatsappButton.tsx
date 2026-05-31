import { Instagram } from 'lucide-react';
import '../styles/whatsapp.css';

export function WhatsappButton() {
  return (
    <a 
      href="https://instagram.com/vmmakeup__m" 
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Seguir no Instagram"
    >
      <Instagram />
    </a>
  );
}
