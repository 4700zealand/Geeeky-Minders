import React from 'react';

import '../styles/globals.scss';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    
    <Layout>
     <Head>
          <meta name="GeekyMinders" content="width=device-width,minimum-scale=1, initial-scale=1" />
            <title>Geeky Minders</title>
        </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
