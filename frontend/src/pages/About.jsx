import React from 'react';
import { aboutContent, companyInfo } from '../data/mock';
import { Calendar, MapPin, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="section-container">
          <h1 className="display-lg text-primary mb-6">Hakkımızda</h1>
          <p className="body-xl text-secondary max-w-3xl mx-auto">
            {aboutContent.story}
          </p>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <div className="design-grid">
            <div className="design-card text-center">
              <div className="card-icon mx-auto">
                <Calendar size={32} color="white" />
              </div>
              <h3 className="card-title">Kuruluş Yılı</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">{companyInfo.establishedYear}</p>
              <p className="card-description">40 yılı aşkın deneyim</p>
            </div>
            <div className="design-card text-center">
              <div className="card-icon mx-auto">
                <MapPin size={32} color="white" />
              </div>
              <h3 className="card-title">Lokasyon</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">İstanbul</p>
              <p className="card-description">Türkiye'nin kalbi</p>
            </div>
            <div className="design-card text-center">
              <div className="card-icon mx-auto">
                <Users size={32} color="white" />
              </div>
              <h3 className="card-title">Aile İşletmesi</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">3</p>
              <p className="card-description">Nesil deneyim</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-page">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="design-card">
              <div className="card-icon">
                <Target size={32} color="white" />
              </div>
              <h3 className="card-title">Misyonumuz</h3>
              <p className="card-description">{aboutContent.mission}</p>
            </div>
            <div className="design-card">
              <div className="card-icon">
                <Users size={32} color="white" />
              </div>
              <h3 className="card-title">Vizyonumuz</h3>
              <p className="card-description">{aboutContent.vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <h2 className="heading-2 text-center text-primary mb-16">Değerlerimiz</h2>
          <div className="design-grid">
            {aboutContent.values.map((value, index) => (
              <div key={index} className="design-card text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="card-title">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-page">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-center text-primary mb-16">Hikayemiz</h2>
            <div className="bg-card rounded-2xl p-12 shadow-lg">
              <p className="body-lg text-secondary leading-relaxed">
                Anadolu Turşuları, 1985 yılında İstanbul'da küçük bir atölyede başlayan hikayemiz, 
                bugün binlerce müşteriye ulaşan bir aile geleneğine dönüştü. Büyükannelerimizin 
                tariflerini modern üretim teknikleriile birleştirerek, her damak zevkine hitap eden 
                turşular üretiyoruz.
              </p>
              <br />
              <p className="body-lg text-secondary leading-relaxed">
                Doğal fermentasyon yöntemlerini kullanarak, hiçbir kimyasal katkı maddesi 
                kullanmadan ürettiğimiz turşularımız, sadece sağlıklı değil, aynı zamanda 
                geleneksel Türk mutfağının eşsiz lezzetlerini yaşatmaktadır.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;