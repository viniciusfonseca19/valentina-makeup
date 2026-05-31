import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';
import '../styles/catalog.css';

type CategoryType = 'todos' | 'rosto' | 'labios' | 'olhos' | 'produtos-intimos' | 'presentes';

export function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoriesList: { value: CategoryType; label: string }[] = [
    { value: 'todos', label: 'Todos os Produtos' },
    { value: 'rosto', label: 'Pele & Rosto' },
    { value: 'labios', label: 'Lábios' },
    { value: 'olhos', label: 'Olhos' },
    { value: 'produtos-intimos', label: 'Produtos Íntimos' },
    { value: 'presentes', label: 'Presentes' }
  ];

  const clearFilters = () => {
    setSelectedCategory('todos');
    setSearchQuery('');
  };

  return (
    <section id="catalog" className="catalog">
      <div className="container">
        <h2 className="section-title">Nosso <span>Catálogo</span></h2>
        <p className="section-subtitle">
          Descubra nossa seleção premium de produtos de beleza, escolhidos a dedo para realçar o seu brilho natural.
        </p>

        {/* Search & Categories Bar */}
        <div className="catalog-controls">
          <div className="catalog-search-wrapper">
            <Search className="search-icon-left" size={20} />
            <input 
              type="text" 
              className="catalog-search-input" 
              placeholder="Buscar por base, batom, gloss, marca de cílios..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="search-clear-btn" onClick={() => setSearchQuery('')} aria-label="Limpar busca">
                <X size={18} />
              </button>
            )}
          </div>

          <div className="catalog-categories">
            {categoriesList.map((cat) => (
              <button
                key={cat.value}
                className={`category-btn ${selectedCategory === cat.value ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="catalog-grid">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <h3 className="no-results-title">Nenhum produto encontrado</h3>
            <p>Tente alterar sua busca ou selecionar outra categoria.</p>
            <button className="btn btn-primary no-results-btn" onClick={clearFilters}>
              Mostrar Todos os Produtos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
