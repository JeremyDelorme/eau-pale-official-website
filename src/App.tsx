// General Imports
import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages Imports
import HomePage from './pages/HomePage';
import MusicPage from './pages/MusicPage';
import ShowsPage from './pages/ShowsPage';
import StorePage from './pages/StorePage';
import ContactPage from './pages/ContactPage';

// Components Imports
import { ShoppingCartProvider } from './context/ShoppingCartContext';

const App: FC = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/eau-pale-official-website' element={<HomePage />} />
          <Route path='/eau-pale-official-website/music' element={<MusicPage />} />
          <Route path='/eau-pale-official-website/shows' element={<ShowsPage />} />
          <Route path='/eau-pale-official-website/shop' element={<StorePage />} />
          <Route path='/eau-pale-official-website/contact' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
