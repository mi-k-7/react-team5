import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import QuizHeader from './QuizHeader';
import Quiz7 from './Quiz7/Quiz7';

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter>
      <QuizHeader />
      <App />
    </BrowserRouter>
  );

reportWebVitals();
