import React from 'react';
import "./index.css";
import ReactDOM from 'react-dom/client';
import App from './App';
import { SidebarProvider } from './utils/SidebarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
    <App />
  </SidebarProvider>
);

