import GlobalStyled from '../styles/global';
import AppProvider from '../hooks';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <GlobalStyled />
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
