import React from 'react';
import { Link } from 'react-router-dom';
import { companyInfo, contactInfo } from '../data/mock';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">{companyInfo.name}</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {companyInfo.tagline}
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              {companyInfo.establishedYear}'ten beri geleneksel Türk turşu üretimi yapıyoruz. 
              Doğal malzemeler ve geleneksel tariflerle üretilen turşularımızla 
              sofralarınızı şenlendiriyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  Ürünler
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-green-400" />
                <span className="text-gray-300 text-sm">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle size={18} className="text-green-400" />
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-green-400" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-green-400 mt-1" />
                <span className="text-gray-300 text-sm leading-relaxed">
                  {contactInfo.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2025 {companyInfo.name}. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6">
              <a
                href={`https://instagram.com/${contactInfo.socialMedia.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Instagram
              </a>
              <a
                href={`https://facebook.com/${contactInfo.socialMedia.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;