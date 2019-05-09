import React from 'react';
import GlobalStyle from '../styles/Global';
import Helmet from 'react-helmet';

export default ({ children }) => (
  <>
    <Helmet title="BinaryCapsule">
      <html lang="en" />
    </Helmet>
    <div>
      {children}
      <GlobalStyle />
    </div>
  </>
);
