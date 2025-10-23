
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-2">Belza</h2>
            <p className="text-gray-400 text-sm">{t('footer.description')}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-white">{t('header.services')}</Link></li>
              <li><Link to="/plans" className="hover:text-white">{t('header.plans')}</Link></li>
              <li><Link to="/about" className="hover:text-white">{t('header.about')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/terms" className="hover:text-white">{t('footer.terms')}</Link></li>
              <li><Link to="/privacy" className="hover:text-white">{t('footer.privacy')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{t('footer.contact')}</h3>
            <p className="text-sm text-gray-400">contact@belza.com</p>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Belza. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
