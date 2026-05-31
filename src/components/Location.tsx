import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import '../styles/location.css';

export function Location() {
  return (
    <section id="location" className="location">
      <div className="container">
        <div className="location-content">
          <h2 className="section-title">Onde <span>Estamos</span></h2>
          <p className="section-subtitle">
            Venha nos visitar e conheça de perto a qualidade dos nossos produtos em um ambiente preparado com carinho para você.
          </p>
          
          <motion.div 
            className="location-info"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MapPin size={32} color="var(--color-main-pink)" style={{ margin: '0 auto 1rem' }} />
            <p className="location-address">
              Maracanaú - CE<br/>
              Brasil
            </p>
          </motion.div>

          <motion.div 
            className="location-map-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127393.30396417559!2d-38.694605963234914!3d-3.8763590022370776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c75249ea36f731%3A0xe5a14d5f4fe4a77b!2sMaracana%C3%BA%2C%20CE!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              className="location-map" 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Localização Valentina Makeup"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
