import React from 'react';
import PropTypes from 'prop-types'

import './app.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App({ children }) {
  return (
    <div className="app">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default App;


App.propTypes = {
  children: PropTypes.node
}