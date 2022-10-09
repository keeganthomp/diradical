import '../styles/global.css'
import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { UserProvider } from '@auth0/nextjs-auth0'
import Layout from 'components/ui/Layout'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </RecoilRoot>
    </UserProvider>
  )
}

export default App
