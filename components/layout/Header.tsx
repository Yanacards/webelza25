
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useTranslation } from '../../hooks/useTranslation';
import { Globe } from 'lucide-react';

const Header: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'bg-teal-600 text-white' : 'text-gray-700 hover:bg-teal-50 hover:text-teal-700'
    }`;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-teal-700">Belza</h1>
        <nav className="hidden md:flex items-center space-x-2">
          <NavLink to="/" className={navLinkClass}>{t('header.home')}</NavLink>
          <NavLink to="/services" className={navLinkClass}>{t('header.services')}</NavLink>
          <NavLink to="/plans" className={navLinkClass}>{t('header.plans')}</NavLink>
          <NavLink to="/about" className={navLinkClass}>{t('header.about')}</NavLink>
          <NavLink to="/dashboard/client" className={navLinkClass}>{t('header.dashboard')}</NavLink>
        </nav>
        <div className="flex items-center space-x-4">
          <NavLink to="/login" className="px-4 py-2 text-sm font-medium text-teal-600 border border-teal-600 rounded-md hover:bg-teal-600 hover:text-white transition-colors">
            {t('header.login')}
          </NavLink>
          <button onClick={toggleLanguage} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Globe className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
