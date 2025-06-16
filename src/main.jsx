import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Principal from './principal.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Principal />
    </BrowserRouter>
  </React.StrictMode>
);
