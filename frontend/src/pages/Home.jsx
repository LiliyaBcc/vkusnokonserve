import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Heart, Leaf } from 'lucide-react';
import { companyInfo, products } from '../data/mock';

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="display-lg text-primary mb-6">
              {companyInfo.name}
            </h1>
            <p className="body-xl text-secondary mb-8">
              {companyInfo.tagline}
            </p>
            <p className="body-lg text-secondary mb-12 max-w-2xl mx-auto">
              {companyInfo.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products" className="btn-primary">
                Ürünlerimizi Görün
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                İletişim
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <h2 className="heading-2 text-center text-primary mb-16">
            Neden VKUSNO KONSERVE?
          </h2>
          <div className="design-grid">
            <div className="design-card">
              <div className="card-icon">
                <Leaf size={32} color="white" />
              </div>
              <h3 className="card-title">Doğal İçerikler</h3>
              <p className="card-description">
                Kimyasal katkı maddesi kullanmadan, sadece doğal malzemelerle üretilen turşularımız.
              </p>
            </div>
            <div className="design-card">
              <div className="card-icon">
                <Award size={32} color="white" />
              </div>
              <h3 className="card-title">Geleneksel Tarifler</h3>
              <p className="card-description">
                Büyükannelerimizden öğrenilen geleneksel tariflerle hazırlanan lezzetli turşular.
              </p>
            </div>
            <div className="design-card">
              <div className="card-icon">
                <Heart size={32} color="white" />
              </div>
              <h3 className="card-title">Aile İşletmesi</h3>
              <p className="card-description">
                {companyInfo.establishedYear}'ten beri aile işletmesi olarak kaliteli üretim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-page">
        <div className="section-container">
          <h2 className="heading-2 text-center text-primary mb-16">
            Öne Çıkan Ürünler
          </h2>
          <div className="design-grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="design-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="card-title">{product.name}</h3>
                <p className="card-description mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">{product.price}</span>
                  <span className="text-sm text-muted">{product.size}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary">
              Tüm Ürünler
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="section-container text-center">
          <h2 className="heading-2 text-primary mb-6">
            Siparişinizi Hemen Verin
          </h2>
          <p className="body-lg text-secondary mb-8">
            WhatsApp üzerinden hızlıca sipariş verebilir, sorularınızı sorabilirsiniz.
          </p>
          <a
            href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4"
          >
            WhatsApp'tan Sipariş Ver
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;