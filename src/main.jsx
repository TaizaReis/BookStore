import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import './index.css'; // Caso tenha algum estilo global

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router /> {/* O Router vai gerenciar as rotas e renderizar o layout */}
    </BrowserRouter>
  </React.StrictMode>
);

