import { Provider } from 'next-auth/client'
import { AppProps } from 'next/app'

import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
