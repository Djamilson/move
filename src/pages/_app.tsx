import GlobalStyled from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyled />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
