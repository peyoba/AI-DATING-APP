import { UserProvider } from '../contexts/UserContext';
import type { AppProps } from 'next/app';
import type { NextComponentType } from 'next';
import type { ReactElement } from 'react';
import '../styles/globals.css';

type CustomAppProps = AppProps & {
  Component: NextComponentType;
};

function MyApp({ Component, pageProps }: CustomAppProps): ReactElement {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;