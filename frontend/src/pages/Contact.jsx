import React, { useState } from 'react';
import { contactInfo, companyInfo } from '../data/mock';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Merhaba, 
    
İsim: ${formData.name}
Email: ${formData.email}
Telefon: ${formData.phone}
Mesaj: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="section-container">
          <h1 className="display-lg text-primary mb-6">İletişim</h1>
          <p className="body-xl text-secondary max-w-3xl mx-auto">
            Size nasıl yardımcı olabiliriz? Bizimle iletişime geçin!
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <div className="design-grid">
            <div className="design-card text-center">
              <div className="card-icon mx-auto">
                <Phone size={32} color="white" />
              </div>
              <h3 className="card-title">Telefon</h3>
              <p className="text-lg font-medium text-green-600 mb-2">
                {contactInfo.phone}
              </p>
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-sm text-secondary hover:text-green-600 transition-colors"
              >
                Şimdi Ara
              </a>
            </div>

            <div className="design-card text-center">
              <div className="card-icon mx-auto">
                <MessageCircle size={32} color="white" />
              </div>
              <h3 className="card-title">WhatsApp</h3>
              <p className="text-lg font-medium text-green-600 mb-2">
                {contactInfo.whatsapp}
              </p>
              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-secondary hover:text-green-600 transition-colors"
              >
                Mesaj Gönder
              </a>
            </div>

            <div className="design-card text-center">
              <div className="card-icon mx-auto">
                <Mail size={32} color="white" />
              </div>
              <h3 className="card-title">E-posta</h3>
              <p className="text-lg font-medium text-green-600 mb-2">
                {contactInfo.email}
              </p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-sm text-secondary hover:text-green-600 transition-colors"
              >
                E-posta Gönder
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Address */}
      <section className="py-20 bg-page">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="design-card">
              <h2 className="heading-2 text-primary mb-6">Bize Yazın</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Adınızı ve soyadınızı girin"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="E-posta adresinizi girin"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Telefon numaranızı girin"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Mesajınızı yazın"
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  <Send size={20} className="mr-2" />
                  WhatsApp ile Gönder
                </button>
              </form>
            </div>

            {/* Address & Hours */}
            <div className="space-y-8">
              <div className="design-card">
                <div className="flex items-start space-x-4">
                  <div className="card-icon">
                    <MapPin size={32} color="white" />
                  </div>
                  <div>
                    <h3 className="card-title">Adres</h3>
                    <p className="card-description">{contactInfo.address}</p>
                  </div>
                </div>
              </div>

              <div className="design-card">
                <div className="flex items-start space-x-4">
                  <div className="card-icon">
                    <Clock size={32} color="white" />
                  </div>
                  <div>
                    <h3 className="card-title">Çalışma Saatleri</h3>
                    <p className="card-description">{contactInfo.workingHours}</p>
                    <p className="text-sm text-muted mt-2">Pazar günleri kapalı</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Social */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-primary mb-6">Bizi Takip Edin</h2>
            <p className="body-lg text-secondary mb-8">
              Sosyal medya hesaplarımızdan yeni ürünler ve özel tekliflerimizden haberdar olun.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href={`https://instagram.com/${contactInfo.socialMedia.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Instagram
              </a>
              <a
                href={`https://facebook.com/${contactInfo.socialMedia.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Facebook
              </a>
            </div>
          </div>

          <div className="bg-subtle rounded-2xl p-8 text-center">
            <h3 className="heading-2 text-primary mb-4">Hızlı İletişim</h3>
            <p className="body-lg text-secondary mb-6">
              En hızlı yanıt için WhatsApp'tan bize ulaşın!
            </p>
            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              WhatsApp'tan Yazın
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;