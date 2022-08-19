import type { AppProps, NextWebVitalsMetric } from 'next/app'
import Layout from '../components/Layout'
import { store } from '../store/index'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  return (
     <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
     </Provider>
  )
}

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric)
// }

export default MyApp
