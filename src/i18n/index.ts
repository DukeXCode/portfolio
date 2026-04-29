import en from './en.json';
import de from './de.json';

const translations = { en, de } as const;

type Locale = keyof typeof translations;
type TranslationKey = keyof typeof en;

export function useTranslations(lang: string) {
  const locale = (lang in translations ? lang : 'en') as Locale;
  return function t(key: TranslationKey): string {
    return translations[locale][key];
  };
}
