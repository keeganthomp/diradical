import { getProviders, signIn } from 'next-auth/react'
import styled from 'styled-components'
import React from 'react'
import Loader from 'components/ui/Loader'
import useUser from 'hooks/useUser'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import TextInput from 'components/ui/Inputs/TextInput'
import { Button } from 'components/ui/Buttons'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  width: 14rem;
`

const ButtonsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  padding: 2.5rem 0;
`

const SocialLoginButton = styled.button`
  width: 100%;
  border: none;
  outline: none;
  background: #e1dfdf;
  border-radius: 15px;
  height: 2rem;
  color: #000;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #dbdbdba9;
    cursor: pointer;
  }
`

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  padding-bottom: 2rem;
`

const CredentialForm = styled.form`
  display: grid;
  justify-items: center;
  row-gap: 1.25rem;
`
const CredentialsSubmitBtn = styled(Button)`
  height: 2rem;
  width: 100%;
`
const SignupText = styled.p`
  font-size: 14px;
  padding-top: 8px;
  text-align: center;
`
const SignupLink = styled.a`
  color: ${({ theme }) => theme.colors.main};
  &:visited {
    color: ${({ theme }) => theme.colors.main};
  }
`

const Error = styled.p`
  color: red;
  font-size: 14px;
`

export default function SigninPage({
  socialProviders,
}: {
  socialProviders: any[]
}) {
  const router = useRouter()
  const { isAuthenticated } = useUser()
  const [socialSignin, setSocialSignin] = React.useState({
    provider: '',
    isSigningIn: false,
  })
  const { register, handleSubmit, formState, setError } = useForm({
    mode: 'all',
    defaultValues: {
      username: '',
      password: '',
    },
  })
  const onCredentialsSubmit = async ({ username, password }) => {
    const res = await signIn('credentials', {
      redirect: false,
      username,
      password,
      callbackUrl: '/',
    })
    if (res.error) {
      setError('password', {
        type: 'custom',
        message: 'Username or password is incorrect',
      })
    }
  }

  React.useEffect(() => {
    if (isAuthenticated) {
      router.push('/')
    }
  }, [isAuthenticated])

  const handleSigninWithSocial = async (provider) => {
    setSocialSignin({
      provider,
      isSigningIn: true,
    })
    try {
      signIn(provider, {
        redirect: false,
        callbackUrl: '/',
      })
    } catch (error) {
      setSocialSignin({
        provider: '',
        isSigningIn: false,
      })
      console.log(error)
    }
  }

  console.log('formState.errors', formState.errors)

  return (
    <Wrapper>
      <Title>Log in</Title>
      <Content>
        <CredentialForm onSubmit={handleSubmit(onCredentialsSubmit)}>
          <TextInput
            placeholder='Username or Email'
            {...register('username', {
              required: 'Username is required',
            })}
          />
          {formState.errors.username && (
            <Error>{formState.errors.username.message}</Error>
          )}
          <TextInput
            placeholder='Password'
            type='password'
            {...register('password', {
              required: 'Password is required',
            })}
          />
          {formState.errors.password && (
            <Error>{formState.errors.password.message}</Error>
          )}
          <CredentialsSubmitBtn
            disabled={!formState.isValid || formState.isSubmitting}
            type='submit'
          >
            Login
          </CredentialsSubmitBtn>
        </CredentialForm>
        <SignupText>
          Don&apos;t have an account?{' '}
          <SignupLink href='/signup'>Sign up</SignupLink>
        </SignupText>
        <ButtonsContainer>
          {Object.values(socialProviders).map((provider) => (
            <SocialLoginButton
              disabled={socialSignin.isSigningIn}
              key={provider.id}
              onClick={() => handleSigninWithSocial(provider.id)}
            >
              {socialSignin.provider === provider.id &&
              socialSignin.isSigningIn ? (
                <Loader color='#000' size={12} />
              ) : (
                `Log in with ${provider.name}`
              )}
            </SocialLoginButton>
          ))}
        </ButtonsContainer>
      </Content>
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
