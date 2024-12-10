import { MemoryRouter, Route, Routes } from 'react-router';
import React from 'react';
import { createRoot } from 'react-dom/client';
import '@src/styles/index.css';
import Popup from '@src/Popup';
import Home from '@src/Home';

function init() {
  const appContainer = document.querySelector('#app-container');
  if (!appContainer) {
    throw new Error('Can not find #app-container');
  }
  const root = createRoot(appContainer);

  root.render(
    <React.StrictMode>
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popup" element={<Popup />} />
        </Routes>
      </MemoryRouter>
    </React.StrictMode>,
  );
}

init();
