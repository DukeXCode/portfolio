import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import i18n from "i18next";
import {initReactI18next} from "react-i18next";

await i18n
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        debug: true,
        resources: {
            en: {
                translation: {
                    'slogan': 'Building scalable applications with modern tech stacks.',
                    'currently': 'Currently working with TypeScript, React and Node.js.'
                }
            }
        }
    });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
