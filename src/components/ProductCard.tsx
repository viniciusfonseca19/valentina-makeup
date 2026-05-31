import { motion } from 'motion/react';
import type { Product } from '../data/products';
import '../styles/product-card.css';

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const handleBuyClick = () => {
    const text = encodeURIComponent(`Olá! Tenho interesse neste produto: ${product.name}`);
    window.open(`https://wa.me/558596953393?text=${text}`, '_blank');
  };

  return (
    <motion.div 
      className="product-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="product-image-container" />
      <div className="product-content">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">{product.price}</span>
          <button className="btn-buy" onClick={handleBuyClick}>
            Comprar
          </button>
        </div>
      </div>
    </motion.div>
  );
}
