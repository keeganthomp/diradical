import { getProviders, signIn } from 'next-auth/react'
import styled from 'styled-components'
import React from 'react'
import Loader from 'components/ui/Loader'
import useUser from 'hooks/useUser'
import { useRouter } from 'next/router'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ButtonsContainer = styled.div`
  width: 12rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  padding: 1rem 0;
`

const LoginButton = styled.button`
  width: 100%;
  border: none;
  outline: none;
  background: #f0f0f0;
  border-radius: 15px;
  height: 2rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #dbdbdba9;
    cursor: pointer;
  }
`

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`

export default function SignIn({
  socialProviders,
}: {
  socialProviders: any[]
}) {
  const router = useRouter()
  const { isAuthenticated } = useUser()
  const [selectedProvider, setSelectedProvider] = React.useState('')
  const [isSigningIn, setIsSigningIn] = React.useState(false)

  React.useEffect(() => {
    if (isAuthenticated) {
      router.push('/')
    }
  }, [isAuthenticated])

  const handleSigninWithSocial = async (provider) => {
    setSelectedProvider(provider)
    setIsSigningIn(true)
    try {
      signIn(provider, {
        redirect: false,
        callbackUrl: '/',
      })
    } catch (error) {
      setIsSigningIn(false)
      console.log(error)
    }
  }

  return (
    <Wrapper>
      <Title>Log in</Title>
      <ButtonsContainer>
        {Object.values(socialProviders).map((provider) => (
          <LoginButton
            disabled={isSigningIn}
            key={provider.id}
            onClick={() => handleSigninWithSocial(provider.id)}
          >
            {selectedProvider === provider.id && isSigningIn ? (
              <Loader color='#000' size={12} />
            ) : (
              `Sign in with ${provider.name}`
            )}
          </LoginButton>
        ))}
      </ButtonsContainer>
    </Wrapper>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  const { credentials, ...socialProviders } = providers
  return {
    props: { socialProviders },
  }
}
