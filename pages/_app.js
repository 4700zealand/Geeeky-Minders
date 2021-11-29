import React from 'react';

import '../styles/globals.scss';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    
    <Layout>
        <title>Geeky Minders</title>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
