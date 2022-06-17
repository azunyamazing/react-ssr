import type { AppProps } from 'next/app'

function MyApp(props: AppProps) {

  const { Component, pageProps } = props;

  // console.log('pageProps', props)

  return <Component {...pageProps} />
}

export default MyApp
