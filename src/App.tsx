import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import MusicPage from './components/MusicPage';
import ShowsPage from './components/ShowsPage';
import ShopPage from './components/ShopPage';
import ContactPage from './components/ContactPage';
import NavbarComponent from './components/NavbarComponent';
import ModalFooterComponent from './components/FooterComponent';

export interface IAppProps { }

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/music' element={<MusicPage />} />
        <Route path='/shows' element={<ShowsPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <ModalFooterComponent />
    </BrowserRouter>
  );
};

export default App;
