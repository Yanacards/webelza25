
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Language, Direction, LanguageContextType } from '../types';
import en from '../locales/en.json';
import ar from '../locales/ar.json';

const translations: Record<Language, any> = { en, ar };

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  direction: 'ltr',
  translations: en,
  setLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [direction, setDirection] = useState<Direction>('ltr');
  const [currentTranslations, setCurrentTranslations] = useState(translations.en);

  useEffect(() => {
    setDirection(language === 'ar' ? 'rtl' : 'ltr');
    setCurrentTranslations(translations[language]);
  }, [language]);

  const contextValue = {
    language,
    direction,
    translations: currentTranslations,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
