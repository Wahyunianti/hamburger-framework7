/* eslint-disable react-hooks/rules-of-hooks */
import ReactDOM from 'react-dom/client';
import Framework7 from 'framework7/lite-bundle';
import Framework7React from 'framework7-react';
import 'material-icons/iconfont/material-icons.css';
import './../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import './style.css';
import './index.css';
import App from './App';

// Inisialisasi Framework7-React
Framework7.use(Framework7React);

// Render aplikasi
ReactDOM.createRoot(document.getElementById('app')!).render(<App />);
