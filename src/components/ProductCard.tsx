import { motion } from 'motion/react';
import type { Product } from '../data/products';
import '../styles/product-card.css';

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const handleBuyClick = () => {
    const message = product.customizable && product.whatsappMessage
      ? product.whatsappMessage
      : `Olá! Tenho interesse neste produto: ${product.name}`;
    const text = encodeURIComponent(message);
    window.open(`https://wa.me/558596953393?text=${text}`, '_blank');
  };

  return (
    <motion.div 
      className="product-card"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.25) }}
    >
      <div className="product-image-container" />
      <div className="product-content">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          {product.price && <span className="product-price">{product.price}</span>}
          <button className="btn-buy" onClick={handleBuyClick}>
            {product.customizable ? 'Montar Buquê' : 'Comprar'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
