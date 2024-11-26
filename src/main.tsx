import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import TagManager from 'react-gtm-module';

// Configuration initialization google tag manager
const tagManagerArgs = { gtmId: 'GTM-NS6RSHGF' };
TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
