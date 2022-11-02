import '../styles/global.css'
import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { UserProvider } from '@auth0/nextjs-auth0'
import Layout from 'components/ui/Layout'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'
import Modals from 'components/modal'
import React from 'react'
import API from 'lib/api'
import { CacheKey } from 'types'

const queryClient = new QueryClient()

function App({ Component, pageProps }: AppProps) {
  const prefetchData = async () => {
    await queryClient.prefetchQuery([CacheKey.TRACKS], API.fetchTracks)
    await queryClient.prefetchQuery([CacheKey.USER], API.fetchUser)
  }

  React.useEffect(() => {
    prefetchData()
  }, [])

  return (
    <>
      <Head>
        <title>Diradical</title>
      </Head>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <ThemeProvider theme={theme}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
              <Modals />
            </ThemeProvider>
          </RecoilRoot>
        </QueryClientProvider>
      </UserProvider>
    </>
  )
}

export default App
