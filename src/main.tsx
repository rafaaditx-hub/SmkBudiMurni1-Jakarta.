import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeSettingsModal } from './components/ThemeSettingsModal';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
      <ThemeSettingsModal />
    </ThemeProvider>
  </React.StrictMode>
);
