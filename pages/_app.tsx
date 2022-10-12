import '../styles/global.css'
import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { UserProvider } from '@auth0/nextjs-auth0'
import Layout from 'components/ui/Layout'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App({ Component, pageProps }: AppProps) {
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
            </ThemeProvider>
          </RecoilRoot>
        </QueryClientProvider>
      </UserProvider>
    </>
  )
}

export default App
