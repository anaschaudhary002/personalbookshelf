import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import PersonalBookShelf from './Component/PersonalBookShelfPage'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="bookshelf" element={<PersonalBookShelf />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
  </>
);


