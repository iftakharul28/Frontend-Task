import React from 'react';
import '../styles/scss/style.scss';
import { Layout } from '../components';
import { StateContext } from '../context/StateContext';
function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
