// General Imports
import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages Imports
import HomePage from './pages/HomePage';
import MusicPage from './pages/MusicPage';
import ShowsPage from './pages/ShowsPage';
import ShopPage from './pages/StorePage';
import ContactPage from './pages/ContactPage';

// Components Imports
import { ShoppingCartProvider } from './context/ShoppingCartContext';

const App: FC = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/music' element={<MusicPage />} />
          <Route path='/shows' element={<ShowsPage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>

  );
};

export default App;
