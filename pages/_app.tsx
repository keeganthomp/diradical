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

class UnauthorizedError extends Error {
  isUnauthorized: boolean
  constructor(message = 'Unauthorized') {
    super(message)
    this.isUnauthorized = true
  }
}

const fetcher = async (url) => {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('didToken')}`,
    },
  })
  const isUnauthorized = res.status === 401
  if (isUnauthorized) {
    localStorage.removeItem('didToken')
    throw new UnauthorizedError()
  }
  return res.json()
}

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Dierad</title>
      </Head>
      <SWRConfig
        value={{
          fetcher,
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
