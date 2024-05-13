import React from 'react';
import "./index.css";
import ReactDOM from 'react-dom/client';
import App from './App';
import { SidebarProvider } from './utils/SidebarContext';
import { ThemeProvider } from './utils/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <SidebarProvider>
                <App />
            </SidebarProvider>
        </ThemeProvider>
    </React.StrictMode>
);

