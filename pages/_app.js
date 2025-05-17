// pages/_app.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CssBaseline, Container } from '@mui/material';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg" sx={{ minHeight: '80vh', py: 4 }}>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </>
  );
}
