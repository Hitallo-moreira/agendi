import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/Global.css'
import AppRoutes from './routes';
import { DateTimeProvider } from './context/DateTimeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DateTimeProvider>
      <AppRoutes />
    </DateTimeProvider>
  </React.StrictMode>,
);
