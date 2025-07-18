import React, { useState } from 'react';
import { products } from '../data/mock';
import { Search, Filter } from 'lucide-react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const categories = ['Tümü', ...new Set(products.map(product => product.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tümü' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="section-container">
          <h1 className="display-lg text-primary mb-6">Ürünlerimiz</h1>
          <p className="body-xl text-secondary max-w-3xl mx-auto">
            Geleneksel yöntemlerle üretilen, doğal ve lezzetli turşu çeşitlerimizi keşfedin.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-card border-b border-light">
        <div className="section-container">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" />
              <input
                type="text"
                placeholder="Ürün ara..."
                className="w-full pl-10 pr-4 py-3 border border-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-4">
              <Filter size={20} className="text-muted" />
              <select
                className="px-4 py-3 border border-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-page">
        <div className="section-container">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="heading-2 text-primary mb-4">Ürün bulunamadı</h3>
              <p className="body-lg text-secondary">Arama kriterlerinizi değiştirip tekrar deneyin.</p>
            </div>
          ) : (
            <div className="design-grid">
              {filteredProducts.map((product) => (
                <div key={product.id} className="design-card group">
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </div>
                  </div>
                  
                  <h3 className="card-title group-hover:text-green-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="card-description mb-4">{product.description}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-green-600">{product.price}</span>
                    <span className="text-sm text-muted bg-subtle px-2 py-1 rounded">
                      {product.size}
                    </span>
                  </div>
                  
                  <a
                    href={`https://wa.me/905551234567?text=Merhaba, ${product.name} hakkında bilgi almak istiyorum.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full"
                  >
                    WhatsApp'tan Sipariş Ver
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="section-container text-center">
          <h2 className="heading-2 text-primary mb-6">Özel İstekleriniz Var mı?</h2>
          <p className="body-lg text-secondary mb-8 max-w-2xl mx-auto">
            Listede göremediğiniz bir ürün varsa, bizimle iletişime geçin. 
            Özel siparişlerinizi de karşılayabiliyoruz.
          </p>
          <a
            href="https://wa.me/905551234567?text=Merhaba, özel bir sipariş talebi hakkında bilgi almak istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Özel Sipariş Talebi
          </a>
        </div>
      </section>
    </div>
  );
};

export default Products;