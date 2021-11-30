import React from 'react';
import Header from './Header';

const Layout = ({ children }) => (
  <>
    <Title title="Geeky Minders" />
    <Header />
    {children}
  </>
);

export default Layout;
