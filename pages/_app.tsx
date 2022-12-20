import '../styles/global.css'
import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import Layout from 'components/ui/Layout'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import Head from 'next/head'
import Modals from 'components/modal'
import React from 'react'
import { SWRConfig } from 'swr'
import ConnectFromCache from 'components/ConnectFromCache'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Diradical</title>
      </Head>
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <RecoilRoot>
          <ConnectFromCache />
          <ThemeProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <Modals />
          </ThemeProvider>
        </RecoilRoot>
      </SWRConfig>
    </>
  )
}

export default App
