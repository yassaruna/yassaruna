import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { t } from 'ttag';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{}}>
      <Head>
        <title>{t`Learn to read the Holy Quran - Yassaruna`}</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default CustomApp;
