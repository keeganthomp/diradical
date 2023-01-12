import '../styles/global.css'
import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import Layout from 'components/Layout'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import Modals from 'components/modal'
import React from 'react'
import { SWRConfig } from 'swr'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'
import Head from 'next/head'

const fetcher = async (url) => {
  const res = await fetch(url)
  return res.json()
}

function App({
  Component,
  pageProps,
}: AppProps<{
  session: Session
}>) {
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
        <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
          <RecoilRoot>
            <ThemeProvider theme={theme}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
              <Modals />
            </ThemeProvider>
          </RecoilRoot>
        </SessionProvider>
      </SWRConfig>
    </>
  )
}

export default App
