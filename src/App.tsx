import React, { useState, useEffect } from 'react';
import ProfilePicture from './components/ProfilePicture';
import './scss/style.scss';

import { useTranslation } from 'react-i18next';

function App() {
  const fullPage = {
    minHeight: "100vh"
  }
  const { t, i18n } = useTranslation()
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row" style={fullPage}>
          <div className="col-4 bg-dark">
            <ProfilePicture image={require('./assets/douglas.jpg')} />
          </div>
          <div className="col-8 bg-light">
            <h1>{t('name')}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
