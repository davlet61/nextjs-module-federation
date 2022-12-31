import '../globals.css';

import App, { type AppContext, type AppType } from 'next/app';

const MyApp: AppType = ({ Component, pageProps }) => <Component {...pageProps} />;

MyApp.getInitialProps = async (ctx: AppContext) => {
  const appProps = await App.getInitialProps(ctx);
  return appProps;
};
export default MyApp;
