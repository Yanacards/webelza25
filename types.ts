
export type Language = 'en' | 'ar';
export type Direction = 'ltr' | 'rtl';

export interface LanguageContextType {
  language: Language;
  direction: Direction;
  translations: Record<string, any>;
  setLanguage: (language: Language) => void;
}
